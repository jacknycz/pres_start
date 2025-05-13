import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import LightModeIcon from '@mui/icons-material/LightMode'; // Sun Icon
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Moon Icon

export default function DarkToggle() {
    const [isDark, toggleDark] = useDarkMode()
    
    return (
        <div className="fixed bottom-0 right-0 z-50 flex items-center gap-4 p-2 shadow md:p-4 justify-center bg-white dark:bg-[#081028]">
            <span className="text-sm font-semibold text-p-500 dark:text-gray-600"><LightModeIcon /></span>
            <button
                onClick={toggleDark}
                className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none border border-gray-600 shadow-inner shadow-black/40 bg-gradient-to-br from-gray-800 to-gray-900"
                aria-label="Toggle dark mode"
            >
                <span
                    className={`absolute h-8 w-14 rounded-full transition-colors duration-300 
        ${isDark ? 'bg-gray-700' : 'bg-gray-400/40'}
      `}
                />
                <span
                    className={`
        inline-block h-6 w-6 transform rounded-full bg-p-500 dark:bg-white transition duration-300 z-10 
        shadow-md shadow-black/30 border-2 border-white
        ${isDark ? 'translate-x-6' : 'translate-x-1'}
      `}
                />
            </button>
            <span className="dark:text-white text-sm font-semibold text-gray-400"><DarkModeIcon /></span>
        </div>
    );
}