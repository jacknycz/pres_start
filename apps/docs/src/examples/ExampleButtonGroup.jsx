import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ButtonGroup } from "pres-start-core";
import { Button } from "pres-start-core";
import { SelectInput } from "pres-start-core";

export default function ExampleButtonGroup() {
  const [variant, setVariant] = useState('horizontal');
  const [buttonVariant, setButtonVariant] = useState('primary');
  const [buttonSize, setButtonSize] = useState('default');
  const [buttonRounded, setButtonRounded] = useState('default');

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const generateCode = () => {
    return `<ButtonGroup variant="${variant}">
  <Button 
    variant="${buttonVariant}" 
    size="${buttonSize}" 
    rounded="${buttonRounded}"
  >
    First
  </Button>
  <Button 
    variant="${buttonVariant}" 
    size="${buttonSize}" 
    rounded="${buttonRounded}"
  >
    Second
  </Button>
  <Button 
    variant="${buttonVariant}" 
    size="${buttonSize}" 
    rounded="${buttonRounded}"
  >
    Third
  </Button>
</ButtonGroup>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Button Group</h2>
      </div>

      <div className="component-wrapper">
        <ButtonGroup variant={variant}>
          <Button variant={buttonVariant} size={buttonSize} rounded={buttonRounded}>
            First
          </Button>
          <Button variant={buttonVariant} size={buttonSize} rounded={buttonRounded}>
            Second
          </Button>
          <Button variant={buttonVariant} size={buttonSize} rounded={buttonRounded}>
            Third
          </Button>
        </ButtonGroup>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="flex flex-col">
          <SelectInput
            label="Group Variant"
            name="variant"
            value={variant}
            onChange={handleChange(setVariant)}
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </SelectInput>
        </div>

        <div className="flex flex-col">
          <SelectInput
            label="Button Variant"
            name="buttonVariant"
            value={buttonVariant}
            onChange={handleChange(setButtonVariant)}
          >
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="ghost">Ghost</option>
            <option value="destructive">Destructive</option>
          </SelectInput>
        </div>

        <div className="flex flex-col">
          <SelectInput
            label="Button Size"
            name="buttonSize"
            value={buttonSize}
            onChange={handleChange(setButtonSize)}
          >
            <option value="small">Small</option>
            <option value="default">Default</option>
            <option value="large">Large</option>
          </SelectInput>
        </div>

        <div className="flex flex-col">
          <SelectInput
            label="Button Rounded"
            name="buttonRounded"
            value={buttonRounded}
            onChange={handleChange(setButtonRounded)}
          >
            <option value="small">Small</option>
            <option value="default">Default</option>
            <option value="pill">Pill</option>
            <option value="square">Square</option>
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

      <div className="props-wrapper mt-12">
        <h3 className='text-2xl mb-6'>ButtonGroup Props</h3>
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
              <td className="props-cell"><code className="label-style">variant</code></td>
              <td className="props-cell props-details">
                <code className="label-style">'horizontal' | 'vertical'</code>
                <span>Determines the layout direction of the button group.</span>
              </td>
              <td className="props-cell"><code className="label-style">'horizontal'</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">className</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>Additional CSS classes to apply to the button group container.</span>
              </td>
              <td className="props-cell"><code className="label-style">''</code></td>
            </tr>
          </tbody>
        </table>

        <h3 className='text-2xl mb-6 mt-12'>Button Props (for grouped buttons)</h3>
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
              <td className="props-cell"><code className="label-style">variant</code></td>
              <td className="props-cell props-details">
                <code className="label-style">'primary' | 'secondary' | 'ghost' | 'destructive'</code>
                <span>Controls the button's visual style.</span>
              </td>
              <td className="props-cell"><code className="label-style">'primary'</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">size</code></td>
              <td className="props-cell props-details">
                <code className="label-style">'small' | 'default' | 'large'</code>
                <span>Controls the size of the button.</span>
              </td>
              <td className="props-cell"><code className="label-style">'default'</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">rounded</code></td>
              <td className="props-cell props-details">
                <code className="label-style">'small' | 'default' | 'pill' | 'square'</code>
                <span>Controls the border radius of the button. Note: In a group, only the outer corners will be rounded.</span>
              </td>
              <td className="props-cell"><code className="label-style">'default'</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
