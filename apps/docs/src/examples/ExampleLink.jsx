import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from "pres-start-core";
import { SelectInput } from "pres-start-core";

export default function ExampleLink() {
  const [variant, setVariant] = useState('primary');
  const [text, setText] = useState('Click me');
  const [isExternal, setIsExternal] = useState(false);
  const [customHref, setCustomHref] = useState('https://example.com');
  const [useTo, setUseTo] = useState(false);
  const [toPath, setToPath] = useState('/home');

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const generateCode = () => {
    if (useTo) {
      return `<Link 
  to="${toPath}" 
  variant="${variant}" 
  ${isExternal ? 'isExternal' : ''}
>
  ${text}
</Link>`;
    }
    
    return `<Link 
  href="${customHref}" 
  variant="${variant}" 
  ${isExternal ? 'isExternal' : ''}
>
  ${text}
</Link>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Link</h2>
      </div>

      <div className="component-wrapper p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-200">
            This is a paragraph with a{' '}
            <Link 
              href={useTo ? undefined : customHref}
              to={useTo ? toPath : undefined}
              variant={variant}
              isExternal={isExternal}
            >
              {text}
            </Link>{' '}
            component inside it.
          </p>
          
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Standalone link: {' '}
              <Link 
                href={useTo ? undefined : customHref}
                to={useTo ? toPath : undefined}
                variant={variant}
                isExternal={isExternal}
              >
                {text}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Link Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <SelectInput
            label="Variant"
            value={variant}
            onChange={handleChange(setVariant)}
          >
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="danger">Danger</option>
            <option value="success">Success</option>
          </SelectInput>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="isExternal"
            checked={isExternal}
            onChange={(e) => setIsExternal(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="isExternal" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Open in new tab (adds target="_blank" and rel="noopener noreferrer")
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="useTo"
            checked={useTo}
            onChange={(e) => setUseTo(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="useTo" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Use React Router 'to' prop (for client-side routing)
          </label>
        </div>

        {useTo ? (
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Path (to prop)
            </label>
            <input
              type="text"
              value={toPath}
              onChange={(e) => setToPath(e.target.value)}
              placeholder="/home"
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        ) : (
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              URL (href)
            </label>
            <input
              type="url"
              value={customHref}
              onChange={(e) => setCustomHref(e.target.value)}
              placeholder="https://example.com"
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
