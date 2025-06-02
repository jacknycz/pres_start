import React from "react";
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Avatar } from "pres-start-core";
import { SelectInput } from "pres-start-core";
import { TextInput } from "pres-start-core";

export default function ExampleAvatars() {
    const [size, setSize] = useState('default');
    const [src, setSrc] = useState('none');
    const [text, setText] = useState('PN');
    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const handleAvatarSize = handleChange(setSize);
    const handleAvatarSrc = handleChange(setSrc);

    const generateBadgeCode = () => {
        return `<Avatar 
    size="${size}"
    src="${src !== null ? src : null}"
    alt="Always give alt text guys! - Presley"
>
    ${text ? text : null}
</Avatar>`;
    };

    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Avatars</h2>
            </div>

            <div className="component-wrapper">
                <Avatar size={size} src={src !== "none" ? src : null} alt="A picture of a demon dog">{text ? text : null}</Avatar>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 my-6 flex-wrap'>
                <div className="flex flex-col">
                    <SelectInput
                        label="Size"
                        value={size}
                        onChange={handleAvatarSize}
                    >
                        <option value="default">Default</option>
                        <option value="small">Small</option>
                        <option value="large">Large</option>

                    </SelectInput>
                    {/* options={[
                            { value: 'default', label: 'Default' },
                            { value: 'small', label: 'Small' },
                            { value: 'large', label: 'Large' },
                        ]} */}
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Image"
                        value={src}
                        onChange={handleAvatarSrc}
                    >
                        <option value="none">None</option>
                        <option value="../src/assets/Pres.png">Presley</option>
                    </SelectInput>
                </div>

                {src === "none" && (
                    <div className="flex flex-col">
                        <TextInput
                            label="Initials"
                            name="initials"
                            placeholder="PN"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            maxLength={2}
                        />
                    </div>
                )}
            </div>

            <div className="component-code">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateBadgeCode()}
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
                            <td className="props-cell"><code className="label-style">src</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>With the intent of these being a starter kit - it just takes a string. Setup like you have a URL to work with.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">size</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">small | default | large</code>
                                <span>Again, it's a starter, so here's the bare minimum. I think 2 lines of code to add a new one? I might add a "fit" option that fills the container.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">alt</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>Alt text for screenreaders and easy browsing and it's good and it's helpful and you should do it.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col gap-2 my-12">
                <h2 className="text-2xl">Options</h2>
                <p><code className="bg-gray-100 px-1 dark:text-gray-800 rounded text-sm">&lt;Avatar /&gt;</code> has no required props so </p>
            </div>

            <hr className="hr-fade" />

            <div className="flex mt-12">
                <h3 className='text-2xl'>Large</h3>
            </div>

            <div className="flex gap-4 my-6">
                <Avatar size="large" src="../src/assets/Pres.png" alt="A picture of a demon dog" />
                <Avatar size="large">BZ</Avatar>
                <Avatar size="large" />
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>Default</h3>
            </div>

            <div className="flex gap-4 my-6">
                <Avatar src="../src/assets/Pres.png" alt="A picture of a demon dog" />
                <Avatar>BZ</Avatar>
                <Avatar />
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>Small</h3>
            </div>

            <div className="flex gap-4 my-6">
                <Avatar size="small" src="../src/assets/Pres.png" alt="A picture of a demon dog" />
                <Avatar size="small">BZ</Avatar>
                <Avatar size="small" />
            </div>
        </>
    );
}