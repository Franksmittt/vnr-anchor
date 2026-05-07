import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";
import { generateMetadata as generateSEOMetadata, generateFAQSchema } from '@/lib/seo';

// Lazy load below-the-fold components for better initial page load
const FoundersNoteSection = dynamic(() => import("@/components/FoundersNoteSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const AnchorPartnershipSection = dynamic(() => import("@/components/AnchorPartnershipSection"), {
  loading: () => <div className="h-64 bg-surface-light" />,
});
const WhyVnrSection = dynamic(() => import("@/components/WhyVnrSection"), {
  loading: () => <div className="h-96 bg-surface-light" />,
});
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const AdvisorEstateSection = dynamic(() => import("@/components/AdvisorEstateSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const ClientJourneySection = dynamic(() => import("@/components/ClientJourneySection"), {
  loading: () => <div className="h-96 bg-surface-light" />,
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  loading: () => <div className="h-96 bg-surface-light" />,
});
const TeamSection = dynamic(() => import("@/components/TeamSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const InsightsSection = dynamic(() => import("@/components/InsightsSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <div className="h-64 bg-brand-blue-dark" />,
});

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
      <AnchorPartnershipSection />
      <WhyVnrSection />
      <ServicesSection />
      <AdvisorEstateSection />
      <ClientJourneySection />
      <TestimonialsSection />
      <TeamSection />
      <InsightsSection />
      <CtaSection />
    </>
  );
}