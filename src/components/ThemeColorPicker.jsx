import React, { useState, useEffect } from 'react';
import { generatePalette } from '../utils/generatePalette';
import Button from './Button/Button';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ThemeColorPicker({ isModal = false, onClose }) {
  const { primaryColor, setPrimaryColor, setIsPickerOpen } = useTheme();
  const [palette, setPalette] = useState({});
  const [localColor, setLocalColor] = useState(primaryColor);

  // Initialize with current primary color
  useEffect(() => {
    updateThemeColors(primaryColor);
  }, [primaryColor]);

  const updateThemeColors = (hexColor) => {
    const newPalette = generatePalette(hexColor);
    setPalette(newPalette);
    setPrimaryColor(hexColor);
    
    // Update CSS variables
    Object.entries(newPalette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value.toUpperCase();
    setLocalColor(newColor);
  };

  const applyColor = () => {
    updateThemeColors(localColor);
    if (onClose) onClose();
  };

  const resetToDefault = () => {
    const defaultColor = '#3B82F6';
    setLocalColor(defaultColor);
    updateThemeColors(defaultColor);
    if (onClose) onClose();
  };

  // Only show the floating button in modal mode
  if (isModal) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Theme Color</h2>
                <button 
                  onClick={() => {
                    setIsPickerOpen(false);
                    if (onClose) onClose();
                  }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select a color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={localColor}
                    onChange={handleColorChange}
                    className="w-16 h-16 rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      value={localColor}
                      onChange={(e) => setLocalColor(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 border rounded-md text-sm font-mono"
                      maxLength={7}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-6">
                {['#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B', '#EF4444'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setLocalColor(color)}
                    className={`h-10 rounded-lg ${localColor === color ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color}`}
                  />
                ))}
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="secondary" onClick={resetToDefault}>
                  Reset
                </Button>
                <Button onClick={applyColor}>
                  Apply
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // Inline color picker (for homepage)
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Customize Theme</h2>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={resetToDefault}
        >
          Reset to Default
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Primary Color
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={primaryColor}
              onChange={handleColorChange}
              className="w-12 h-12 rounded cursor-pointer"
            />
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => setLocalColor(e.target.value.toUpperCase())}
              onBlur={() => updateThemeColors(localColor)}
              className="px-3 py-2 border rounded-md text-sm font-mono w-32"
              maxLength={7}
            />
          </div>
        </div>
        
        <div className="ml-4">
          <div className="w-12 h-12 rounded" style={{ backgroundColor: primaryColor }} />
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Color Palette</h3>
        <div className="grid grid-cols-6 gap-2">
          {Object.entries(palette).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <div 
                className="w-full h-12 rounded border border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: value }}
              />
              <span className="text-xs mt-1 font-mono">{key.split('-').pop()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
