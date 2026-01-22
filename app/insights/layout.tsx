import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import { insightsData } from '@/data/insights-data';

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

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Insights', url: '/insights' },
]);

const insightsListItems = insightsData.map((a) => ({ name: a.title, url: `/insights/${a.slug}` }));
const itemListSchema = generateItemListSchema(insightsListItems, '/insights', 'VNR Insights & Resources');

export default function InsightsLayout({
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

