import { SlideUp } from "@/components/ui/animations/slide-up";
import { Timeline } from "@/components/ui/timeline";
import { BATCH_DATA } from "@/features/home/constants";

export default function BatchSection() {
  return (
    <section id="batch">
      <SlideUp>
        <Timeline data={BATCH_DATA} />
      </SlideUp>
    </section>
  );
}
