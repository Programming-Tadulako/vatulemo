import Image from "next/image";
import { FaDiscord, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[url('/assets/images/hero/bg_hero-waves.svg')] bg-cover bg-center bg-no-repeat p-5">
      <div className="mx-auto flex max-w-screen-md flex-col gap-4 pt-32 lg:items-center">
        <Image src="/assets/icons/ic_pt_long-dark.svg" alt="Programming Tadulako" width={500} height={150} />
        <p className="text-lg lg:text-center lg:text-2xl">
          A community based in Palu, Indonesia. <br /> Learn about programming, softskills, and teamwork.
        </p>
        <span className="text-2xl font-bold">#GrowTogetherWithUs</span>
        <div className="flex items-center gap-4">
          <FaInstagram size={40} />
          <FaDiscord size={40} />
        </div>
      </div>
    </section>
  );
}
