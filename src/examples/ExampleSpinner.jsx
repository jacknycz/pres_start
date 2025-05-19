import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spinner } from '../components/Spinner/Spinner';
import SelectInput from '../components/Input/SelectInput';

export default function ExampleSpinner() {
  const [size, setSize] = useState('md');
  const [color, setColor] = useState('primary');
  const [customColor, setCustomColor] = useState('');
  const [useCustomColor, setUseCustomColor] = useState(false);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const generateCode = () => {
    if (useCustomColor && customColor) {
      return `<Spinner 
  size="${size}" 
  className="${customColor}" 
  style={{ color: '${customColor}' }}
/>`;
    }
    
    return `<Spinner 
  size="${size}" 
  color="${color}" 
/>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Spinner</h2>
      </div>

      <div className="component-wrapper flex items-center justify-center p-16 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {useCustomColor && customColor ? (
          <Spinner 
            size={size} 
            className={customColor} 
            style={{ color: customColor }}
          />
        ) : (
          <Spinner 
            size={size} 
            color={color} 
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col">
          <SelectInput
            label="Size"
            value={size}
            onChange={handleChange(setSize)}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </SelectInput>
        </div>

        {!useCustomColor && (
          <div className="flex flex-col">
            <SelectInput
              label="Color Variant"
              value={color}
              onChange={handleChange(setColor)}
            >
              <option value="primary">Primary</option>
              <option value="white">White</option>
              <option value="gray">Gray</option>
            </SelectInput>
          </div>
        )}

        <div className="flex items-center">
          <input
            type="checkbox"
            id="useCustomColor"
            checked={useCustomColor}
            onChange={(e) => setUseCustomColor(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="useCustomColor" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Use Custom Color
          </label>
        </div>

        {useCustomColor && (
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Custom Color (Tailwind class or hex)
            </label>
            <input
              type="text"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              placeholder="text-blue-500 or #3b82f6"
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Code</h3>
        <div className="code-block">
          <SyntaxHighlighter language="jsx" style={oneDark}>
            {generateCode()}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
