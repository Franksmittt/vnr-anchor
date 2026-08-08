import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  defaultPricingCatalog,
  type PricingCatalog,
  type PricingService,
} from '@/data/pricing-data';
import { BACK_OFFICE_COOKIE, verifySessionToken } from '@/lib/back-office/auth';
import {
  getPricingCatalog,
  isPricingBlobConfigured,
  savePricingCatalogToBlob,
} from '@/lib/pricing/store';

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

  if (text.toUpperCase() === 'POR') return 'POR';
  if (text.toUpperCase() === 'FREE') return 'FREE';
  if (text.includes('%') || /per hour/i.test(text) || /included/i.test(text)) {
    return text;
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

  const category = record.category.trim();
  const description = record.description.trim();

  if (!category || !description) {
    return null;
  }

  return {
    category,
    subcategory: typeof record.subcategory === 'string' ? record.subcategory.trim() : '',
    code: typeof record.code === 'string' ? record.code.trim() : '',
    description,
    priceExcl: parsePriceValue(record.priceExcl),
    priceIncl: parsePriceValue(record.priceIncl),
  };
}

function normalizeCatalogPayload(body: unknown): PricingCatalog | null {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const record = body as Record<string, unknown>;
  const rawServices = Array.isArray(record.services) ? record.services : null;
  if (!rawServices) {
    return null;
  }

  const services = rawServices
    .map((item) => normalizeService(item))
    .filter((item): item is PricingService => item !== null);

  if (services.length === 0) {
    return null;
  }

  const categories = Array.isArray(record.categories)
    ? record.categories
        .filter((category): category is string => typeof category === 'string')
        .map((category) => category.trim())
        .filter(Boolean)
    : [];

  const derivedCategories = Array.from(new Set(services.map((service) => service.category)));
  const mergedCategories = [...categories];

  for (const category of derivedCategories) {
    if (!mergedCategories.includes(category)) {
      mergedCategories.push(category);
    }
  }

  return {
    version: 1,
    effectiveLabel:
      typeof record.effectiveLabel === 'string' && record.effectiveLabel.trim()
        ? record.effectiveLabel.trim()
        : defaultPricingCatalog.effectiveLabel,
    categories: mergedCategories,
    services,
  };
}

export async function GET() {
  if (!(await isAuthorized())) {
    return unauthorized();
  }

  const catalog = await getPricingCatalog();

  return NextResponse.json({
    catalog,
    services: catalog.services,
    categories: catalog.categories,
    effectiveLabel: catalog.effectiveLabel,
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
    const catalog = normalizeCatalogPayload(body);

    if (!catalog) {
      return NextResponse.json({ ok: false, error: 'Invalid pricing payload.' }, { status: 400 });
    }

    await savePricingCatalogToBlob(catalog);

    return NextResponse.json({
      ok: true,
      count: catalog.services.length,
      categoryCount: catalog.categories.length,
    });
  } catch (error) {
    console.error('Failed to save pricing:', error);

    const message =
      error instanceof Error && error.message
        ? error.message
        : 'Could not save prices. Please try again.';

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
