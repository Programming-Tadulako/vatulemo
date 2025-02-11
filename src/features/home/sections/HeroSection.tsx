import Link from "next/link";
import Image from "next/image";
import { CircleChevronDown } from "lucide-react";
import { SocialMedia } from "@/components/ui/social-media";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <div className="min-h-screen bg-[url('/assets/images/hero/bg_hero-waves.svg')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10 container mx-auto flex max-w-3xl flex-col gap-4 pt-36 text-white lg:items-center">
          <Image src="/assets/icons/ic_pt_full-white.svg" alt="Programming Tadulako" width={500} height={150} />
          <p className="text-lg lg:text-center lg:text-2xl">
            A community based in Palu, Indonesia. <br /> Learn about programming, softskills, and teamwork.
          </p>
          <TypewriterEffect
            className="text-start text-2xl font-bold"
            words={[{ text: "#GrowTogetherWithUs", className: "text-white" }]}
          />
          <SocialMedia size={32} />
          <Link
            href="/#about"
            className="mx-auto mt-20 opacity-80 transition-opacity hover:scale-110 hover:opacity-100"
          >
            <CircleChevronDown size={20} className="text-white" />
          </Link>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
