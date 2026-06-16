import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import type { PricingService } from '@/data/pricing-data';
import { BACK_OFFICE_COOKIE, verifySessionToken } from '@/lib/back-office/auth';
import { getPricingServices, isPricingBlobConfigured, savePricingToBlob } from '@/lib/pricing/store';

export const dynamic = 'force-dynamic';

function unauthorized() {
  return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
}

async function isAuthorized(): Promise<boolean> {
  const cookieStore = await cookies();
  return await verifySessionToken(cookieStore.get(BACK_OFFICE_COOKIE)?.value);
}

function parsePriceValue(value: unknown): string | number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  const text = String(value ?? '').trim();
  if (!text) {
    return '';
  }

  if (text.toUpperCase() === 'POR' || text.toUpperCase() === 'FREE' || text.includes('%')) {
    return text.toUpperCase() === 'POR' ? 'POR' : text.toUpperCase() === 'FREE' ? 'FREE' : text;
  }

  const parsed = Number(text.replace(/,/g, ''));
  return Number.isFinite(parsed) ? parsed : text;
}

function normalizeService(input: unknown): PricingService | null {
  if (!input || typeof input !== 'object') {
    return null;
  }

  const record = input as Record<string, unknown>;

  if (typeof record.description !== 'string' || typeof record.category !== 'string') {
    return null;
  }

  return {
    category: record.category,
    subcategory: typeof record.subcategory === 'string' ? record.subcategory : '',
    code: typeof record.code === 'string' ? record.code : '',
    description: record.description,
    priceExcl: parsePriceValue(record.priceExcl),
    priceIncl: parsePriceValue(record.priceIncl),
  };
}

export async function GET() {
  if (!(await isAuthorized())) {
    return unauthorized();
  }

  const services = await getPricingServices();

  return NextResponse.json({
    services,
    blobConfigured: isPricingBlobConfigured(),
  });
}

export async function PUT(request: Request) {
  if (!(await isAuthorized())) {
    return unauthorized();
  }

  if (!isPricingBlobConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: 'BLOB_READ_WRITE_TOKEN is not configured. Add Vercel Blob storage and redeploy.',
      },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const rawServices = body?.services;

    if (!Array.isArray(rawServices)) {
      return NextResponse.json({ ok: false, error: 'Invalid pricing payload.' }, { status: 400 });
    }

    const services = rawServices
      .map((item) => normalizeService(item))
      .filter((item): item is PricingService => item !== null);

    if (services.length === 0) {
      return NextResponse.json({ ok: false, error: 'No valid services to save.' }, { status: 400 });
    }

    await savePricingToBlob(services);

    return NextResponse.json({ ok: true, count: services.length });
  } catch (error) {
    console.error('Failed to save pricing:', error);

    return NextResponse.json(
      { ok: false, error: 'Could not save prices. Please try again.' },
      { status: 500 },
    );
  }
}
