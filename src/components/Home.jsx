import React from "react";
import Pres from "../assets/Pres";
import PaletteGenerator from "./PaletteGenerator";

export default function Home() {
    return (
        <div className="home flex flex-col items-center justify-center text-gray-800 dark:text-white space-y-6">
            <div className="bg-white dark:bg-[#0A1330] shadow-lg rounded-lg p-6">
                <Pres size="256" fill="#ccc" />
            </div>

            <div className="bg-white dark:bg-p-20 shadow-lg rounded-lg p-6 space-y-2 w-full">
                <h2 className="text-xl font-semibold">A Design System</h2>
                <p className="text-gray-600 dark:text-gray-400">...without all that crap you end up deleting and doing yourself because why in the world would you EVER need that part of that component?</p>
            </div> 

            <div className="bg-white dark:bg-p-20 shadow-lg rounded-lg p-6 space-y-2 w-full">
                <h2 className="text-xl font-semibold">Colors!</h2>
                <div className="my-6">
                    <PaletteGenerator />
                </div>
            </div> 

            <div className="bg-white dark:bg-p-20 shadow-lg rounded-lg p-6 space-y-2 w-full">
                <h2 className="text-xl font-semibold">Cool, so why this one?</h2>
                <p className="text-gray-600 dark:text-gray-400">Seriously? Absolutely no reason. I built this so I had something functional to build while I dove back into React code. I used all the super boring stuff, which I'll go ahead and tell you about now.</p>
            </div>  

            <div className="bg-white dark:bg-p-20 shadow-lg rounded-lg p-6 space-y-2 w-full">
                <h2 className="text-xl font-semibold">React</h2>
                <p className="text-gray-600 dark:text-gray-400">It's a bunch of React components, most of them about as simple as you can get them. There's one custom hook, which I might remove, but it's for toggling things.</p>
            </div>  

            <div className="bg-white dark:bg-p-20 shadow-lg rounded-lg p-6 space-y-2 w-full">
                <h2 className="text-xl font-semibold">Tailwind CSS</h2>
                <p className="text-gray-600 dark:text-gray-400">Yeah, I used the new one. Yeah, it screwed me up when I was building several times because all references are to Tailwind lt 3.0 and it keeps wanting to theme in the config file, but alas, I don't care.</p>
            </div>  

            <div className="bg-white dark:bg-p-20 shadow-lg rounded-lg p-6 space-y-2 w-full">
                <h2 className="text-xl font-semibold">Material Icons</h2>
                <p className="text-gray-600 dark:text-gray-400">Have you internetted before? Well then you've seen these! Seriously though, you're gonna load your own icons so there's a handful of placeholder Material icons. Want to keep using those? Do it! Don't want to? Don't!</p>
            </div>  
        </div>
    );
}