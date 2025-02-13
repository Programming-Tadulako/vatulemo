import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SlideUp } from "@/components/ui/animations/slide-up";
import { FAQ_DATA } from "@/features/home/constants";

export default function BatchSection() {
  return (
    <section id="faq">
      <SlideUp>
        <div className="container py-20">
          <h1 className="text-pt-primary pb-8 text-center text-4xl font-bold uppercase">FAQ</h1>
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
