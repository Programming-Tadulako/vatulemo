import { Timeline } from "@/components/ui/timeline";
import { BATCH_DATA } from "@/features/home/constants";

export default function BatchSection() {
  return (
    <section id="batch">
      <Timeline data={BATCH_DATA} />
    </section>
  );
}
