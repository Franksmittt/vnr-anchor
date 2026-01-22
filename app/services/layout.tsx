import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

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
    'Centurion',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services & Pricing', url: '/services' },
]);

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
      {children}
    </>
  );
}

