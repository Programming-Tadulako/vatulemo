import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FEATURES_DATA } from "../constants";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="container px-8 py-20">
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
