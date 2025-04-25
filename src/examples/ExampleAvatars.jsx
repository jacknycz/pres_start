import React from "react";
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Avatar from "../components/Avatar/Avatar";
import SelectInput from "../components/Input/SelectInput";
import TextInput from "../components/Input/TextInput";

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
            <div className="flex">
                <h2 className="text-4xl">Avatars</h2>
            </div>

            <div className="component-wrapper">
                <Avatar size={size} src={src !== "none" ? src : null} alt="A picture of a demon dog">{text ? text : null}</Avatar>
            </div>

            <div className="flex gap-6 my-6 flex-wrap">
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

            <div className="my-12 w-full">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateBadgeCode()}
                </SyntaxHighlighter>
            </div>

            <div className="flex flex-col gap-2 my-6">
                <h2 className="text-2xl">Options</h2>
                <p><code className="bg-gray-100 px-1 rounded text-sm">&lt;Avatar /&gt;</code> has no required props so </p>
            </div>

            <div className="flex mt-6 mb-12 gap-4">
                <div className="flex flex-col w-1/4 gap-2">
                    <code className="bg-gray-100 px-1 rounded text-xl w-fit">src</code>
                    <p className="">The source of the image. If not provided, the Avatar will display the text.</p>
                </div>
                <div className="flex flex-col w-1/4 gap-2">
                    <code className="bg-gray-100 px-1 rounded text-xl w-fit">size</code>
                    <p className="">The source of the image. If not provided, the Avatar will display the text.</p>
                </div>
                <div className="flex flex-col w-1/4 gap-2">
                    <code className="bg-gray-100 px-1 rounded text-xl w-fit">alt</code>
                    <p className="">The source of the image. If not provided, the Avatar will display the text.</p>
                </div>
                <div className="flex flex-col w-1/4 gap-2">
                    <code className="bg-gray-100 px-1 rounded text-xl w-fit">children</code>
                    <p className="">The source of the image. If not provided, the Avatar will display the text.</p>
                </div>
            </div>

            <hr />

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