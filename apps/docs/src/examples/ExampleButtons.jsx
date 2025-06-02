import { useState } from 'react'
import { Button } from "pres-start-core";
import { PlayArrow, ArrowForward, Home } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { TextInput } from "pres-start-core";
import { SelectInput } from "pres-start-core";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const iconMap = {
    arrowForward: <ArrowForward />,
    playArrow: <PlayArrow />,
    home: <Home />,
    none: null,
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ExampleButtons() {
    const [iconLeftKey, seticonLeftKey] = useState('none')
    const [iconRightKey, seticonRightKey] = useState('none')

    const [variant, setVariant] = useState('primary');
    const [size, setSize] = useState('default');
    const [rounded, setRounded] = useState('default');
    const [text, setText] = useState('Hello world!');
    const iconLeft = iconMap[iconLeftKey]
    const iconRight = iconMap[iconRightKey]

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const handleButtonVariant = handleChange(setVariant);
    const handleButtonSize = handleChange(setSize);
    const handleButtonRounded = handleChange(setRounded);

    const generateButtonCode = () => {
        return `<Button
    variant="${variant}" 
    size="${size}" 
    rounded="${rounded}" 
    ${iconLeftKey !== 'none' ? `iconLeft={<${iconLeftKey === 'arrowForward' ? 'ArrowForward' : iconLeftKey === 'playArrow' ? 'PlayArrow' : 'Home'} />}` : ''}
    ${iconRightKey !== 'none' ? `iconRight={<${iconRightKey === 'arrowForward' ? 'ArrowForward' : iconRightKey === 'playArrow' ? 'PlayArrow' : 'Home'} />}` : ''}
>
    ${text}
</Button>`;
    };

    // styles
    // const sectionBase = "flex flex-col gap-2 text-gray-700 dark:text-gray-200";
    // const labelStyle = "bg-gray-100 px-1 rounded text-xl text-p-20 w-fit";
    // const listStyle = "list-disc list-inside space-y-1 my-2";

    return (
        <>
            <div className="component-header">
                <h2 className='text-4xl'>Button</h2>
            </div>

            <div className="component-wrapper">
                <Button variant={variant} size={size} iconLeft={iconLeft} iconRight={iconRight} rounded={rounded}>{text}</Button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 my-6 flex-wrap'>
                <div className="flex flex-col">
                    <SelectInput
                        label="Variant"
                        name="variant"
                        value={variant}
                        onChange={handleButtonVariant}
                    >
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="ghost">Ghost</option>
                        <option value="destructive">Destructive</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Size"
                        name="size"
                        value={size}
                        onChange={handleButtonSize}
                    >
                        <option value="default">Default</option>
                        <option value="small">Small</option>
                        <option value="large">Large</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Rounded"
                        name="rounded"
                        value={rounded}
                        onChange={handleButtonRounded}
                    >
                        <option value="default">Default</option>
                        <option value="small">Small</option>
                        <option value="pill">Pill</option>
                        <option value="square">Square</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Icon Left"
                        name="iconLeft"
                        value={iconLeftKey}
                        onChange={(e) => seticonLeftKey(e.target.value)}
                    >
                        <option value="none">None</option>
                        <option value="arrowForward">Arrow Forward</option>
                        <option value="playArrow">Play Arrow</option>
                        <option value="home">Home</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Icon Right"
                        name="iconRight"
                        value={iconRightKey}
                        onChange={(e) => seticonRightKey(e.target.value)}
                    >
                        <option value="none">None</option>
                        <option value="arrowForward">Arrow Forward</option>
                        <option value="playArrow">Play Arrow</option>
                        <option value="home">Home</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <TextInput
                        label="Button Text"
                        name="buttonText"
                        placeholder="type a different message"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4 my-12 w-full">
                <h3 className='text-2xl'>Code</h3>
                <p className='text-sm'>I thought this was going to be a much more complicated part</p>
                <SyntaxHighlighter language="jsx" style={oneDark} className="bg-[#0B1739]">
                    {generateButtonCode()}
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
                            <td className="props-cell"><code className="label-style">iconLeft <br/> iconRight</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">MaterialIconName</code>
                                <span>Right now it's setup to just take the name of the Material Icon you want to use. Can be updated to use whatever icons you want.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Begin button examples section - updated with grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Large buttons section */}
                <div className="col-span-1 md:col-span-3">
                    <h3 className='text-2xl mb-6'>Large</h3>
                </div>
                
                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Primary</h4>
                    <Button size='large' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button size='large' iconRight={<PlayArrow />}>Button</Button>
                    <Button size='large' iconLeft={<ArrowForward />}>Button</Button>
                    <Button size='large'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Secondary</h4>
                    <Button variant='secondary' size='large' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='secondary' size='large' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='secondary' size='large' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='secondary' size='large'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Ghost</h4>
                    <Button variant='ghost' size='large' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='ghost' size='large' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='ghost' size='large' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='ghost' size='large'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Destructive</h4>
                    <Button variant='destructive' size='large' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='destructive' size='large' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='destructive' size='large' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='destructive' size='large'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Disabled</h4>
                    <Button disabled size='large' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button disabled size='large' iconRight={<PlayArrow />}>Button</Button>
                    <Button disabled size='large' iconLeft={<ArrowForward />}>Button</Button>
                    <Button disabled size='large'>Button</Button>
                </div>

                {/* Default buttons section */}
                <div className="col-span-1 md:col-span-3">
                    <h3 className='text-2xl mb-6 mt-8'>Default</h3>
                </div>
                
                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Primary</h4>
                    <Button iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button iconRight={<PlayArrow />}>Button</Button>
                    <Button iconLeft={<ArrowForward />}>Button</Button>
                    <Button>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Secondary</h4>
                    <Button variant='secondary' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='secondary' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='secondary' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='secondary'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Ghost</h4>
                    <Button variant='ghost' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='ghost' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='ghost' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='ghost'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Destructive</h4>
                    <Button variant='destructive' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='destructive' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='destructive' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='destructive'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Disabled</h4>
                    <Button disabled iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button disabled iconRight={<PlayArrow />}>Button</Button>
                    <Button disabled iconLeft={<ArrowForward />}>Button</Button>
                    <Button disabled>Button</Button>
                </div>

                {/* Small buttons section */}
                <div className="col-span-1 md:col-span-3">
                    <h3 className='text-2xl mb-6 mt-8'>Small</h3>
                </div>
                
                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Primary</h4>
                    <Button size='small' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button size='small' iconRight={<PlayArrow />}>Button</Button>
                    <Button size='small' iconLeft={<ArrowForward />}>Button</Button>
                    <Button size='small'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Secondary</h4>
                    <Button variant='secondary' size='small' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='secondary' size='small' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='secondary' size='small' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='secondary' size='small'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Ghost</h4>
                    <Button variant='ghost' size='small' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='ghost' size='small' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='ghost' size='small' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='ghost' size='small'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Destructive</h4>
                    <Button variant='destructive' size='small' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='destructive' size='small' iconRight={<PlayArrow />}>Button</Button>
                    <Button variant='destructive' size='small' iconLeft={<ArrowForward />}>Button</Button>
                    <Button variant='destructive' size='small'>Button</Button>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h4 className="text-lg font-medium mb-2">Disabled</h4>
                    <Button disabled size='small' iconLeft={<ArrowForward />} iconRight={<PlayArrow />}>Button</Button>
                    <Button disabled size='small' iconRight={<PlayArrow />}>Button</Button>
                    <Button disabled size='small' iconLeft={<ArrowForward />}>Button</Button>
                    <Button disabled size='small'>Button</Button>
                </div>
            </div>
        </>
    )
}