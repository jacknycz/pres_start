import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tooltip } from '../components/Tooltip/Tooltip';
import Button from '../components/Button/Button';
import SelectInput from '../components/Input/SelectInput';

export default function ExampleTooltip() {
  const [position, setPosition] = useState('top');
  const [content, setContent] = useState('Tooltip content');
  const [isInteractive, setIsInteractive] = useState(false);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const generateCode = () => {
    return `<Tooltip 
  content="${content}" 
  position="${position}"
  ${isInteractive ? 'isInteractive={true}' : ''}
>
  <Button>Hover me</Button>
</Tooltip>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Tooltip</h2>
      </div>

      <div className="component-wrapper flex items-center justify-center p-8">
        <Tooltip 
          content={content} 
          position={position}
          isInteractive={isInteractive}
        >
          <Button>Hover me</Button>
        </Tooltip>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col">
          <SelectInput
            label="Position"
            name="position"
            value={position}
            onChange={handleChange(setPosition)}
          >
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </SelectInput>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Content
          </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="isInteractive"
            checked={isInteractive}
            onChange={(e) => setIsInteractive(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="isInteractive" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Interactive (stays open when hovered)
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

      <div className="props-wrapper mt-12">
        <h3 className='text-2xl mb-6'>Props</h3>
        <table className="w-full border rounded-lg table-auto props">
          <thead className="props-header">
            <tr>
              <th className="props-cell">Name</th>
              <th className="props-cell">Details</th>
              <th className="props-cell">Default</th>
            </tr>
          </thead>

          <tbody>
            <tr className="props-row">
              <td className="props-cell"><code className="label-style">content</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string | ReactNode</code>
                <span>The content to display inside the tooltip. Can be a string or any React node.</span>
              </td>
              <td className="props-cell"><code className="label-style">-</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">position</code></td>
              <td className="props-cell props-details">
                <code className="label-style">'top' | 'right' | 'bottom' | 'left'</code>
                <span>Controls where the tooltip appears relative to its child element.</span>
              </td>
              <td className="props-cell"><code className="label-style">'top'</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">isInteractive</code></td>
              <td className="props-cell props-details">
                <code className="label-style">boolean</code>
                <span>If true, the tooltip will stay open when hovered, allowing interaction with its contents.</span>
              </td>
              <td className="props-cell"><code className="label-style">false</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">className</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>Additional CSS classes to apply to the tooltip.</span>
              </td>
              <td className="props-cell"><code className="label-style">''</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
