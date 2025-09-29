import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FEATURES_DATA } from "../constants";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="scroll-mt-28 md:scroll-mt-32">
      <div className="container space-y-8 px-8">
        <div className="space-y-2">
          <h2 className="text-pt-primary text-3xl font-bold lg:text-center lg:text-4xl">Benefits</h2>
          <p className="text-sm text-neutral-700 md:text-base lg:text-center">
            Gabung sekarang, upgrade skill sambil seru-seruan bareng komunitas
          </p>
        </div>

        <BentoGrid>
          {FEATURES_DATA.map((feature, index) => (
            <BentoGridItem
              key={index}
              title={feature.title}
              description={feature.description}
              header={<Image src={feature.header} alt={feature.title} width={1000} height={250} />}
              className={feature.span ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
