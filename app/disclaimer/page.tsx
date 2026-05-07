import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Disclaimer | VNR Professional Accountants',
  description: 'General information and liability limitations for VNR Professional Accountants.',
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  robots: { index: false, follow: true },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-6 py-16 prose max-w-4xl">
      <h1>Disclaimer</h1>
      <p>
        Information on this website is provided for general guidance only and does not constitute
        legal, tax, or financial advice specific to your circumstances.
      </p>
      <p>
        While VNR Professional Accountants takes reasonable care to keep content accurate and up to
        date, we make no warranties regarding completeness, reliability, or suitability.
      </p>
      <p>
        You should seek direct professional advice before acting on any information published on this
        site.
      </p>
    </div>
  );
}
