import { NextResponse } from 'next/server';
import { getPricingServices } from '@/lib/pricing/store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const services = await getPricingServices();
  return NextResponse.json({ services });
}
