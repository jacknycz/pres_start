import React from "react";
import { Check } from "@mui/icons-material";
import classNames from "classnames";

export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  helperText = "",
  className = "",
  variant = "default",
}) {
  const id = `${name}-${value}`;

  const labelClass = variant === "custom"
    ? classNames('pres-checkbox', className)
    : classNames(
        'pres-checkbox flex items-center gap-3 text-sm px-1 py-2 min-h-[44px] rounded cursor-pointer select-none transition',
        {
          'opacity-50 cursor-not-allowed': disabled,
          'hover:bg-gray-50 dark:hover:bg-gray-800': !disabled,
        },
        className
      );

  return (
    <label
      htmlFor={id}
      className={labelClass}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={!disabled ? onChange : undefined}
        disabled={disabled}
        className="peer hidden"
        aria-disabled={disabled}
      />
      <div
        className={`w-5 h-5 border-2 rounded flex items-center justify-center shrink-0
          ${checked ? "border-p-500 bg-p-500" : "border-gray-400 bg-white"}
          ${disabled ? "bg-gray-100 dark:bg-gray-800" : ""}
          peer-focus:ring-2 ring-blue-300`}
      >
        {checked && !disabled && (
          <Check className="!text-white !text-sm leading-none" fontSize="inherit" />
        )}
      </div>
      <div>
        <span className="text-gray-800 dark:text-gray-200">{label}</span>
        {helperText && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
      </div>
    </label>
  );
} 