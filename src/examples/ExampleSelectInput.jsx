import React from "react";
import SelectInput from "../components/Input/SelectInput";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function ExampleTextInput() {
  return (
    <SelectInput
      label="Variant"
      name="variant"
      placeholder="Select a variant"
      supportText="This is a support text"
      onChange={() => {}}
      iconRight={<ArrowDropDownIcon fontSize="small" />}
    >
      <option value="primary">Primary</option>
      <option value="secondary">Secondary</option>
      <option value="ghost">Ghost</option>
    </SelectInput>
  );
}
