import React from "react";
import Button from "../Button/Button";
import { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
    const overlayRef = useRef(null);
    const dialogRef = useRef(null);

    // Close on ESC key
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    // Close on outside click
    const handleClickOutside = (e) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            onClick={handleClickOutside}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
        >
            <div
                ref={dialogRef}
                className="relative w-full max-w-lg mx-4 sm:mx-auto rounded-xl bg-white dark:bg-gray-900 shadow-xl p-6 transition-all duration-300 transform scale-100 opacity-100"
            >
                {title && (
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
                )}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                    aria-label="Close modal"
                >
                    <span className="material-icons text-xl">close</span>
                </button>

                {children}
            </div>
        </div>
    );
}
