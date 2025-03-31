import GreatSolutionsBanner from "../components/banners/GreatSolutionBanner";
import KnowMoreBanner from "../components/banners/KnowMoreBanner";
import UnlockPotentialBanner from "../components/banners/UnlockPotentialBanner";
import HeroSection from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GreatSolutionsBanner />
      <KnowMoreBanner />
      <UnlockPotentialBanner />
    </>
  );
}
