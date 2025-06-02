import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tag, SelectInput } from "pres-start-core";

export default function ExampleTag() {
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('md');
  const [text, setText] = useState('Tag');
  const [showRemove, setShowRemove] = useState(true);
  const [customClass, setCustomClass] = useState('');
  const [tags, setTags] = useState([
    { id: 1, text: 'React', variant: 'primary' },
    { id: 2, text: 'JavaScript', variant: 'secondary' },
    { id: 3, text: 'TypeScript', variant: 'info' },
    { id: 4, text: 'Success', variant: 'success' },
    { id: 5, text: 'Warning', variant: 'warning' },
    { id: 6, text: 'Error', variant: 'error' },
  ]);

  const handleRemoveTag = (id) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const handleAddTag = () => {
    if (text.trim()) {
      setTags([...tags, { 
        id: Date.now(), 
        text: text.trim(),
        variant 
      }]);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTag();
    }
  };

  const generateCode = () => {
    return `// Single Tag
<Tag 
  variant="${variant}" 
  size="${size}" 
  ${showRemove ? 'onRemove={() => console.log("Tag removed")} ' : ''}
  ${customClass ? `className="${customClass}"` : ''}
>
  ${text || 'Tag'}
</Tag>

// Tags List
{tags.map(tag => (
  <Tag 
    key={tag.id}
    variant="${variant}" 
    size="${size}" 
    onRemove={${showRemove ? '() => handleRemoveTag(tag.id)' : 'undefined'}}
  >
    {tag.text}
  </Tag>
))}`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Tags</h2>
      </div>

      <div className="component-wrapper p-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">Single Tag</h3>
            <div className="flex items-center space-x-2">
              <Tag 
                variant={variant} 
                size={size}
                onRemove={showRemove ? () => console.log('Tag removed') : undefined}
                className={customClass}
              >
                {text || 'Tag'}
              </Tag>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">Tags List</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Tag 
                  key={tag.id}
                  variant={tag.variant} 
                  size={size}
                  onRemove={showRemove ? () => handleRemoveTag(tag.id) : undefined}
                >
                  {tag.text}
                </Tag>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">Add New Tag</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter tag text"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-p-500 focus:border-p-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleAddTag}
                className="px-4 py-2 bg-p-500 text-white rounded-md hover:bg-p-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-p-500"
              >
                Add Tag
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col">
          <SelectInput
            label="Variant"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
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
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </SelectInput>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="showRemove"
            checked={showRemove}
            onChange={(e) => setShowRemove(e.target.checked)}
            className="h-4 w-4 text-p-500 focus:ring-p-500 border-gray-300 rounded"
          />
          <label htmlFor="showRemove" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Show Remove Button
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
            placeholder="e.g., shadow-md transform hover:scale-105"
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
