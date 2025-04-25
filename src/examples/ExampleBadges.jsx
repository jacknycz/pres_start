import React from "react";
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Badge from "../components/Badge/Badge";
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

export default function ExampleBadges() {
    const [iconKey, seticonKey] = useState('none')
    const [rounded, setRounded] = useState('default');
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
    const handleBadgeRounded = handleChange(setRounded);

    const generateBadgeCode = () => {
        return `<Badge 
    icon="${iconKey}" 
    variant="${variant}" 
    rounded="${rounded}"
>
    ${text}
</Button>`;
};

    return (
        <>
            <div className="flex">
                <h2 className="text-4xl">Badges</h2>
            </div>

            <div className="component-wrapper">
                <Badge icon={icon} variant={variant} rounded={rounded}>{text}</Badge>
            </div>

            <div className="flex gap-6 my-6 flex-wrap">
                <div className="flex flex-col">

                    <SelectInput
                        label="Type"
                        name="type"
                        value={variantKey}
                        onChange={(e) => setVariantKey(e.target.value)}
                        iconRight={<ArrowDropDownIcon fontSize="small" />}
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
                        iconRight={<ArrowDropDownIcon fontSize="small" />}
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
                        value={rounded}
                        onChange={handleBadgeRounded}
                        iconRight={<ArrowDropDownIcon fontSize="small" />}
                    >
                        <option value="default">Default</option>
                        <option value="small">Small</option>
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

            <div className="my-12 w-full">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateBadgeCode()}
                </SyntaxHighlighter>
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