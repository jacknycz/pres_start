import React from "react";
import Pres from "../assets/Pres";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import ReactLogo from "../assets/react.svg";
import TailwindLogo from "../assets/tailwind.svg";
import FigmaLogo from "../assets/figma.svg";
import MaterialLogo from "../assets/material.svg"
import useDarkMode from "../hooks/useDarkMode";

export default function Home() {
    const [isDark, toggleDark] = useDarkMode()

    return (
        <div className="home dark:text-white space-y-12">
            {/* <Pres size="256" fill="#ccc" /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="flex flex-col justify-center">
                    <h1 className="text-6xl font-bold mb-8">Pres Start</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">A simple, extendable starter kit. No bells, no whistles. It's a 1998 Honda Civic - go crazy.</p>

                    <div className="flex flex-col w-full items-center">
                        {/* <Link to="/typography">
                        <Button variant="primary" size="large">
                            Get Started
                        </Button>
                    </Link> */}
                        <button
                            className="w-60 h-60 border-0 m-4 outline-none text-white text-4xl font-medium bg-red-700 dark:bg-red-800 rounded-full cursor-pointer transition-shadow duration-200 push--flat"
                            onClick={toggleDark}
                        >
                            START
                        </button>
                        {/* <button
                        //   onClick={onClick}
                        className="relative inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-white bg-red-600 border-4 border-red-800 rounded-full shadow-lg active:translate-y-1 active:shadow-none transition-transform ease-in-out duration-150"
                    >
                        START
                        <span className="absolute inset-0 rounded-full bg-red-800 opacity-25 -z-10"></span>
                    </button> */}
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src="/src/assets/prestronaut.png" alt="" />
                </div>

                <h3 className="text-white text-center text-2xl font-medium neon-glow">Oh yeah, it's got dark mode</h3>
            </div>

            <div className="flex flex-col my-24 space-y-4">
                <h2 className="text-3xl font-bold">Welcome to Pres Start</h2>
                <p className="text-gray-600 dark:text-gray-400">You're probably asking yourself some things - like "how the hell did I get here?" and "what's going on?" and "well the astronaut dog is a nice touch".</p>
                <p className="text-gray-600 dark:text-gray-400">I wish I could tell you. It appears to me that a dog built a design system...?</p>
                <p className="text-gray-600 dark:text-gray-400">I'm being told this was all built by some dude who is a "digital designer who codes" which sounds like some super pretentious BS, but it's his design system sooo...</p>
                <p className="text-gray-600 dark:text-gray-400">Ok, so he built the thing because he wanted to freshen up his React skills, and he thought this would be a cool way to do it and maybe even have some kind of functional outcome.</p>
            </div>

            <div className="flex mt-12 mb-6">
                <h3 className='text-2xl'>You get control of...</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                <Link to="/typography" className="card-standard">
                    <h2 className="text-p-50 text-xl font-semibold">Typography</h2>
                    <p className="text-gray-600 dark:text-gray-400">I picked a font, which I'll talk about briefly. You can pick your own, I'll show you that bit.</p>
                    <Button
                        variant="primary"
                        className="mt-4"
                    >
                        Learn More
                    </Button>
                </Link>

                <Link to="/colors" className="card-standard">
                    <h2 className="text-p-50 text-xl font-semibold">Colors</h2>
                    <p className="text-gray-600 dark:text-gray-400">I picked a font, which I'll talk about briefly. You can pick your own, I'll show you that bit.</p>
                    <Button
                        variant="primary"
                        className="mt-4"
                    >
                        Learn More
                    </Button>
                </Link>

                <Link to="/icons" className="card-standard">
                    <h2 className="text-p-50 text-xl font-semibold">Icons</h2>
                    <p className="text-gray-600 dark:text-gray-400">I picked a font, which I'll talk about briefly. You can pick your own, I'll show you that bit.</p>
                    <Button
                        variant="primary"
                        className="mt-4"
                    >
                        Learn More
                    </Button>
                </Link>
            </div>

            <div className="flex mt-12 mb-6">
                <h3 className='text-2xl'>...using this stuff you may have heard of</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                <Link to="/typography" className="card-standard">
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <img src={ReactLogo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">React</h2>
                    </div>

                    <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                        <p>"The library for web and native user interfaces"</p>
                    </blockquote>

                    <p className="text-gray-600 dark:text-gray-400">These are simple, stupid, simple components built by a designer who codes. They do work and follow some sort of "best practices" as far as I can tell.</p>
                </Link>

                <Link to="/typography" className="card-standard">
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <img src={TailwindLogo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">Tailwind</h2>
                    </div>

                    <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                        <p>"Rapidly build modern websites without ever leaving your HTML."</p>
                    </blockquote>

                    <p className="text-gray-600 dark:text-gray-400">I can't believe you people - back in my day, if a style was inline you were fired. Just wave around !important or something.</p>
                </Link>

                <Link to="/typography" className="card-standard">
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <img src={MaterialLogo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">Material Icons</h2>
                    </div>

                    <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                        <p>"All Material Symbols are newly drawn to be pixel-crisp and modernized."</p>
                    </blockquote>
                    <p className="text-gray-600 dark:text-gray-400">They don't really have a tagline, but I feel like this is 👌</p>
                </Link>

                <Link to="/typography" className="card-standard">
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <img src={FigmaLogo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">Figma</h2>
                    </div>

                    <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                        <p>"Figma helps design and development teams build great products, together."</p>
                    </blockquote>
                    <p className="text-gray-600 dark:text-gray-400">Oh yeah, there's a whole Figma file that goes with this. I'll chat about it. It's the same thing, but you know - Figma.</p>
                </Link>
            </div>
        </div>
    );
}