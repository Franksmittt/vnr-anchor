import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import { servicesData } from '@/data/services-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Services & Pricing',
  description: 'Comprehensive services and pricing for tax advisory, business structuring, secretarial services, financial reporting, and more. View our 2026 price list.',
  path: '/services',
  keywords: [
    'services',
    'pricing',
    'tax advisory',
    'business structuring',
    'secretarial services',
    'financial reporting',
    'CIPC',
    'SARS',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services & Pricing', url: '/services' },
]);

const servicesListItems = servicesData.map((s) => ({ name: s.title, url: `/services/${s.slug}` }));
const itemListSchema = generateItemListSchema(servicesListItems, '/services', 'VNR Services & Pricing');

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}

