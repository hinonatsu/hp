import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  DeliverablesSection,
  IndustriesSection,
  PageStructureSection,
  PricingSection,
  ProblemSection,
  ProcessSection,
  ServiceSection,
  StrengthSection,
  TrustSection
} from "@/components/landing-sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <StrengthSection />
        <ServiceSection />
        <DeliverablesSection />
        <PageStructureSection />
        <IndustriesSection />
        <ProcessSection />
        <PricingSection />
        <TrustSection />
        <FaqAccordion />
        <ContactForm />
      </main>
    </>
  );
}
