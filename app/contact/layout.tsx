import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us',
  description: 'Get in touch with VNR Professional Accountants. Our head office is in Centurion, and we serve clients across South Africa. Contact us for strategic tax advisory, business structuring, and wealth planning services.',
  path: '/contact',
  keywords: [
    'contact',
    'Centurion',
    'accountants',
    'tax consultant',
    'South Africa',
    'office location',
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

