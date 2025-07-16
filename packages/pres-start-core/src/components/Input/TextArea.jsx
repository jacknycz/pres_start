import React, { useState } from "react";
import classNames from "classnames";

export default function TextArea({ ...props }) {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    supportText,
    error = false,
    required = false,
    iconLeft,
    iconRight,
    className,
    rows = 4,
    maxLength,
    variant = "default",
    id,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const inputId = id || name;
  const errorId = `${inputId}-error`;
  const hasErrorMessage = error && supportText;
  const rootClass = variant === "custom" ? classNames("pres-textarea", className) : classNames("pres-textarea w-full", className);

  return (
    <div className={rootClass}>
      {label && (
        <label htmlFor={inputId} className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div
        className={classNames(
          "relative rounded-lg border transition bg-white dark:bg-gray-800",
          isFocused && "ring-2",
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus-within:ring-blue-500"
        )}
      >
        {iconLeft && <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">{iconLeft}</span>}

        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          aria-invalid={error}
          aria-describedby={hasErrorMessage ? errorId : undefined}
          className={classNames(
            "w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white p-3 resize-y rounded-lg",
            iconRight && "pr-10",
            iconLeft && "pl-10"
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          {...rest}
        />

        {iconRight && <span className="absolute right-3 top-3 text-gray-500 dark:text-gray-400">{iconRight}</span>}
      </div>

      {(supportText || maxLength) && (
        <div className="flex justify-between mt-1">
          {supportText && (
            <p id={hasErrorMessage ? errorId : undefined} className={error ? "text-red-500" : "text-gray-500 dark:text-gray-400"}>
              {supportText}
            </p>
          )}
          {maxLength && (
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">{value ? value.length : 0}/{maxLength}</p>
          )}
        </div>
      )}
    </div>
  );
}