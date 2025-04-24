import React from "react"

export default function MenuItem({ children }) {
    return (
        <div className="p-3 cursor-pointer min-w-40 flex justify-center items-center select-none border-b border-gray-500 last:border-b-0 transition duration-300 ease-in-out hover:bg-p-90">
            {children}
        </div>
    )
}