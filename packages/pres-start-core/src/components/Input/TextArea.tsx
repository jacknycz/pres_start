import React, { ReactNode, ChangeEvent, useState } from 'react';
import classNames from "classnames";

interface TextAreaProps {
  label?: ReactNode;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  supportText?: ReactNode;
  error?: boolean;
  required?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  rows?: number;
  maxLength?: number;
  id?: string;
  [key: string]: any;
}

export default function TextArea({
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
  ...props
}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const id = props.id || name;
  const errorId = `${id}-error`;
  const hasErrorMessage = error && supportText;

  return (
    <div className={classNames("w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div
        className={classNames(
          "relative rounded-lg border transition",
          "bg-white dark:bg-gray-800",
          isFocused && "ring-2",
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus-within:ring-blue-500"
        )}
      >
        {iconLeft && (
          <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">
            {iconLeft}
          </span>
        )}
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={hasErrorMessage ? errorId : undefined}
          className={classNames(
            "w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white p-3 resize-y rounded-lg",
            iconRight && "pr-10",
            iconLeft && "pl-10"
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          {...props}
        />
        {iconRight && (
          <span className="absolute right-3 top-3 text-gray-500 dark:text-gray-400">
            {iconRight}
          </span>
        )}
      </div>

      {supportText && (
        <div className="flex justify-between mt-1">
          <p
            id={hasErrorMessage ? errorId : undefined}
            className={classNames(
              "text-sm",
              error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {supportText}
          </p>
          {maxLength && (
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
              {value ? value.length : 0}/{maxLength}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

//
// Usage example:
//
// import React, { useState } from "react";
// import TextArea from "./components/TextArea";
// import CommentIcon from "@mui/icons-material/Comment";
// import EditIcon from "@mui/icons-material/Edit";

// function DemoForm() {
//   const [feedback, setFeedback] = useState("");
//   
//   return (
//     <div className="max-w-md mx-auto p-4 space-y-6">
//       <TextArea
//         label="Your Feedback"
//         name="feedback"
//         placeholder="Tell us what you think..."
//         value={feedback}
//         onChange={(e) => setFeedback(e.target.value)}
//         iconLeft={<CommentIcon fontSize="small" />}
//         iconRight={<EditIcon fontSize="small" />}
//         supportText="Your feedback helps us improve."
//         rows={5}
//         maxLength={500}
//       />
//     </div>
//   );
// }