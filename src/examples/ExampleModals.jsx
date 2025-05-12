import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ModalExample() {
    const [open, setOpen] = useState(false);

    const generateCheckboxCode = () => {
        return `const [open, setOpen] = useState(false);

<Button
    onClick={() => setOpen(true)}
    variant="ghost"
>
    Open Modal
</Button>

<Modal
    isOpen={open}
    onClose={() => setOpen(false)}
    header="Modal Title"
>
    /* This is all the modal content - put whatever you want. */
    /* Seriously. Put a website in an iframe. */
    /* Put a video. Put a form. */
    /* Put a button. Put a button inside a button. */

    <p className="text-gray-700 dark:text-gray-300">This is flexible modal content.</p>

    <div className="mt-6 flex justify-end">
        <Button
            onClick={() => setOpen(false)}
            variant="destructive"
        >
            Close
        </Button>
    </div>
</Modal>`;
    };

    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Modal</h2>
            </div>

            <div className="component-wrapper">
                <Button
                    onClick={() => setOpen(true)}
                    variant="ghost"
                >
                    Open Modal
                </Button>

                <Modal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    header="Modal Title"
                >
                    <p className="text-gray-700 dark:text-gray-300">This is flexible modal content.</p>
                    <div className="mt-6 flex justify-end">
                        <Button
                            onClick={() => setOpen(false)}
                            variant="destructive"
                        >
                            Close
                        </Button>
                    </div>
                </Modal>
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
                            <td className="props-cell"><code className="label-style">header</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">string</code>
                                <span>The text displayed as the header of the modal. Just that - text.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">isOpen</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">boolean</code>
                                <span>Sets if the modal is open. It's the thingy we toggle.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">onClose</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">callback function</code>
                                <span>Toggles the modal by default. You can be clever here, it's your design system.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
