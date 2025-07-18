import React from "react";
import { useId } from "react";

export default function RadioGroup({ name, value, onChange, children, className = "", legend, variant = 'default', ...props }) {
  const groupId = useId();

  const groupClass = variant === 'custom' ? className : `flex flex-col gap-2 ${className}`;

  return (
    <fieldset role="radiogroup" aria-labelledby={groupId} className={groupClass} {...props}>
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