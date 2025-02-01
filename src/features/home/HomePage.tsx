import AboutSection from "./sections/AboutSection";
import BatchSection from "./sections/BatchSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BatchSection />
    </div>
  );
}
