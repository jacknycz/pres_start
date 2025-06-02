import React from "react";
import IconButton from "../IconButton/IconButton";
import { useEffect, useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, header, children }) => {
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const dialogRef = useRef<HTMLDivElement | null>(null);

    // Close on ESC key
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    // Close on outside click
    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
                >
                    <motion.div
                        ref={dialogRef}
                        className="relative w-full max-w-lg mx-4 sm:mx-auto rounded-xl bg-white dark:bg-gray-900 shadow-xl p-4 md:p-6"
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
                            className="absolute md:top-6 md:right-6 top-4 right-4"
                            disabled={false}
                            children={null}
                        />
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
