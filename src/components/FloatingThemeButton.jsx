import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette as PaletteIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function FloatingThemeButton() {
  const { setIsPickerOpen } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsPickerOpen(true)}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-lg bg-p-500 hover:bg-p-600 transition-colors"
      aria-label="Open theme picker"
    >
      <PaletteIcon className="h-6 w-6 text-white" />
    </motion.button>
  );
}
