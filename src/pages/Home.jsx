import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Tailwind2Logo from "../assets/tailwind-2.svg";
import Figma2Logo from "../assets/figma-2.svg";
import Material2Logo from "../assets/material-2.svg"
import React2Logo from "../assets/react-2.svg";
import useDarkMode from "../hooks/useDarkMode";
import Prestronaut from '/src/assets/prestronaut-2.png';

export default function Home() {
    const [isDark, toggleDark] = useDarkMode()

    return (
        <div className="home dark:text-white space-y-12">
            {/* <Pres size="256" fill="#ccc" /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="flex flex-col justify-center">
                    <h1 className="text-6xl font-bold mb-8 text-center md:text-left">Pres Start</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-center md:text-left">A simple, extendable starter kit. No bells, no whistles. It's a 1998 Honda Civic - go crazy.</p>

                    <div className="flex flex-col w-full items-center">
                        <button
                            className="hidden md:block w-40 h-40 md:w-60 md:h-60 border-0 m-4 outline-none text-white text-2xl md:text-4xl font-medium bg-red-700 dark:bg-red-800 rounded-full cursor-pointer transition-shadow duration-200 push--flat"
                            onClick={toggleDark}
                        >
                            START
                        </button>
                    </div>
                </div>

                <div className="flex w-full md:hidden items-center">
                    <button
                        className="w-40 h-40 flex-shrink-0 border-0 m-4 outline-none text-white text-2xl md:text-4xl font-medium bg-red-700 dark:bg-red-800 rounded-full cursor-pointer transition-shadow duration-200 push--flat"
                        onClick={toggleDark}
                    >
                        START
                    </button>
                    <img className="w-auto h-auto" src={Prestronaut} alt="" />
                </div>

                <div className="hidden md:flex md:w-full md:h-full justify-center items-center">
                    <img className="max-w-full h-auto" src={Prestronaut} alt="" />
                </div>

                <h3 className="text-white text-center text-2xl font-medium neon-glow">Oh yeah, it's got dark mode</h3>
            </div>

            <div className="flex flex-col my-24 space-y-4">
                <h2 className="text-3xl font-bold">Welcome to Pres Start</h2>
                <p className="text-gray-600 dark:text-gray-400">You're probably asking yourself some things - like "how the hell did I get here?" and "what's going on?" and "well the astronaut dog is a nice touch".</p>
                <p className="text-gray-600 dark:text-gray-400">Well once upon a time I was a developer and I missed doing that. So, I was diving into re-learning React and cool new front-end stuff and doing a bunch of courses, and one of those things I just kept building was various components. I had eventually amassed enough of these that I had the thought "well, I'm a product designer who has done a bunch of design systems, I could build one."</p>
                <p className="text-gray-600 dark:text-gray-400">So I did. It's a selfish little project I built for <em>myself</em> to learn something I knew pretty well in a whole new way. I stole pieces from other places, I used all the cool new stuff, so if that sounds like a super practical starting point for you - do steal!</p>
            </div>

            <div className="flex mt-12 mb-6">
                <h3 className='text-2xl'>You get control of...</h3>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Typography</h3>
                        <p className="text-gray-600 dark:text-gray-300">I picked a font, which I'll talk about briefly. You can pick your own, I'll show you that bit.</p>
                        <Button
                            variant="primary"
                            className="mt-4"
                            to="/typography"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Colors</h3>
                        <p className="text-gray-600 dark:text-gray-300">I actually made a helpful little things using HSL and HEX and code stuff that generates some Tailwind color code for you. I thought it was helpful.</p>
                        <Button
                            variant="primary"
                            className="mt-4"
                            to="/colors"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Icons</h3>
                        <p className="text-gray-600 dark:text-gray-300">These are MUI icons and I blatently stole them because they are probably familiar. They are easy. They are also super switchable, so we can cover that.</p>
                        <Button
                            variant="primary"
                            className="mt-4"
                            to="/icons"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex mt-12 mb-6">
                <h3 className='text-2xl'>...using this stuff you may have heard of</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="bg-gray-50 flex px-6 py-2 gap-2 items-center dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <img src={React2Logo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-p-50 text-xl font-semibold">React</h2>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                            <p>"The library for web and native user interfaces"</p>
                        </blockquote>
                        <p className="text-gray-600 dark:text-gray-300">These are simple, stupid, simple components built by a designer who codes. They do work and follow some sort of "best practices" as far as I can tell.</p>
                    </div>
                </div>  

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="bg-gray-50 flex px-6 py-2 gap-2 items-center dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <img src={React2Logo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-p-50 text-xl font-semibold">Tailwind</h2>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                            <p>"Rapidly build modern websites without ever leaving your HTML."</p>
                        </blockquote>
                        <p className="text-gray-600 dark:text-gray-300">Tailwind is a utility-first CSS framework that provides a solid foundation for consistent and accessible text styling. By leveraging Tailwind's utility-first approach, the system offers a flexible and scalable way to apply typography styles to components and layouts.</p>
                    </div>
                </div>  

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="bg-gray-50 flex px-6 py-2 gap-2 items-center dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <img src={React2Logo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-p-50 text-xl font-semibold">MUI</h2>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                            <p>"The library for web and native user interfaces"</p>
                        </blockquote>
                        <p className="text-gray-600 dark:text-gray-300">Material-UI (MUI) is a popular React component library that provides a wide range of pre-built components and utilities for building modern web applications. It offers a consistent and accessible design system, making it easier to create visually appealing and user-friendly interfaces.</p>
                    </div>
                </div>  

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="bg-gray-50 flex px-6 py-2 gap-2 items-center dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <img src={Figma2Logo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-p-50 text-xl font-semibold">Figma</h2>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <blockquote className="border-l-4 border-p-80 pl-3 italic text-gray-700 dark:text-gray-300 my-6">
                            <p>"Figma helps design and development teams build great products, together."</p>
                        </blockquote>
                        <p className="text-gray-600 dark:text-gray-300">Oh yeah, there's a whole Figma file that goes with this. I'll chat about it. It's the same thing, but you know - Figma.</p>
                    </div>
                </div>  
            </div>
        </div>
    );
}