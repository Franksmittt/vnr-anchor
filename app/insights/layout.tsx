import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Insights & Resources',
  description: 'Expert insights on tax planning, business structuring, wealth management, and financial strategy from VNR Professional Accountants. Stay informed with our latest articles and guides.',
  path: '/insights',
  keywords: [
    'tax insights',
    'business advice',
    'wealth management',
    'financial strategy',
    'tax planning',
    'accounting insights',
    'South Africa',
  ],
});

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

