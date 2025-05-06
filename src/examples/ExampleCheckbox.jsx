import { useState } from "react";
import Checkbox from "../components/Checkbox/Checkbox";

export default function ExampleCheckbox() {
    const [selectedColor, setSelectedColor] = useState("blue");
    const [selectedTools, setSelectedTools] = useState(["react"]);

    const handleToolToggle = (value) => {
        setSelectedTools((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="space-y-6">
            <Checkbox
                name="tools"
                value="react"
                checked={selectedTools.includes("react")}
                onChange={() => handleToolToggle("react")}
            >
                React
            </Checkbox>
        </div>
    );
}
