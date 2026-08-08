import { getPricingCatalog } from '@/lib/pricing/store';
import ServicesPageClient from './ServicesPageClient';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const catalog = await getPricingCatalog();
  return <ServicesPageClient initialCatalog={catalog} />;
}
