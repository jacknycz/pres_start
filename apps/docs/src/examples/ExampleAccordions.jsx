import React from "react";
import { Accordion, AccordionGroup } from "pres-start-core";

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

const generateButtonCodeSingleOpen = () => {
    return `<Accordion 
    id="2" 
    title="What is Tailwind?" 
    dafaultOpen={true}
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
            <div className="component-header">
                <h2 className="text-4xl">Accordions</h2>
            </div>

            <div className="component-wrapper">
                <Accordion id="1" title="Why did Presley refuse to debug the code?">
                    <div className="space-y-2">
                        <p>Because he thought "fetch" was just for sticks!<sup>*</sup></p>
                        <span className="text-sm">*All jokes created by ChatGPT with a poorly designed prompt. My bad.</span>
                    </div>
                </Accordion>
            </div>

            <div className="component-code">
                <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                    {generateButtonCodeSingleDefault()}
                </SyntaxHighlighter>
            </div>

            <div className="props-wrapper">
                <h3 className='text-2xl mb-6'>Props</h3>
                <table className="w-full border rounded-lg table-auto props">
                    <thead className="props-header">
                        <tr>
                            <th className="props-cell">Name</th>
                            <th className="props-cell">Details</th>
                            <th className="props-cell">Default</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">id</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>The unique id of the accordion.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">title</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>The title/header of the accordion.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">defaultOpen</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">boolean</code>
                                <span>Option to show the content by default.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr className="hr-fade" />

            <div className="flex gap-4 mt-12 mb-6 flex-wrap">
                <h4 className="text-lg font-medium mb-2">Full-width</h4>
                <Accordion id="2" title="What’s Presley’s favorite programming language?" className={"w-full"}>
                    BarkScript — it’s paw-sitively easy to chew on!
                </Accordion>
            </div>

            <div className="code mt-6 mb-12">
                <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                    {generateButtonCodeSingleFull()}
                </SyntaxHighlighter>
            </div>

            <hr className="hr-fade" />

            <div className="flex flex-col gap-4 mt-12 mb-6 flex-wrap">
                <h4 className="text-lg font-medium mb-2">Open</h4>
                <Accordion id="2" title="Why did Presley start his own design system?" defaultOpen={true}>
                    Because he wanted more “pup-ups” instead of pop-ups!
                </Accordion>
            </div>

            <div className="code mt-6 mb-12">
                <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                    {generateButtonCodeSingleOpen()}
                </SyntaxHighlighter>
            </div>

            <hr className="hr-fade" />

            <div className="flex flex-col mt-12">
                <div className="col-span-1 md:col-span-3">
                    <h3 className='text-2xl mb-6'>Accordion Group</h3>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Single Opened</h4>
                    <AccordionGroup allowMultiple={false}>
                        <Accordion id="3" title="Why did Presley refuse to debug the code?">
                            Because he thought "fetch" was just for sticks!
                        </Accordion>
                        <Accordion id="4" title="What's Presley's favorite programming language?">
                            BarkScript — it's paw-sitively easy to chew on!
                        </Accordion>
                        <Accordion id="5" title="Why did Presley start his own design system?">
                            Because he wanted more “pup-ups” instead of pop-ups!
                        </Accordion>
                    </AccordionGroup>
                </div>

                <div className="component-code">
                    <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                        {generateButtonCodeGroup()}
                    </SyntaxHighlighter>
                </div>

                <div className="props-wrapper">
                    <table className="w-full border rounded-lg table-auto props">
                        <thead className="props-header">
                            <tr>
                                <th className="props-cell">Name</th>
                                <th className="props-cell">Details</th>
                                <th className="props-cell">Default</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="props-row">
                                <td className="props-cell"><code className="label-style">allowMultiple</code></td>
                                <td className="props-cell props-details">
                                    <code className="label-style">boolean</code>
                                    <span>A boolean that allows you to show more than one accordion open at a time - if that is your desired behavior.</span>
                                </td>
                                <td className="props-cell"><code className="label-style">false</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Multiple Opened</h4>
                    <AccordionGroup allowMultiple={true}>
                        <Accordion id="q1" title="Why did Presley take a nap on the keyboard?">
                            He was trying to "paws" the build!
                        </Accordion>
                        <Accordion id="q2" title="How does Presley handle version control?">
                            With plenty of "commit-mints" and a few chewed branches!
                        </Accordion>
                        <Accordion id="q3" title="What does Presley do when a bug shows up in the design system?">
                            He growls at it until it "fleas" the codebase!
                        </Accordion>
                    </AccordionGroup>
                </div>

                <div className="code mt-6 mb-12">
                    <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                        {generateButtonCodeGroupMultiple()}
                    </SyntaxHighlighter>
                </div>

            </div>
        </>
    );
}