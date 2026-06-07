import type { Metadata } from 'next';
import EmailSignatureAdmin from '@/components/EmailSignatureAdmin';

export const metadata: Metadata = {
  title: 'Email Signature Back Office',
  description: 'Internal VNR email signature generator.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmailSignaturesPage() {
  return <EmailSignatureAdmin />;
}
