import React from "react";
import Pres from "../assets/Pres";

export default function Home() {
    return (
        <div className="home flex flex-col items-center justify-center bg-gray-100 dark:bg-[#0A1330] text-gray-800 dark:text-white">
            <div className="bg-white dark:bg-[#0A1330] shadow-lg rounded-lg p-6 mb-4">
                <Pres size="256" fill="#fff" />
            </div>
            <div className="bg-white dark:bg-p-20 shadow-lg rounded-lg p-6 mb-4 space-y-2">
                <h2 className="text-xl font-semibold">Right, so where am I?</h2>
                <p className="text-gray-600 dark:text-gray-400">This is a simple home page component.</p>
            </div>  
        </div>
    );
}