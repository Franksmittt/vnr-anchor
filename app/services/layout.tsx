import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

