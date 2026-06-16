import { getPricingServices } from '@/lib/pricing/store';
import ServicesPageClient from './ServicesPageClient';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const initialPricing = await getPricingServices();
  return <ServicesPageClient initialPricing={initialPricing} />;
}
