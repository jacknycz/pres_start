import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette as PaletteIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeColorPicker from './ThemeColorPicker';

export default function ThemePickerModal() {
  const { isPickerOpen, setIsPickerOpen } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isPickerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPickerOpen]);

  // Only render client-side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating action button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsPickerOpen(true)}
        className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full flex items-center justify-center shadow-lg bg-p-500 hover:bg-p-600 transition-colors"
        aria-label="Change theme color"
      >
        <PaletteIcon className="h-6 w-6 text-white" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isPickerOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsPickerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <ThemeColorPicker isModal onClose={() => setIsPickerOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
