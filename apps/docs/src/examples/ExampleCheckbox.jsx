import { useState } from "react";
import { Checkbox } from "pres-start-core";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ExampleCheckbox() {
    const [selectedColor, setSelectedColor] = useState("blue");
    const [selectedTools, setSelectedTools] = useState(["react"]);

    const handleToolToggle = (value) => {
        setSelectedTools((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const generateCheckboxCode = () => {
        return `<Checkbox
    name="tools"
    label="Should we get Pres a label maker?"
    value="react"
    checked={selectedTools.includes("react")}
    onChange={() => handleToolToggle("react")}
    helperText="This option lets Presley send you a label maker"
/>`;
    };
    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Checkbox</h2>
            </div>

            <div className="component-wrapper">
                <Checkbox
                    name="tools"
                    label="Should we get Pres a label maker?"
                    value="react"
                    checked={selectedTools.includes("react")}
                    onChange={() => handleToolToggle("react")}
                    helperText="This option lets Presley send you a label maker"
                />
            </div>

            <div className="component-code">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateCheckboxCode()}
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
                            <td className="props-cell"><code className="label-style">name</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>A unique name that is used to track all the important info you get from this input. Gotta have it.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">id</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>Unique identifier for the field.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">label</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>Label for the input. Displays prominiently next to input.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">default</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">checked</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">boolean</code>
                                <span>Indicates if checked. Can be toggled. That's the point.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">false</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">disabled</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">boolean</code>
                                <span>Indicates if disabled. If disabled - it's disabled... Can't be selected and stuff.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">false</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">onChange</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">callback function</code>
                                <span>You can trigger a callback here, in fact some might say it's "required".</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">helperText</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>Optional helper text for the input. Especially helpful for legalise.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
