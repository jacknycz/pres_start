import React from "react";
import classNames from "classnames";

export default function TextInput({ ...props }) {
  const {
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    supportText,
    error = false,
    required = false,
    disabled = false,
    iconLeft,
    iconRight,
    className,
    maxLength,
    id,
    variant = "default",
    ...rest
  } = props;

  const inputId = id || name;
  const errorId = `${inputId}-error`;
  const hasErrorMessage = error && supportText;
  const rootClass = variant === "custom" ? classNames("pres-textinput", className) : classNames("pres-textinput w-full", className);

  return (
    <div className={rootClass}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div
        className={classNames(
          "relative flex items-center gap-2 rounded-lg border px-3 py-2 transition bg-white dark:bg-gray-800 min-h-[40px]",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-text",
          error
            ? "border-red-500 ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500"
        )}
      >
        {iconLeft && <span className="text-gray-500 dark:text-gray-400">{iconLeft}</span>}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={!disabled ? onChange : undefined}
          placeholder={placeholder}
          maxLength={maxLength}
          aria-invalid={error}
          aria-describedby={hasErrorMessage ? errorId : undefined}
          className={classNames(
            "w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white",
            iconRight && "pr-6",
            iconLeft && "pl-1"
          )}
          required={required}
          disabled={disabled}
          {...rest}
        />

        {iconRight && <span className="absolute right-3 text-gray-500 dark:text-gray-400 pointer-events-none">{iconRight}</span>}
      </div>

      {(supportText || maxLength) && (
        <div className="flex justify-between mt-1 text-sm">
          {supportText && (
            <p id={hasErrorMessage ? errorId : undefined} className={error ? "text-red-500" : "text-gray-500 dark:text-gray-400"}>
              {supportText}
            </p>
          )}
          {maxLength && value !== undefined && (
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">{value.length}/{maxLength}</p>
          )}
        </div>
      )}
    </div>
  );
}
