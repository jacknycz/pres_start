import React from "react";
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import IconButton from "../components/IconButton/IconButton";
import { PlayArrow, ArrowForward, Home, Info, CheckCircle, Warning, Error, } from '@mui/icons-material';
import SelectInput from "../components/Input/SelectInput";
import TextInput from "../components/Input/TextInput";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';  

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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

                <div className="flex flex-col">

                    <TextInput
                        label="Text"
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxLength={20}
                        placeholder="Type a message"
                    />
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
                            <td className="props-cell"><code className="label-style">icon</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">MaterialIconName</code>
                                <span>Right now it's setup to just take the name of the Material Icon you want to use. Can be updated to use whatever icons you want.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">variant</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">info | success | warning | error | primary | secondary | ghost</code>
                                <span>Controls the color and default icon of the badge.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">info</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">shape</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">default | pill | square</code>
                                <span>Select your shape - normally a tightly rounded corner.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">default</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>Badge Variants</h3>
            </div>

            <div className='flex gap-4 my-6 flex-wrap'>
                <IconButton icon={<Info />} variant="info" />
                <IconButton icon={<CheckCircle />} variant="success" />
                <IconButton icon={<Warning />} variant="warning" />
                <IconButton icon={<Error />} variant="error" />
                <IconButton icon={<Info />} variant="primary" />
                <IconButton icon={<Info />} variant="secondary" />
                <IconButton icon={<Info />} variant="ghost" />
                {/* <Badge shape="pill" variant="info">Info</Badge>
                <Badge shape="pill" variant="success">Success</Badge>
                <Badge shape="pill" variant="warning">Warning</Badge>       
                <Badge shape="pill" variant="error">Error</Badge>
                <Badge shape="pill" variant="primary">Primary</Badge>
                <Badge shape="pill" variant="secondary">Secondary</Badge>
                <Badge shape="pill" variant="ghost">Ghost</Badge> */}
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>w/ Icons</h3>
            </div>

            <div className='flex gap-4 my-6 flex-wrap'>
                {/* <Badge icon={<Info style={{ fontSize: 16 }} />} shape="pill" variant="info">Info</Badge>
                <Badge icon={<CheckCircle />} shape="pill" variant="success">Success</Badge>
                <Badge icon={<Warning />} shape="pill" variant="warning">Warning</Badge>
                <Badge icon={<Error />} shape="pill" variant="error">Error</Badge>
                <Badge icon={<Info />} shape="pill" variant="primary">Primary</Badge>
                <Badge icon={<Info />} shape="pill" variant="secondary">Secondary</Badge>
                <Badge icon={<Info />} shape="pill" variant="ghost">Ghost</Badge> */}
            </div>

        </>
    );
}