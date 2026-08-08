import { NextResponse } from 'next/server';
import { getPricingCatalog } from '@/lib/pricing/store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const catalog = await getPricingCatalog();
  return NextResponse.json({
    catalog,
    services: catalog.services,
    categories: catalog.categories,
    effectiveLabel: catalog.effectiveLabel,
  });
}
