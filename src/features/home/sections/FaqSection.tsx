import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SlideUp } from "@/components/ui/animations/slide-up";
import { FAQ_DATA } from "@/features/home/constants";

export default function BatchSection() {
  return (
    <section id="faq">
      <SlideUp>
        <div className="container space-y-8 py-20">
          <div className="space-y-2">
            <h1 className="text-pt-primary text-center text-4xl font-bold uppercase">FAQ</h1>
            <h2 className="text-center text-lg font-semibold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible>
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SlideUp>
    </section>
  );
}
