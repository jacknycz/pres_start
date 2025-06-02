import React from "react";
import classNames from "classnames";

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  placeholder = "Select an option",
  supportText,
  error = false,
  iconLeft,
  iconRight,
  className,
  children,
  disabled = false,
  ...props
}) {
  return (
    <div className={classNames("w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <div
        className={classNames(
          "relative flex items-center rounded-lg border px-3 py-2 transition",
          "bg-white dark:bg-gray-800",
          disabled ? "opacity-50 cursor-not-allowed" : "",
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500"
        )}
      >
        {iconLeft && (
          <span className="mr-2 text-gray-500 dark:text-gray-400">
            {iconLeft}
          </span>
        )}

        <select
          id={name}
          name={name}
          value={value}
          onChange={!disabled ? onChange : undefined}
          disabled={disabled}
          className={classNames(
            "w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white",
            iconRight && "pr-8",
            iconLeft && "pl-1"
          )}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {children}
        </select>

        {iconRight && (
          <span className="absolute right-3 text-gray-500 dark:text-gray-400">
            {iconRight}
          </span>
        )}
      </div>

      {supportText && (
        <p
          className={classNames(
            "mt-1 text-sm",
            error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {supportText}
        </p>
      )}
    </div>
  );
}


// Usage example:

// <SelectInput
//   label="Country"
//   name="country"
//   value={selectedCountry}
//   onChange={(e) => setSelectedCountry(e.target.value)}
//   iconRight={<ArrowDropDownIcon fontSize="small" />}
//   supportText="Please select your country"
// >
//   <option value="us">United States</option>
//   <option value="ca">Canada</option>
//   <option value="uk">United Kingdom</option>
// </SelectInput>
