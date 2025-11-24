import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";
import AnchorPartnershipSection from "@/components/AnchorPartnershipSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import InsightsSection from "@/components/InsightsSection";
import CtaSection from "@/components/CtaSection";
import WhyVnrSection from "@/components/WhyVnrSection";
import ClientJourneySection from "@/components/ClientJourneySection";
import AdvisorEstateSection from "@/components/AdvisorEstateSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AuthorityBar />
      <AnchorPartnershipSection />
      <WhyVnrSection />
      <ServicesSection />
      <AdvisorEstateSection />
      <ClientJourneySection />
      <TeamSection />
      <InsightsSection />
      <CtaSection />
    </>
  );
}