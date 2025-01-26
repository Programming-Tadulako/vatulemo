import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CircleChevronDown } from "lucide-react";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <div className="min-h-screen bg-[url('/assets/images/hero/bg_hero-waves.svg')] bg-cover bg-center bg-no-repeat p-5">
        <div className="relative z-10 mx-auto flex max-w-screen-md flex-col gap-4 pt-36 text-white lg:items-center">
          <Image src="/assets/icons/ic_pt_full-white.svg" alt="Programming Tadulako" width={500} height={150} />
          <p className="text-lg lg:text-center lg:text-2xl">
            A community based in Palu, Indonesia. <br /> Learn about programming, softskills, and teamwork.
          </p>
          <TypewriterEffect
            className="text-start text-2xl font-bold"
            words={[{ text: "#GrowTogetherWithUs", className: "text-white" }]}
          />
          <div className="flex items-center gap-4">
            <Link target="_blank" href="https://www.instagram.com/programming.tadulako">
              <FaInstagram size={40} />
            </Link>
            <Link target="_blank" href="https://discord.gg/gyBWNxAb">
              <FaDiscord size={40} />
            </Link>
          </div>
          <Link href="/#about" className="mx-auto mt-20">
            <CircleChevronDown className="opacity-60 transition-opacity hover:scale-110 hover:opacity-100" />
          </Link>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
