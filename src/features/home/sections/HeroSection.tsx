import { CircleArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[url('/assets/images/hero/bg_hero-waves.svg')] bg-cover bg-center bg-no-repeat p-5"
    >
      <div className="mx-auto flex max-w-screen-md flex-col gap-4 pt-32 text-white lg:items-center">
        <Image src="/assets/icons/ic_pt_full-white.svg" alt="Programming Tadulako" width={500} height={150} />
        <p className="text-lg lg:text-center lg:text-2xl">
          A community based in Palu, Indonesia. <br /> Learn about programming, softskills, and teamwork.
        </p>
        <span className="text-2xl font-bold">#GrowTogetherWithUs</span>
        <div className="flex items-center gap-4">
          <Link target="_blank" href="https://www.instagram.com/programming.tadulako">
            <FaInstagram size={40} />
          </Link>
          <Link target="_blank" href="https://discord.gg/gyBWNxAb">
            <FaDiscord size={40} />
          </Link>
        </div>
        <Link href="/#about" className="mt-20">
          <CircleArrowDown className="opacity-60 transition-opacity hover:opacity-100" />
        </Link>
      </div>
    </section>
  );
}
