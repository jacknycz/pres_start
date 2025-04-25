import React from "react";
import { AccordionGroup } from "../components/Accordion/AccordionGroup";
import Accordion from "../components/Accordion/Accordion";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const generateButtonCodeSingleDefault = () => {
    return `<Accordion 
    id="1" 
    title="What is Tailwind?"
>
    Tailwind CSS is a utility-first framework...
</Accordion>`;
};

const generateButtonCodeSingleFull = () => {
    return `<Accordion 
    id="2" 
    title="What is Tailwind?" 
    className={"w-full"}
>
    Tailwind CSS is a utility-first framework...
</Accordion>`;
};

const generateButtonCodeGroup = () => {
    return `<AccordionGroup>
    <Accordion id="3" title="What is Tailwind?">
        Tailwind CSS is a utility-first framework...
    </Accordion>
    <Accordion id="4" title="What is Vite?">
        Vite is a build tool that aims to provide a faster dev experience...
    </Accordion>
    <Accordion id="5" title="What is React?">
        React is a JavaScript library for building UIs.
    </Accordion>
</AccordionGroup>`;
};

const generateButtonCodeGroupMultiple = () => {
    return `<AccordionGroup allowMultiple={true}>
    <Accordion id="3" title="What is Tailwind?">
        Tailwind CSS is a utility-first framework...
    </Accordion>
    <Accordion id="4" title="What is Vite?">
        Vite is a build tool that aims to provide a faster dev experience...
    </Accordion>
    <Accordion id="5" title="What is React?">
        React is a JavaScript library for building UIs.
    </Accordion>
</AccordionGroup>`;
};

export default function ExampleAccordions() {
    return (
        <>
            <div className="flex">
                <h2 className="text-4xl">Accordions</h2>
            </div>

            <div className="component-wrapper">
                <Accordion id="1" title="What is Tailwind?">
                    Tailwind CSS is a utility-first framework...
                </Accordion>
            </div>

            <div className="code my-6">
                <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                    {generateButtonCodeSingleDefault()}
                </SyntaxHighlighter>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 mt-6 mb-12">
                <div className="section-base">
                    <code className="label-style">variant</code>
                    <ul className="list-style">
                        <li>primary</li>
                        <li>secondary</li>
                        <li>ghost</li>
                    </ul>
                    <p>That's it, three kinds. It's a couple of lines to add a new one, go for it.</p>
                </div>

                <div className="section-base">
                    <code className="label-style">size</code>
                    <ul className="list-style">
                        <li>default</li>
                        <li>small</li>
                        <li>large</li>
                    </ul>
                    <p>Cool, you see the theme. Even easier to add this time.</p>
                </div>

                <div className="section-base">
                    <code className="label-style">rounded</code>
                    <ul className="list-style">
                        <li>default</li>
                        <li>small</li>
                        <li>pill</li>
                        <li>square</li>
                    </ul>
                    <p>This could have been shape and I'm still on the fence.</p>
                </div>
            </div>

            <div className="flex gap-4 mt-12 mb-6 flex-wrap">
                <h4 className="text-lg font-medium mb-2">Full-width</h4>
                <Accordion id="2" title="What is Tailwind?" className={"w-full"}>
                    Tailwind CSS is a utility-first framework...
                </Accordion>
            </div>

            <div className="code mt-6 mb-12">
                <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                    {generateButtonCodeSingleFull()}
                </SyntaxHighlighter>
            </div>

            <hr className="hr-fade" />

            <div className="flex flex-col gap-4 my-6 flex-wrap">
                <h3 className='text-2xl mt-4'>Accordion Group</h3>

                <h4 className="text-lg font-medium mb-2">Single Opened</h4>

                <AccordionGroup allowMultiple={false}>
                    <Accordion id="3" title="What is Tailwind?">
                        Tailwind CSS is a utility-first framework...
                    </Accordion>
                    <Accordion id="4" title="What is Vite?">
                        Vite is a build tool that aims to provide a faster dev experience...
                    </Accordion>
                    <Accordion id="5" title="What is React?">
                        React is a JavaScript library for building UIs.
                    </Accordion>
                </AccordionGroup>

                <div className="code mt-6 mb-12">
                    <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                        {generateButtonCodeGroup()}
                    </SyntaxHighlighter>
                </div>

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

                <div className="code mt-6 mb-12">
                    <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                        {generateButtonCodeGroupMultiple()}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    );
}