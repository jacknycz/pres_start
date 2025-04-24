import React from "react";
import { AccordionGroup } from "../components/Accordion/AccordionGroup";
import Accordion from "../components/Accordion/Accordion";

export default function ExampleAccordions() {
    return (
        <>
            <div className="flex">
                <h2 className="text-4xl">Accordions</h2>
            </div>

            <div className="flex gap-6 my-6 flex-wrap">
                <AccordionGroup allowMultiple={false}>
                    <Accordion id="q1" title="What is Tailwind?">
                        Tailwind CSS is a utility-first framework...
                    </Accordion>
                    <Accordion id="q2" title="What is Vite?">
                        Vite is a build tool that aims to provide a faster dev experience...
                    </Accordion>
                    <Accordion id="q3" title="What is React?">
                        React is a JavaScript library for building UIs.
                    </Accordion>
                </AccordionGroup>
            </div>

            <div className="flex gap-6 my-6 flex-wrap">
                <Accordion id="q7" title="What is Tailwind?">
                    Tailwind CSS is a utility-first framework...
                </Accordion>
            </div>
        </>
    );
}