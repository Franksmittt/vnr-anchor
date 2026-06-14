import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata = generateSEOMetadata({
  title: 'Process Flow',
  description: 'See how your day-to-day transactions become clear financial statements. From confused to confident, discover the VNR process flow for accounting excellence.',
  path: '/process-flow',
  keywords: ['process flow', 'accounting', 'financial statements', 'bookkeeping', 'VNR'],
});

export default function ProcessFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
