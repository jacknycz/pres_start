import React from "react";
import { useId } from "react";

export default function RadioGroup({ name, value, onChange, children, className = "", legend }) {
  const groupId = useId();

  return (
    <fieldset role="radiogroup" aria-labelledby={groupId} className={`flex flex-col gap-2 ${className}`}>
      {legend && <legend id={groupId} className="text-sm font-medium">{legend}</legend>}
      {children.map((child, index) =>
        child.type.displayName === "Radio"
          ? React.cloneElement(child, {
              key: index,
              name,
              checked: child.props.value === value,
              onChange: () => onChange(child.props.value),
            })
          : null
      )}
    </fieldset>
  );
} 