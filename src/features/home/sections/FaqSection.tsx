import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { FAQ_DATA } from "@/features/home/constants";

export default function BatchSection() {
  return (
    <section id="faq" className="scroll-mt-28 md:scroll-mt-32">
      <div className="container space-y-8">
        <div className="space-y-2">
          <h2 className="text-pt-primary text-3xl font-bold lg:text-center lg:text-4xl">FAQ</h2>
          <p className="text-sm text-neutral-700 md:text-base lg:text-center">Frequently Asked Questions</p>
        </div>

        <StaggerContainer useInView staggerChildren={0.1} delayChildren={0.3}>
          <Accordion type="single" collapsible>
            {FAQ_DATA.map((faq, index) => (
              <StaggerItem key={index}>
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent>{faq.description}</AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>
      </div>
    </section>
  );
}
