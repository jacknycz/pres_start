import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RangeSlider } from '../components/RangeSlider/RangeSlider';
import TextInput from '../components/Input/TextInput';

export default function ExampleRangeSlider() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(50);
  const [label, setLabel] = useState('Volume');
  const [disabled, setDisabled] = useState(false);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const generateCode = () => {
    return `<RangeSlider
  min={${min}}
  max={${max}}
  step={${step}}
  value={${value}}
  onChange={(value) => console.log(value)}
  label="${label}"
  ${disabled ? 'disabled' : ''}
/>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Range Slider</h2>
      </div>

      <div className="component-wrapper p-8">
        <RangeSlider
          min={Number(min)}
          max={Number(max)}
          step={Number(step)}
          value={Number(value)}
          onChange={handleSliderChange}
          label={label}
          disabled={disabled}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col">
          <TextInput
            label="Min Value"
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <TextInput
            label="Max Value"
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <TextInput
            label="Step"
            type="number"
            value={step}
            min="0.1"
            step="0.1"
            onChange={(e) => setStep(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <TextInput
            label="Label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="disabled"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="disabled" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Disabled
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
