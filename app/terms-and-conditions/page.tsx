import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms and Conditions | VNR Professional Accountants',
  description: 'Website terms and conditions for use of VNR Professional Accountants digital services.',
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-16 prose max-w-4xl">
      <h1>Terms and Conditions</h1>
      <p>
        By using this website, you agree to these terms. Content is provided for informational use
        and may be updated without notice.
      </p>
      <p>
        All intellectual property on this website remains the property of VNR Professional
        Accountants unless otherwise stated.
      </p>
      <p>
        Unauthorized use, copying, or distribution of website content is prohibited without prior
        written consent.
      </p>
    </div>
  );
}
