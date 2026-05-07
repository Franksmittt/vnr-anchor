import Link from 'next/link';
import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseMetadata = generateSEOMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting VNR Professional Accountants.',
  path: '/thank-you',
  keywords: ['thank you', 'contact submission', 'VNR'],
});

export const metadata: Metadata = {
  ...baseMetadata,
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
      <h1 className="font-serif text-4xl font-bold text-text-primary">Thank you.</h1>
      <p className="mt-4 text-lg text-text-secondary">
        Your message has been received. Our team will get back to you within one business day.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="rounded-full bg-brand-blue px-6 py-3 text-white font-semibold">
          Back to Home
        </Link>
        <Link href="/services" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-text-primary">
          Explore Services
        </Link>
      </div>
    </div>
  );
}
