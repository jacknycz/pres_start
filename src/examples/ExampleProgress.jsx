import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Progress } from '../components/Progress/Progress';
import TextInput from '../components/Input/TextInput';
import SelectInput from '../components/Input/SelectInput';

export default function ExampleProgress() {
  const [value, setValue] = useState(65);
  const [max, setMax] = useState(100);
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('md');
  const [showLabel, setShowLabel] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let interval;
    if (isAnimated) {
      interval = setInterval(() => {
        setValue(prev => {
          if (prev >= 100) return 0;
          return prev + 5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isAnimated]);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const generateCode = () => {
    return `<Progress
  value={${value}}
  max={${max}}
  variant="${variant}"
  size="${size}"
  showLabel={${showLabel}}
  ${isAnimated ? '// Add animation logic in your component' : ''}
/>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Progress</h2>
      </div>

      <div className="component-wrapper p-8">
        <Progress
          value={Number(value)}
          max={Number(max)}
          variant={variant}
          size={size}
          showLabel={showLabel}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col">
          <TextInput
            label="Value"
            type="number"
            value={value}
            min="0"
            max={max}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col">
          <TextInput
            label="Max Value"
            type="number"
            value={max}
            min="1"
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col">
          <SelectInput
            label="Variant"
            value={variant}
            onChange={handleChange(setVariant)}
          >
            <option value="primary">Primary</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="info">Info</option>
          </SelectInput>
        </div>

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

        <div className="flex items-center">
          <input
            type="checkbox"
            id="showLabel"
            checked={showLabel}
            onChange={(e) => setShowLabel(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="showLabel" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Show Label
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="isAnimated"
            checked={isAnimated}
            onChange={(e) => setIsAnimated(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="isAnimated" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Animate Progress
          </label>
        </div>
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
