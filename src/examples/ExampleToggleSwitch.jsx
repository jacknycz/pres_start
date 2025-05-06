import React from "react";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";

export default function ExampleToggleSwitch() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="flex flex-col gap-4">
            <ToggleSwitch
                checked={checked}
                onChange={handleChange}
                name="example"
                value="example"
            >
                Toggle Switch
            </ToggleSwitch>
            <ToggleSwitch
                checked={checked}
                onChange={handleChange}
                name="example"
                value="example"
                disabled
            >
                Disabled Toggle Switch
            </ToggleSwitch>
        </div>
    );
}
