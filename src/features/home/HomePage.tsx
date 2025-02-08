import AboutSection from "./sections/AboutSection";
import BatchSection from "./sections/BatchSection";
import FaqSection from "./sections/FaqSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import MemberSection from "./sections/MemberSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BatchSection />
      <MemberSection />
      <FeaturesSection />
      <FaqSection />
    </div>
  );
}
