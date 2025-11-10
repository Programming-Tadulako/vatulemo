import { SlideUp } from "@/components/animations/slide-up";
import { Timeline } from "@/components/ui/timeline";
import { BATCH_DATA } from "@/features/home/constants";

export default function BatchSection() {
  return (
    <section id="batch" className="scroll-mt-28 md:scroll-mt-32">
      <SlideUp>
        <div className="container space-y-10">
          <div className="space-y-2">
            <h2 className="text-pt-primary text-3xl font-bold lg:text-4xl">Batch</h2>
            <p className="max-w-sm text-sm text-neutral-700 md:text-base">
              Sampai saat ini Programming Tadulako telah memiliki beberapa batch yaitu:
            </p>
          </div>

          <Timeline data={BATCH_DATA} />
        </div>
      </SlideUp>
    </section>
  );
}
