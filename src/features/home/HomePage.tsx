import AboutSection from "./sections/AboutSection";
import BatchSection from "./sections/BatchSection";
import FaqSection from "./sections/FaqSection";
import BenefitsSection from "./sections/BenefitsSection";
import HeroSection from "./sections/HeroSection";
import MembersSection from "./sections/MembersSection";

export default function HomePage() {
  return (
    <div id="home" className="space-y-16 md:space-y-32">
      <HeroSection />
      <AboutSection />
      <BatchSection />
      <BenefitsSection />
      <MembersSection />
      <FaqSection />
    </div>
  );
}
