import GreatSolutionsBanner from "../components/banners/GreatSolutionBanner";
import KnowMoreBanner from "../components/banners/KnowMoreBanner";
import UnlockPotentialBanner from "../components/banners/UnlockPotentialBanner";
import { DrivenBySection } from "../components/DriveBy/DrivenBySection";
import FAQSection from "../components/FAQ/FAQSection";
import HeroSection from "../components/Hero/Hero";
import ServicesSection from "../components/Services/ServicesSection";
import TestimonialsSections from "../components/Testimonials/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DrivenBySection />
      <GreatSolutionsBanner />
      <KnowMoreBanner />
      <FAQSection />
      <TestimonialsSections />
      <UnlockPotentialBanner />
    </>
  );
}
