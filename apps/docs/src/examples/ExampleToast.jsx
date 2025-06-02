import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Toast } from "pres-start-core";
import { Button } from "pres-start-core";
import { SelectInput } from "pres-start-core";

export default function ExampleToast() {
  const [variant, setVariant] = useState('default');
  const [message, setMessage] = useState('Operation completed successfully!');
  const [autoDismiss, setAutoDismiss] = useState(true);
  const [dismissTime, setDismissTime] = useState(5000);
  const [showToast, setShowToast] = useState(false);
  const [toastPosition, setToastPosition] = useState('bottom-right');

  const positions = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
  };

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleDismissToast = () => {
    setShowToast(false);
  };

  const handleToastDismissed = () => {
    setShowToast(false);
  };

  const generateCode = () => {
    return `const [showToast, setShowToast] = useState(false);

// In your JSX:
<Button onClick={() => setShowToast(true)}>
  Show Toast
</Button>

{showToast && (
  <Toast
    message="${message}"
    variant="${variant}"
    onDismiss={() => setShowToast(false)}
    autoDismiss={${autoDismiss}}
    autoDismissTimeout={${dismissTime}}
    className="${positions[toastPosition]}"
  />
)}`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Toast Notifications</h2>
      </div>

      <div className="component-wrapper p-8 flex items-center justify-center">
        <Button onClick={handleShowToast}>
          Show Toast
        </Button>
      </div>

      {showToast && (
        <div className={`fixed z-50 ${positions[toastPosition]}`}>
          <Toast
            message={message}
            variant={variant}
            onDismiss={() => {
              handleDismissToast();
              handleToastDismissed();
            }}
            autoDismiss={autoDismiss}
            autoDismissTimeout={dismissTime}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Message
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <SelectInput
            label="Variant"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </SelectInput>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="autoDismiss"
            checked={autoDismiss}
            onChange={(e) => setAutoDismiss(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="autoDismiss" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Auto Dismiss
          </label>
        </div>

        {autoDismiss && (
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Dismiss After (ms)
            </label>
            <input
              type="number"
              value={dismissTime}
              min="1000"
              step="500"
              onChange={(e) => setDismissTime(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        <div className="flex flex-col">
          <SelectInput
            label="Position"
            value={toastPosition}
            onChange={(e) => setToastPosition(e.target.value)}
          >
            <option value="top-left">Top Left</option>
            <option value="top-center">Top Center</option>
            <option value="top-right">Top Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-center">Bottom Center</option>
            <option value="bottom-right">Bottom Right</option>
          </SelectInput>
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
