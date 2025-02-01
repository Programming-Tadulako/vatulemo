import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_DATA } from "@/features/home/constants";

export default function BatchSection() {
  return (
    <section id="faq">
      <h1 className="pb-8 pt-2 text-center text-4xl font-bold uppercase text-pt-primary">FAQ</h1>
      <Accordion type="single" collapsible className="container">
        {FAQ_DATA.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>{faq.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
