import React from "react";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ExampleToggleSwitch() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const generateRadioGroupCode = () => {
        return `<ToggleSwitch
    checked={checked}
    onChange={handleChange}
    name="example"
    value="example"
>
    Toggle Switch
</ToggleSwitch>`;
    };

    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Toggle Switch</h2>
            </div>

            <div className="component-wrapper">
                <ToggleSwitch
                    checked={checked}
                    onChange={handleChange}
                    name="example"
                    value="example"
                >
                    Toggle Switch
                </ToggleSwitch>
                <ToggleSwitch
                    checked={checked}
                    onChange={handleChange}
                    name="example"
                    value="example"
                    disabled
                >
                    Disabled Toggle Switch
                </ToggleSwitch>
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
