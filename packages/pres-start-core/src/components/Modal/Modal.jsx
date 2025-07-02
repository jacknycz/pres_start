import React from "react";
import IconButton from "../IconButton/IconButton.jsx";
import { useEffect, useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from "framer-motion";
import classNames from 'classnames';

export default function Modal({ isOpen, onClose, header, children, className = "", ...props }) {
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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={overlayRef}
                    onClick={handleClickOutside}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    aria-modal="true"
                    role="dialog"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    {...props}
                >
                    <motion.div
                        ref={dialogRef}
                        className={classNames(
                            "relative min-w-sm w-full max-w-sm md:max-w-md lg:max-w-lg mx-4 sm:mx-auto rounded-xl bg-white dark:bg-gray-900 shadow-xl p-4 md:p-6",
                            className
                        )}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {header && (
                            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{header}</h2>
                        )}
                        <IconButton
                            onClick={onClose}
                            variant="secondary"
                            icon={<CloseIcon />}
                            aria-label="Close modal"
                            as="icon-button"
                            className="absolute md:top-6 md:right-6 top-4 right-4"
                        />
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 