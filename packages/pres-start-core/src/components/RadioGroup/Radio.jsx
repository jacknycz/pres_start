import React from "react";

export default function Radio({
  value,
  checked,
  onChange,
  name,
  id,
  children,
  disabled = false,
  className,
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 text-sm px-1 py-2 min-h-[44px] rounded cursor-pointer select-none transition
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className || ""}
      `}
    >
      <input
        type="radio"
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
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
          ${checked ? "border-p-500" : "border-p-300"}
          ${disabled ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}
          peer-focus:ring-2 ring-blue-300`}
      >
        {checked && !disabled && <div className="w-2.5 h-2.5 bg-p-500 rounded-full" />}
      </div>
      <span className="text-gray-800 dark:text-gray-200">{children}</span>
    </label>
  );
}

Radio.displayName = "Radio"; 