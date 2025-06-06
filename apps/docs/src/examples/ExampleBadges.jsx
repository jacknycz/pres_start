import React from "react";
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Badge } from "pres-start-core";
import { PlayArrow, ArrowForward, Home, Info, CheckCircle, Warning, Error, } from '@mui/icons-material';
import { SelectInput } from "pres-start-core";
import { TextInput } from "pres-start-core";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';  

const iconMap = {
    arrowForward: <ArrowForward />,
    playArrow: <PlayArrow />,
    home: <Home />,
    none: null,
}

export default function ExampleBadges() {
    const [iconKey, seticonKey] = useState('none')
    const [shape, setShape] = useState('default');
    const [text, setText] = useState('Hello world!');
    const icon = iconMap[iconKey];

    const badgeVariant = {
        info: "info",
        success: "success",
        warning: "warning",
        error: "error",
        primary: "primary",
        secondary: "secondary",
        ghost: "ghost",
    };
    const [variantKey, setVariantKey] = useState('info');

    const variant = badgeVariant[variantKey];

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // const handleBadgeType = handleChange(setType);
    const handleBadgeShape = handleChange(setShape);

    const generateBadgeCode = () => {
        return `<Badge 
    icon="${iconKey}" 
    variant="${variant}" 
    shape="${shape}"
>
    ${text}
</Badge>`;
};

    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Badges</h2>
            </div>

            <div className="component-wrapper">
                <Badge icon={icon} variant={variant} shape={shape}>{text}</Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col">

                    <SelectInput
                        label="Type"
                        name="type"
                        value={variantKey}
                        onChange={(e) => setVariantKey(e.target.value)}
                    >
                        <option value="info">Default (Info)</option>
                        <option value="success">Success</option>
                        <option value="warning">Warning</option>
                        <option value="error">Error</option>
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="ghost">Ghost</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Icon"
                        name="icon"
                        value={iconKey}
                        onChange={(e) => seticonKey(e.target.value)}
                    >
                        <option value="none">None</option>
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
                        onChange={handleBadgeShape}
                    >
                        <option value="default">Default</option>
                        <option value="pill">Pill</option>
                        <option value="square">Square</option>
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
                <Badge shape="pill" variant="info">Info</Badge>
                <Badge shape="pill" variant="success">Success</Badge>
                <Badge shape="pill" variant="warning">Warning</Badge>
                <Badge shape="pill" variant="error">Error</Badge>
                <Badge shape="pill" variant="primary">Primary</Badge>
                <Badge shape="pill" variant="secondary">Secondary</Badge>
                <Badge shape="pill" variant="ghost">Ghost</Badge>
            </div>

            <div className="flex mt-12">
                <h3 className='text-2xl'>w/ Icons</h3>
            </div>

            <div className='flex gap-4 my-6 flex-wrap'>
                <Badge icon={<Info style={{ fontSize: 16 }} />} shape="pill" variant="info">Info</Badge>
                <Badge icon={<CheckCircle />} shape="pill" variant="success">Success</Badge>
                <Badge icon={<Warning />} shape="pill" variant="warning">Warning</Badge>
                <Badge icon={<Error />} shape="pill" variant="error">Error</Badge>
                <Badge icon={<Info />} shape="pill" variant="primary">Primary</Badge>
                <Badge icon={<Info />} shape="pill" variant="secondary">Secondary</Badge>
                <Badge icon={<Info />} shape="pill" variant="ghost">Ghost</Badge>
            </div>

        </>
    );
}