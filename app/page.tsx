import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";
import AnchorPartnershipSection from "@/components/AnchorPartnershipSection";
import FoundersNoteSection from "@/components/FoundersNoteSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import InsightsSection from "@/components/InsightsSection";
import CtaSection from "@/components/CtaSection";
import WhyVnrSection from "@/components/WhyVnrSection";
import ClientJourneySection from "@/components/ClientJourneySection";
import AdvisorEstateSection from "@/components/AdvisorEstateSection";
import TestimonialsSection from "@/components/TestimonialsSection";

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