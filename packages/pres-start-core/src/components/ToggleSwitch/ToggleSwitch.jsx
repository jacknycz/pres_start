import React from "react";

export default function ToggleSwitch({
    checked,
    onChange,
    name,
    value,
    children,
    disabled = false,
    className,
    variant = 'default',
    ...props
}) {
    const id = `${name}-${value}`;

    const labelClass = variant === 'custom'
        ? className || ''
        : `flex items-center gap-3 text-sm px-1 py-2 min-h-[44px] rounded cursor-pointer select-none transition
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${className || ""}`;

    return (
        <label
            htmlFor={id}
            className={labelClass}
            {...props}
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
                role="switch"
                aria-checked={checked}
            />

            {/* Switch */}
            <div
                className={`w-10 h-6 rounded-full relative shrink-0 transition-colors
          ${checked ? "bg-p-500" : "bg-gray-300"}
          ${disabled ? "bg-gray-200 dark:bg-gray-700" : ""}
          peer-focus:ring-2 ring-p-70`}
            >
                <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform
            ${checked ? "translate-x-4" : "translate-x-0"}
          `}
                />
            </div>

            <span className="text-gray-800 dark:text-gray-200">{children}</span>
        </label>
    );
} 