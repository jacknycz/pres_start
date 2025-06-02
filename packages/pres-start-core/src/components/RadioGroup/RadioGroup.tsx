import React from "react";
import { useId } from "react";

interface RadioGroupProps {
  name: string;
  value: string | number;
  onChange: (value: string | number) => void;
  children: React.ReactElement[];
  className?: string;
  legend?: React.ReactNode;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, value, onChange, children, className = "", legend }) => {
  const groupId = useId();

  return (
    <fieldset role="radiogroup" aria-labelledby={groupId} className={`flex flex-col gap-2 ${className}`}>
      {legend && <legend id={groupId} className="text-sm font-medium">{legend}</legend>}
      {children.map((child, index) => {
        if (React.isValidElement(child) && child.type && (child.type as any).displayName === "Radio") {
          const radioChild = child as React.ReactElement<any>;
          return React.cloneElement(radioChild, {
            key: index,
            name,
            checked: radioChild.props.value === value,
            onChange: () => onChange(radioChild.props.value),
          });
        }
        return null;
      })}
    </fieldset>
  );
}
