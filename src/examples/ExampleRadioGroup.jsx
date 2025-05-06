import { useState } from "react";
import Radio from "../components/RadioGroup/Radio";
import RadioGroup from "../components/RadioGroup/RadioGroup";

export default function ExampleRadioGroup() {
  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <div className="space-y-6">
      <RadioGroup name="color" value={selectedColor} onChange={setSelectedColor}>
        <Radio value="blue">Blue</Radio>
        <Radio value="red">Red</Radio>
        <Radio value="green">Green</Radio>
      </RadioGroup>
    </div>
  );
}
