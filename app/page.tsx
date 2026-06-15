import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import AuthorityBar from '@/components/AuthorityBar';
import FoundersNoteSection from '@/components/FoundersNoteSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import InsightsSection from '@/components/InsightsSection';
import CtaSection from '@/components/CtaSection';
import { generateMetadata as generateSEOMetadata, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Accountants in Centurion and Pretoria',
  description:
    'VNR Professional Accountants provides tax advisory, business structuring, bookkeeping, payroll, and estate planning services across South Africa.',
  path: '/',
  keywords: [
    'accountants in centurion',
    'accountants in pretoria',
    'tax advisory south africa',
    'bookkeeping services',
    'payroll administration',
    'professional accountant sa',
  ],
});

const homeFaqSchema = generateFAQSchema(
  [
    { q: 'Do you serve clients outside Gauteng?', a: 'Yes. VNR serves clients across South Africa using virtual and in-person consultations.' },
    { q: 'Do you assist with SARS compliance and disputes?', a: 'Yes. VNR supports tax compliance, SARS submissions, and dispute resolution workflows.' },
    { q: 'Can VNR assist with expat tax matters?', a: 'Yes. VNR provides expatriate tax and residency cessation support for South Africans working abroad.' },
  ],
  '/',
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema).replace(/</g, '\\u003c') }}
      />
      <Hero />
      <AuthorityBar />
      <FoundersNoteSection />
      <ServicesSection limit={4} compact />
      <TeamSection limit={3} compact />
      <InsightsSection limit={2} compact />
      <CtaSection />
    </>
  );
}
