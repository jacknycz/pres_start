import React from "react";
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IconButton } from "pres-start-core";
import { PlayArrow, ArrowForward, Home, Info, CheckCircle, Warning, Error, Add } from '@mui/icons-material';
import { SelectInput } from "pres-start-core";

const iconMap = {
    arrowForward: <ArrowForward />,
    playArrow: <PlayArrow />,
    home: <Home />,
    none: null,
}

export default function ExampleIconButtons() {
    const [iconKey, setIconKey] = useState('arrowForward')
    const [shape, setShape] = useState('default');
    const [text, setText] = useState('Hello world!');
    const icon = iconMap[iconKey];

    const iconVariant = {
        primary: "primary",
        secondary: "secondary",
        ghost: "ghost",
        destructive: "destructive",
    };
    const [variantKey, setVariantKey] = useState('primary');

    const variant = iconVariant[variantKey];

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // const handleIconButtonType = handleChange(setType);
    const handleIconButtonShape = handleChange(setShape);

    const generateIconButtonCode = () => {
        return `<IconButton 
    icon="${iconKey}" 
    variant="${variant}" 
    shape="${shape}"
>
    ${text}
</IconButton>`;
};

    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Icon Buttons</h2>
            </div>

            <div className="component-wrapper">
                <IconButton icon={icon} variant={variant} shape={shape} />
                <IconButton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">

                    <SelectInput
                        label="Variant"
                        name="variant"
                        value={variantKey}
                        onChange={(e) => setVariantKey(e.target.value)}
                    >
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="ghost">Ghost</option>
                        <option value="destructive">Destructive</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Icon"
                        name="icon"
                        value={iconKey}
                        onChange={(e) => setIconKey(e.target.value)}
                    >
                        <option value="arrowForward">Arrow Forward</option>
                        <option value="playArrow">Play Arrow</option>
                        <option value="home">Home</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Shape"
                        name="shape"
                        value={shape}
                        onChange={handleIconButtonShape}
                    >
                        <option value="default">Default</option>
                        <option value="circle">Circle</option>
                        <option value="square">Square</option>
                        <option value="small">Small</option>
                    </SelectInput>
                </div>
            </div>

            <div className="component-code">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateIconButtonCode()}
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
                            <td className="props-cell"><code className="label-style">variant</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">primary | secondary | ghost | destructive</code>
                                <span>Controls the color, no affect on operation.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">primary</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">disabled</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">boolean</code>
                                <span>Disables the button and applies the disabled styles. I kept it seperate and not set as a variant because that felt right to me. Sue me.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">false</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">size</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">small | default | large</code>
                                <span>Probably not the first time you'll see "basic options, add more" and it's easy.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">default</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">rounded</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">default | small | pill | square</code>
                                <span>Select your shape - normally a tightly rounded corner.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">default</code></td>
                        </tr>

                         <tr className="props-row">
                            <td className="props-cell"><code className="label-style">icon</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">MaterialIconName</code>
                                <span>Right now it's setup to just take the name of the Material Icon you want to use. You can add this icon using this prop, or you can place it as a child of IconButton. The prop will override if both are used.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>Variants</h3>
            </div>

            <div className='flex gap-4 my-6 flex-wrap'>
                <IconButton icon={<Info />} variant="primary" />
                <IconButton icon={<CheckCircle />} variant="secondary" />
                <IconButton icon={<Warning />} variant="ghost" />
                <IconButton icon={<Error />} variant="destructive" />
                <IconButton icon={<Error />} disabled />
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>Sizes</h3>
            </div>

            <div className='flex gap-4 my-6 flex-wrap'>
                <IconButton icon={<Add />} variant="primary" size="small" />
                <IconButton icon={<Add />} variant="primary" size="default" />
                <IconButton icon={<Add />} variant="primary" size="large" />
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>Shapes</h3>
            </div>

            <div className='flex gap-4 my-6 flex-wrap'>
                <IconButton icon={<Add />} variant="primary" shape="default" />
                <IconButton icon={<Add />} variant="primary" shape="circle" />
                <IconButton icon={<Add />} variant="primary" shape="square" />
                <IconButton icon={<Add />} variant="primary" shape="small" />
            </div>

        </>
    );
}