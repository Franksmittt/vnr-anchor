import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | VNR Professional Accountants',
  description: 'How VNR Professional Accountants collects, uses, and protects personal information.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-16 prose max-w-4xl">
      <h1>Privacy Policy</h1>
      <p>
        VNR Professional Accountants is committed to protecting your personal information in line with
        applicable South African privacy requirements, including POPIA.
      </p>
      <p>
        We only collect data required to respond to enquiries, deliver professional services, and
        meet legal obligations.
      </p>
      <p>
        You may contact us to request access, correction, or deletion of personal information where
        legally permitted.
      </p>
    </div>
  );
}
