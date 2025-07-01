import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import DarkToggle from "./DarkToggle";
import ChatButton from "../_components/ChatButton/ChatButton";

export default function Layout({ children }) {
    const [isDark, toggleDark] = useDarkMode();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 dark:text-white bg-white dark:bg-[#081028] min-h-screen relative">
            {/* Decorative elements */}
            <div className="fixed -top-20 -right-20 w-64 h-64 rounded-full bg-p-400/10 dark:bg-p-300/10 z-0"></div>
            <div className="fixed -bottom-32 -left-32 w-80 h-80 rounded-full bg-p-500/10 dark:bg-p-400/10 z-0"></div>
            
            {/* Header with sticky positioning */}
            <div className="lg:col-span-1 lg:sticky lg:top-0 lg:h-screen lg:z-10">
                <Header className="w-full h-full flex flex-col dark:bg-[#081028] shadow-lg border-r border-gray-200 dark:border-p-900" />
            </div>

            {/* Main content area */}
            <main className="lg:col-span-3 overflow-y-auto px-4 py-8 lg:p-12 min-h-screen relative z-10">
                <Outlet />
            </main>

            {/* Theme toggle and chat button */}
            <div className="fixed bottom-0 right-0 z-50 flex items-center gap-4 p-2 shadow lg:p-4 justify-center bg-white dark:bg-[#081028] rounded-tl-lg">
                <DarkToggle />
                <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
                <ChatButton />
            </div>
        </div>
    );
}
