import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

export default function ModalExample() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Open Modal
            </Button>

            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Modal Title"
            >
                <p className="text-gray-700 dark:text-gray-300">This is flexible modal content.</p>
                <div className="mt-6 flex justify-end">
                    <Button
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Close
                    </Button>
                </div>
            </Modal>
        </>
    );
}
