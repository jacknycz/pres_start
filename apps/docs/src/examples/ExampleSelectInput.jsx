import React from "react";
import { SelectInput } from "pres-start-core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ExampleTextInput() {
  const generateRadioGroupCode = () => {
    return `<SelectInput
  label="Variant"
  name="variant"
  placeholder="Select a variant"
  supportText="This is a support text"
  onChange={() => { }}
  iconRight={<ArrowDropDownIcon fontSize="small" />}
>
  <option value="primary">Primary</option>
  <option value="secondary">Secondary</option>
  <option value="ghost">Ghost</option>
</SelectInput>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Select</h2>
      </div>

      <div className="component-wrapper">
        <SelectInput
          label="Variant"
          name="variant"
          placeholder="Select a variant"
          supportText="This is a support text"
          onChange={() => { }}
          iconRight={<ArrowDropDownIcon fontSize="small" />}
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="ghost">Ghost</option>
        </SelectInput>
      </div>

      <div className="component-code">
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {generateRadioGroupCode()}
        </SyntaxHighlighter>
      </div>

      <div className="props-wrapper">
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
              <td className="props-cell"><code className="label-style">header</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>The text displayed as the header of the modal. Just that - text.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">id</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>A unique identifier for both the RadioGroup and the Radio components.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">onClose</code></td>
              <td className="props-cell props-details">
                <code className="label-style">callback function</code>
                <span>Toggles the modal by default. You can be clever here, it's your design system.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
