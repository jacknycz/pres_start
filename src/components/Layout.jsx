import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import DarkToggle from "./DarkToggle";

export default function Layout({ children }) {
    const [isDark, toggleDark] = useDarkMode()
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 dark:text-white bg-white dark:bg-[#081028] min-h-screen">
            {/* Header takes full height and is fixed to left on md screens */}
            <div className="md:col-span-1 md:h-screen md:sticky md:top-0 md:left-0">
                <Header className="w-full h-auto md:h-full flex flex-col dark:bg-[#081028]shadow-md border-r border-gray-200 dark:border-p-900" />
            </div>

            {/* Main content area */}
            <main className="md:col-span-3 overflow-y-auto px-4 py-8 md:p-12 min-h-screen">
                <Outlet />
            </main>

            {/* Theme toggle switch */}
            <div className="fixed bottom-0 right-0 z-50 flex items-center gap-4 p-2 shadow md:p-4 justify-center bg-white dark:bg-[#081028]">
                <DarkToggle />
            </div>
        </div>

        
    );
}