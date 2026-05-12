import HeroSection from "@/components/Hero";
import DomainsSection from "@/components/DomainSection";
import CareersByCountry from "@/components/CareersByCountry";
import SuccessSection from "@/components/SuccessSection";
import TestimonialsSection from "@/components/Testimonials";
import ConsultationCTA from "@/components/CTA";
import { FAQSection } from "@/components/FAQSections";


export default function Page() {
  return (
    <main className="bg-white">
      <HeroSection />
      <DomainsSection />
      <CareersByCountry />
      <SuccessSection />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationCTA
        title="Ready to Shape Your Global Career?"
        subtitle="Get expert guidance tailored to your goals and aspirations"
        buttonText="GET FREE CONSULTATION"
      />
    </main>
  );
}