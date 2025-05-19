import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Heading } from '../components/Heading/Heading';
import SelectInput from '../components/Input/SelectInput';

export default function ExampleHeading() {
  const [level, setLevel] = useState('h2');
  const [customText, setCustomText] = useState('This is a heading');
  const [noMargin, setNoMargin] = useState(false);
  const [customClass, setCustomClass] = useState('');

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const generateCode = () => {
    let code = `<Heading 
  as="${level}" 
  ${noMargin ? 'noMargin ' : ''}`;
    
    if (customClass) {
      code += `
  className="${customClass}"`;
    }
    
    code += `
>
  ${customText}
</Heading>`;
    
    return code;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Heading</h2>
      </div>

      <div className="component-wrapper p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <Heading 
          as={level} 
          noMargin={noMargin}
          className={customClass}
        >
          {customText}
        </Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Heading Text
          </label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <SelectInput
            label="Heading Level"
            value={level}
            onChange={handleChange(setLevel)}
          >
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="h5">Heading 5</option>
            <option value="h6">Heading 6</option>
          </SelectInput>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="noMargin"
            checked={noMargin}
            onChange={(e) => setNoMargin(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="noMargin" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            No Margin
          </label>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Custom Classes
          </label>
          <input
            type="text"
            value={customClass}
            onChange={(e) => setCustomClass(e.target.value)}
            placeholder="e.g., text-blue-500 underline"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
          />
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
