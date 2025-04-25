import React from "react";
import { AccordionGroup } from "../components/Accordion/AccordionGroup";
import Accordion from "../components/Accordion/Accordion";

export default function ExampleAccordions() {
    return (
        <>
            <div className="flex">
                <h2 className="text-4xl">Accordions</h2>
            </div>

            <div className="flex gap-4 my-6 flex-wrap mb-12">
                <div className="flex flex-col gap-6">
                    <h3 className='text-2xl mt-4'>Single</h3>
                    <h4 className="text-lg font-medium mb-2">Default</h4>
                </div>

                <Accordion id="q7" title="What is Tailwind?">
                    Tailwind CSS is a utility-first framework...
                </Accordion>

                <h4 className="text-lg font-medium mb-2">Full-width</h4>
                <Accordion id="q7" title="What is Tailwind?" className={"w-full"}>
                    Tailwind CSS is a utility-first framework...
                </Accordion>
            </div>

            <hr className="hr-fade" />

            <div className="flex flex-col gap-4 my-6 flex-wrap">
                <h3 className='text-2xl mt-4'>Accordion Group</h3>

                <h4 className="text-lg font-medium mb-2">Single Opened</h4>

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

                <h4 className="text-lg font-medium mb-2 mt-4">Multiple Opened</h4>

                <AccordionGroup allowMultiple={true}>
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
        </>
    );
}