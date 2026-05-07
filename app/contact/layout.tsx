import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { faqs } from '@/data/contact-data';
import { SITE_URL } from '@/lib/site';

const contactUrl = `${SITE_URL}/contact`;

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us',
  description: 'Get in touch with VNR Professional Accountants. We serve clients across South Africa. Contact us for strategic tax advisory, business structuring, and wealth planning services.',
  path: '/contact',
  keywords: [
    'contact',
    'accountants',
    'tax consultant',
    'South Africa',
    'office location',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
]);
const faqSchema = generateFAQSchema(faqs, contactUrl);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}

