import React, { useState, useEffect } from 'react';
import { generatePalette } from '../utils/generatePalette';
import Button from './Button/Button';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import chroma from 'chroma-js';
import Modal from './Modal/Modal';

export default function ThemeColorPicker({ isModal = false, onClose }) {
  const { primaryColor, setPrimaryColor, setIsPickerOpen } = useTheme();
  const [palette, setPalette] = useState({});
  const [localColor, setLocalColor] = useState(primaryColor);

  // Initialize with current primary color
  useEffect(() => {
    updateThemeColors(primaryColor);
  }, [primaryColor]);

  const generateTailwindPalettes = (hexColor) => {
    const base = {};
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    
    const light = chroma(hexColor).brighten(3.8);
    const dark = chroma(hexColor).darken(3.4);
    const lightScale = chroma.scale([light, hexColor]).mode('lab').colors(6);
    const darkScale = chroma.scale([hexColor, dark]).mode('lab').colors(6);
    const fullScale = [...lightScale, ...darkScale.slice(1)];
    
    steps.forEach((step, i) => {
      base[step] = fullScale[i];
    });
    
    return {
      primary: base
    };
  };

  const updateThemeColors = (hexColor) => {
    const newPalette = generatePalette(hexColor);
    setPalette(newPalette);
    setPrimaryColor(hexColor);
    
    // Update CSS variables
    Object.entries(newPalette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };
  
  const tailwindPalettes = generateTailwindPalettes(primaryColor);

  const handleColorChange = (e) => {
    const newColor = e.target.value.toUpperCase();
    setLocalColor(newColor);
    // For the color picker input, update immediately for better UX
    if (e.target.type === 'color') {
      updateThemeColors(newColor);
    }
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
      <Modal 
        isOpen={true} 
        onClose={() => {
          setIsPickerOpen(false);
          if (onClose) onClose();
        }}
        header="Theme Color"
      >
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
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm font-mono"
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
      </Modal>
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
              value={localColor}
              onChange={handleColorChange}
              onBlur={() => updateThemeColors(localColor)}
              className="w-12 h-12 rounded cursor-pointer dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <input
              type="text"
              value={localColor}
              onChange={(e) => setLocalColor(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === 'Enter' && updateThemeColors(localColor)}
              onBlur={() => updateThemeColors(localColor)}
              className="px-3 py-2 border rounded-md text-sm font-mono w-32 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
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
      
      <div className="mt-12 w-full">
        <h3 className="text-lg font-semibold mb-2">💾 Tailwind Config Snippet</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto w-full">
          {`colors: {
${Object.entries(tailwindPalettes)
              .map(([name, palette]) =>
                `  ${name}: {\n${Object.entries(palette)
                  .map(([k, v]) => `    ${k}: '${v.toUpperCase()}',`)
                  .join('\n')}\n  }`
              )
              .join(',\n')}\n}`}
        </pre>
      </div>
    </div>
  );
}
