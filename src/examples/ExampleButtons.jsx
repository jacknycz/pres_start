import { useState } from 'react'
import Button from '../components/Button/Button.jsx';
import { PlayArrow, ArrowForward, Home } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import TextInput from '../components/Input/TextInput.jsx';
import SelectInput from '../components/Input/SelectInput.jsx';
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
    iconLeft="${iconLeftKey}" 
    iconRight="${iconRightKey}"
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
            <div className="flex flex-wrap mt">
                <h2 className='text-4xl'>Button</h2>
            </div>

            <div className="flex gap-4 my-6 justify-center border-1 border-p-90 bg-p-95 dark:border-p-80 rounded-lg p-8">
                <Button variant={variant} size={size} iconLeft={iconLeft} iconRight={iconRight} rounded={rounded}>{text}</Button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 my-6 flex-wrap'>
                <div className="flex flex-col">
                    <SelectInput
                        label="Variant"
                        name="variant"
                        value={variant}
                        onChange={handleButtonVariant}
                        iconRight={<ArrowDropDownIcon fontSize="small" />}
                    >
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="ghost">Ghost</option>
                    </SelectInput>
                </div>

                <div className="flex flex-col">
                    <SelectInput
                        label="Size"
                        name="size"
                        value={size}
                        onChange={handleButtonSize}
                        iconRight={<ArrowDropDownIcon fontSize="small" />}
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
                        iconRight={<ArrowDropDownIcon fontSize="small" />}
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
                        label="Icon Right"
                        name="iconRight"
                        value={iconRightKey}
                        onChange={(e) => seticonRightKey(e.target.value)}
                        iconRight={<ArrowDropDownIcon fontSize="small" />}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 mt-6 mb-12">
                <div className="section-base">
                    <code className="label-style">variant</code>
                    <ul className="list-style">
                        <li>primary</li>
                        <li>secondary</li>
                        <li>ghost</li>
                    </ul>
                    <p>That's it, three kinds. It's a couple of lines to add a new one, go for it.</p>
                </div>

                <div className="section-base">
                    <code className="label-style">size</code>
                    <ul className="list-style">
                        <li>default</li>
                        <li>small</li>
                        <li>large</li>
                    </ul>
                    <p>Cool, you see the theme. Even easier to add this time.</p>
                </div>

                <div className="section-base">
                    <code className="label-style">rounded</code>
                    <ul className="list-style">
                        <li>default</li>
                        <li>small</li>
                        <li>pill</li>
                        <li>square</li>
                    </ul>
                    <p>This could have been shape and I'm still on the fence.</p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 mt-6 mb-12">
                <div className="section-base">
                    <code className="label-style">iconLeft/iconRight</code>
                    <ul className="list-style">
                        <li>this will get updated, probably a few times</li>
                    </ul>
                    <p>Right now this is mapped to Material Icons, but that could change.</p>
                </div>

                <div className="section-base">
                    <code className="label-style">children</code>
                    <ul className="list-style">
                        <li>literally anything you want</li>
                    </ul>
                    <p>The button component just takes a child - so drop text, another component, this thing 🚀</p>
                </div>
            </div>

            <hr className='hr-fade' />

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
            </div>
        </>
    )
}