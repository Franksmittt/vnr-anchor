import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Access to Information | VNR Professional Accountants',
  description: 'Information access and PAIA-related requests for VNR Professional Accountants.',
  alternates: { canonical: `${SITE_URL}/access-to-information` },
  robots: { index: false, follow: true },
};

export default function AccessToInformationPage() {
  return (
    <div className="container mx-auto px-6 py-16 prose max-w-4xl">
      <h1>Access to Information</h1>
      <p>
        Requests for access to records may be submitted in accordance with applicable South African
        legislation, including PAIA and POPIA where relevant.
      </p>
      <p>
        For information requests, please contact us at <a href="mailto:info@vnr.co.za">info@vnr.co.za</a>.
      </p>
    </div>
  );
}
