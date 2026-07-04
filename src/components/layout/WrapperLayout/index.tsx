import { ReactLenis } from "lenis/react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function WrapperLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        autoToggle: true,
        anchors: true,
        stopInertiaOnNavigate: true,
        allowNestedScroll: false,
        naiveDimensions: false,
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </ReactLenis>
  );
}
