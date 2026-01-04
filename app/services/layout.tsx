import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pricing | VNR Professional Accountants',
  description: 'Comprehensive services and pricing for tax advisory, business structuring, secretarial services, financial reporting, and more. View our 2026 price list.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

