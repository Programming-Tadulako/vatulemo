import AboutSection from "./sections/AboutSection";
import BatchSection from "./sections/BatchSection";
import FaqSection from "./sections/FaqSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
    <div id="home">
      <HeroSection />
      <AboutSection />
      <BatchSection />
      <FeaturesSection />
      <FaqSection />
    </div>
  );
}
