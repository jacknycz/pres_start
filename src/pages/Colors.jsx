import React from "react";
import Pres from "../assets/Pres";
import PaletteGenerator from "../components/PaletteGenerator";

export default function Colors() {
    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Colors</h2>
            </div>

            <div className="flex flex-col space-y-4 mb-12">
                <h3 className="text-2xl">A story...</h3>
                <p className="text-gray-700 dark:text-gray-300">One day - not too long ago at all - I was creating a color palette. It looked a lot like the one you see below you - in fact, it was! Now, it's a decent palette I'd say, but it's nothing special. It's scaled, based on a base color that passes muster...</p>
                <p className="text-gray-700 dark:text-gray-300">But I thought to myself, "Self, what if I could make this palette even better? If I made thingy with code stuff so I didn't have to screw with it again."</p>
                <p className="text-gray-700 dark:text-gray-300">So I did. I made a color palette generator that does all the work for you. It takes a base color and generates a palette based on that color. It even gives you the hex values, so you can copy and paste them into your code.</p>
                <p className="text-gray-700 dark:text-gray-300">So don't be like me. Don't use three different tools and a bunch of copying and pasting. Be smart.</p>
                <p className="text-gray-700 dark:text-gray-300">Use this.</p>
                <p className="text-gray-700 dark:text-gray-300">And if you don't like the colors it generates, you can always change them. It's not like I'm going to come to your house and make you use them.</p>
                <p className="text-gray-700 dark:text-gray-300">But Presley might.</p>
            </div>

            <div className="flex flex-col space-y-4 mb-12">
                <h3 className="text-2xl">But for real though</h3>
                <p className="text-gray-700 dark:text-gray-300">These are put together so they matchup with everything in Tailwind. Drop your color in, grab the code and go.</p>
                <p className="text-gray-700 dark:text-gray-300">You can add a secondary color too, that's a thing. Try it, don't, it's built already. Oh do tell me if it screws up though, I appreciate the feedback.</p>
            </div>

            <div className="flex w-full">
                <PaletteGenerator />
            </div>
        </>
    );
}