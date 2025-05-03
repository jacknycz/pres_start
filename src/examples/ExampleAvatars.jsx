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

            <div className="my-12 w-full">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateBadgeCode()}
                </SyntaxHighlighter>
            </div>

            <div className="flex flex-col gap-2 my-6">
                <h2 className="text-2xl">Options</h2>
                <p><code className="bg-gray-100 px-1 dark:text-gray-800 rounded text-sm">&lt;Avatar /&gt;</code> has no required props so </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 mt-6 mb-12">
                <div className="section-base">
                    <code className="label-style">types</code>
                    <ul className="list-style">
                        <li>default/icon</li>
                        <li>initials</li>
                        <li>image</li>
                    </ul>
                    <p>Default for anonymous, initials for the shy, image for the Instagram motivated.</p>
                </div>

                <div className="section-base">
                    <code className="label-style">src</code>
                    <ul className="list-style">
                        <li>url</li>
                    </ul>
                    <p>This can be changed to it's own component, but sourcing your images is up to you</p>
                </div>

                <div className="section-base">
                    <code className="label-style">size</code>
                    <ul className="list-style">
                        <li>default</li>
                        <li>small</li>
                        <li>large</li>
                    </ul>
                    <p>You can add more, but I promise the only person who ever enlarges your profile picture is you</p>
                </div>

                <div className="section-base">
                    <code className="label-style">alt</code>
                    <ul className="list-style">
                        <li>Takes a string, prolly will be a string yeah?</li>
                    </ul>
                    <p>I used to make these funny captions, but they are for blind folks. Make 'em descriptive.</p>
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