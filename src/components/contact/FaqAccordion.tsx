import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const FaqAccordion = () => {

    return (
        <Accordion type="multiple" defaultValue={["item-2"]} className="w-full md:w-2/3">
            <AccordionItem value="item-1" className="border-disabled">
                <AccordionTrigger className="text-primary text-xl capitalize">How long does it take?</AccordionTrigger>
                <AccordionContent className="text-disabled">
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-disabled">
                <AccordionTrigger className="capitalize text-xl text-primary">Can I use my existing furnishings?</AccordionTrigger>
                <AccordionContent className="text-disabled">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. Posuere in. Contrary to popular belief, there are many variations of passages of Lorem Ipsum available, but the majority is randomised.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-disabled">
                <AccordionTrigger className="text-primary text-xl capitalize">I put into redesigning my design system?</AccordionTrigger>
                <AccordionContent className="text-disabled">
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-disabled">
                <AccordionTrigger className="text-primary text-xl capitalize">What do your services cost?</AccordionTrigger>
                <AccordionContent className="text-disabled">
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-disabled">
                <AccordionTrigger className="text-primary text-xl capitalize">Do you offer free consultations?</AccordionTrigger>
                <AccordionContent className="text-disabled">
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default FaqAccordion;
