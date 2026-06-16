import type { Metadata } from 'next';
import { Suspense } from 'react';
import BackOfficePageClient from './BackOfficePageClient';

export const metadata: Metadata = {
  title: 'Back Office',
  description: 'Internal VNR tools for email signatures and service pricing.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BackOfficePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface-light" />}>
      <BackOfficePageClient />
    </Suspense>
  );
}
