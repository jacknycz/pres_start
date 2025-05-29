import React, { useState, useEffect } from 'react';
import { generatePalette } from '../utils/generatePalette';
import Button from '../components/Button/Button';
import { useTheme } from '../context/ThemeContext';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import chroma from 'chroma-js';
import Modal from '../components/Modal/Modal';

function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="secondary"
      size="small"
      className="absolute top-2 right-2 text-xs"
      title="Copy to clipboard"
      iconLeft={!copied && <ContentCopyIcon fontSize="small" />}
    >
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  );
}

const DEFAULT_COLOR = '#64748B';

export default function ThemeColorPicker({ isModal = false, onClose, onColorSelect }) {
  const { primaryColor, setPrimaryColor, setIsPickerOpen } = useTheme();
  const [palette, setPalette] = useState({});
  const [localColor, setLocalColor] = useState(primaryColor);
  const [isDefaultColor, setIsDefaultColor] = useState(() => 
    primaryColor.toUpperCase() === DEFAULT_COLOR.toUpperCase()
  );

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
    
    // Update default color state
    setIsDefaultColor(hexColor.toUpperCase() === DEFAULT_COLOR.toUpperCase());
    
    // Update CSS variables
    Object.entries(newPalette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    
    // If there's an onColorSelect prop, call it with the new color
    if (onColorSelect) {
      onColorSelect(hexColor);
    }
  };
  
  const tailwindPalettes = generateTailwindPalettes(primaryColor);

  const handleColorChange = (e) => {
    const newColor = e.target.value.toUpperCase();
    setLocalColor(newColor);
    // For the color picker input, update immediately for better UX
    if (e.target.type === 'color') {
      updateThemeColors(newColor);
      // If there's an onColorSelect prop, call it with the new color
      if (onColorSelect) {
        onColorSelect(newColor);
      }
    }
  };

  const applyColor = () => {
    updateThemeColors(localColor);
    if (onClose) onClose();
  };

  const resetToDefault = () => {
    const defaultColor = '#64748B';
    setLocalColor(defaultColor);
    setIsDefaultColor(true);
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

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Popular <span className='line-through'>Breed</span> Color Swatches</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { id: 'retriever-rust', hex: '#C26D30', name: 'Retriever Rust', description: 'A rich, warm golden-brown with vintage flair and fall vibes.' },
            { id: 'corgi-coral', hex: '#FF6B4A', name: 'Corgi Coral', description: 'A bold, cheerful reddish-orange with lots of personality.' },
            { id: 'poodle-punch', hex: '#E84AAE', name: 'Poodle Punch', description: 'A juicy magenta-pink that\'s lively and playful.' },
            { id: 'blue-heeler-haze', hex: '#6C8CA4', name: 'Blue Heeler Haze', description: 'A soft, cool blue-gray like a stormy pup\'s coat.' },
            { id: 'golden-biscuit', hex: '#D9A05B', name: 'Golden Biscuit', description: 'A warm, toasty tan-brown with treat-like charm.' },
            { id: 'terrier-teal', hex: '#1CA28F', name: 'Terrier Teal', description: 'A punchy teal-green with cool confidence and great contrast.' }
          ].map((color) => (
            <div 
              key={color.id}
              onClick={() => setLocalColor(color.hex)}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-200 ${
                localColor === color.hex ? 'ring-2 ring-offset-2 ring-primary-500' : 'hover:ring-2 hover:ring-offset-2 hover:ring-primary-300'
              }`}
            >
              <div 
                className="p-2 pb-3 text-sm font-semibold text-center text-white truncate"
                style={{ 
                  backgroundColor: color.hex,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {color.name}
              </div>
              <div className="p-3" style={{ backgroundColor: color.hex }}>
                <div className="text-xs font-mono text-center">{color.hex}</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70 text-white text-xs text-center line-clamp-2 overflow-hidden">
                {color.description}
              </div>
            </div>
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
          variant="ghost" 
          onClick={resetToDefault}
        >
          Reset to Default
        </Button>
      </div>
      
      <div className="flex items-start gap-4">
        {/* <div className="md:mr-8">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Color</p>
          <div className="w-12 h-12 rounded" style={{ backgroundColor: primaryColor }} />
        </div> */}

        <div>

          <Button 
            variant="primary" 
            size="large" 
            onClick={() => setIsPickerOpen(true)}
            className="mb-6"
            style={{ backgroundColor: '#EF4444' }}
          >
            Select Color!
          </Button>

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
        <h3 className="text-lg font-semibold mb-2">Tailwind Config Snippet</h3>
        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto w-full font-mono">
            {`colors: {
${Object.entries(tailwindPalettes)
                .map(([name, palette]) =>
                  `  ${name}: {\n${Object.entries(palette)
                    .map(([k, v]) => `    ${k}: '${v.toUpperCase()}',`)
                    .join('\n')}\n  }`
                )
                .join(',\n')}\n}`}
          </pre>
          <CopyButton 
            textToCopy={`colors: {
${Object.entries(tailwindPalettes)
                .map(([name, palette]) =>
                  `  ${name}: {\n${Object.entries(palette)
                    .map(([k, v]) => `    ${k}: '${v.toUpperCase()}',`)
                    .join('\n')}\n  }`
                )
                .join(',\n')}\n}`} 
          />
        </div>
      </div>
    </div>
  );
}
