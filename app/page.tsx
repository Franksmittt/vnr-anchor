import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";

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

export default function Home() {
  return (
    <>
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