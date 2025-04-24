import React from "react";
import classNames from "classnames";

export default function TextInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  supportText,
  error = false,
  iconLeft,
  iconRight,
  className,
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
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500"
        )}
      >
        {iconLeft && (
          <span className="mr-2 text-gray-500 dark:text-gray-400">{iconLeft}</span>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames(
            "w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white",
            iconRight && "pr-8",
            iconLeft && "pl-1"
          )}
          {...props}
        />
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

//
// Usage example:
//
// import React from "react";
// import TextInput from "./components/TextInput";
// import EmailIcon from "@mui/icons-material/Email";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// function DemoForm() {
//   return (
//     <div className="max-w-md mx-auto p-4 space-y-6">
//       <TextInput
//         label="Email"
//         name="email"
//         placeholder="you@example.com"
//         value=""
//         onChange={() => {}}
//         iconLeft={<EmailIcon fontSize="small" />}
//         supportText="We'll never share your email."
//       />

//       <TextInput
//         label="Password"
//         name="password"
//         type="password"
//         placeholder="••••••••"
//         iconRight={<VisibilityOffIcon fontSize="small" />}
//         error={true}
//         supportText="Password is required"
//       />
//     </div>
//   );
// }
