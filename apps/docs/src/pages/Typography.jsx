import React from "react";
import InterTypo from "../assets/inter-typo.png";
import PreflightTypo from "../assets/preflight-typo.png";

export default function Typography() {
    return (
        <>
            <div className="component-header space-y-4">
                <h2 className="text-4xl">Typography</h2>
            </div>

            <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                            <img src={InterTypo} alt="Inter Font Sample" className="w-full h-auto rounded-t" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Inter Typeface</h3>
                            <p className="text-gray-600 dark:text-gray-300">The typography in this design system is built on the Inter font, chosen for its modern, versatile, and highly readable characteristics. Designed with flexibility at its core, the typography adapts seamlessly across various components and layouts.</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                            <img src={PreflightTypo} alt="Preflight Typography" className="w-full h-auto rounded-t" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Preflight Typography</h3>
                            <p className="text-gray-600 dark:text-gray-300">Tailwind's typography system provides a solid foundation for consistent and accessible text styling. By leveraging Tailwind's utility-first approach, the system offers a flexible and scalable way to apply typography styles to components and layouts.</p>
                        </div>
                    </div>
                </div>

                <blockquote className="relative p-6 my-12 border-l-4 border-p-500 bg-gray-50 dark:bg-gray-800 rounded-r-lg italic text-gray-700 dark:text-gray-300">
                    <svg className="absolute top-0 left-0 w-6 h-6 -ml-3 -mt-3 text-p-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="pl-4">This is great. I didn't want to write this because there is hardly any Typography - I like Inter, and Tailwind has a great base built in if you know what you're doing. I may add some super basic header/body/helper styles but they really wouldn't vary from default browser stuff.</p>
                </blockquote>
                <p>Leveraging Tailwind's utility-first approach, the system employs a 4px base unit for spacing, ensuring consistent and harmonious scaling throughout. This modular scale not only maintains visual balance but also provides the flexibility needed to accommodate diverse design requirements.</p>
                <p>The typography system is intentionally super flexible, allowing developers and designers to easily customize sizes, weights, and spacing. This flexibility ensures that the type can adapt to a wide range of use cases, from compact interfaces to spacious layouts, without sacrificing clarity or visual appeal.</p>
            </div>
        </>
    );
}