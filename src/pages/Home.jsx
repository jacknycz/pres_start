import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Tailwind2Logo from "../assets/tailwind-2.svg";
import Figma2Logo from "../assets/figma-2.svg";
import Material2Logo from "../assets/material-2.svg"
import React2Logo from "../assets/react-2.svg";
import useDarkMode from "../hooks/useDarkMode";
import Prestronaut from '/src/assets/prestronaut-2.png';
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';
import IconButton from '../components/IconButton/IconButton';
import ThemeColorPicker from '../theme/ThemeColorPicker';

export default function Home() {
    const [isDark, toggleDark] = useDarkMode();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6 md:gap-12 md:flex-row items-center justify-between py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden">
                <div className="relative z-10 text-center md:text-left max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">Pres Start</h1>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl line-clamp-2 font-semibold text-p-500 dark:text-p-400 mb-6">It's a design system starter kit thing</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        <strong>Read:</strong> I wanted to <span className="line-through">brush up on</span> <em>relearn</em> React and Tailwind and the other cool front-end things I've been missing, so I made this thing.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <Button
                            variant="primary"
                            className="mt-4"
                            to="/typography"
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="secondary"
                            className="mt-4"
                            to="/components"
                        >
                            View Components
                        </Button>
                        <IconButton
                            variant="ghost"
                            icon={isDark ? <LightModeIcon /> : <DarkModeIcon />}
                            onClick={toggleDark}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            className="mt-4 ml-2"
                        />
                    </div>
                </div>

                <div className="mt-12 md:mt-0 relative z-10">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gray-50/20 dark:bg-gray-400/30 rounded-full blur-lg animate-pulse"></div>
                        <div className="relative bg-white dark:bg-gray-800 p-1 rounded-full shadow-2xl border border-gray-100 dark:border-gray-700">
                            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-p-50 to-p-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                                <img src={Prestronaut} alt="Prestronaut" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col my-24 space-y-4">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Theme Customization</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Customize your experience by selecting a primary color. The color palette will be automatically generated and applied throughout the application.
                    </p>
                    <ThemeColorPicker />
                </div>
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
                        <h2 className="text-gray-800 dark:text-white text-xl font-semibold">React</h2>
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
                        <img src={Tailwind2Logo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-gray-800 dark:text-white text-xl font-semibold">Tailwind</h2>
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
                        <img src={Material2Logo} alt="Logo" className="max-w-10 h-10" />
                        <h2 className="text-gray-800 dark:text-white text-xl font-semibold">MUI</h2>
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
                        <h2 className="text-gray-800 dark:text-white text-xl font-semibold">Figma</h2>
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