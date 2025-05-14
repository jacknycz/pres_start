import React, { useState } from "react";
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
  required = false,
  disabled = false,
  iconLeft,
  iconRight,
  className,
  maxLength,
  ...props
}) {
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
          "relative flex items-center rounded-lg border px-3 py-2 transition",
          "bg-white dark:bg-gray-800",
          disabled ? "opacity-50 cursor-not-allowed" : "",
          isFocused && "ring-2",
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus-within:ring-blue-500"
        )}
      >
        {iconLeft && (
          <span className="mr-2 text-gray-500 dark:text-gray-400">{iconLeft}</span>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={!disabled ? onChange : undefined}
          placeholder={placeholder}
          maxLength={maxLength}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={hasErrorMessage ? errorId : undefined}
          className={classNames(
            "w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white",
            iconRight && "pr-8",
            iconLeft && "pl-1"
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          {...props}
        />
        {iconRight && (
          <span className="absolute right-3 text-gray-500 dark:text-gray-400">
            {iconRight}
          </span>
        )}
      </div>

      <div className="flex justify-between mt-1">
        {supportText && (
          <p
            id={hasErrorMessage ? errorId : undefined}
            className={classNames(
              "text-sm",
              error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {supportText}
          </p>
        )}
        
        {maxLength && value !== undefined && (
          <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}

//
// Usage example:
//
// import React, { useState } from "react";
// import TextInput from "./components/TextInput";
// import EmailIcon from "@mui/icons-material/Email";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// function DemoForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   return (
//     <div className="max-w-md mx-auto p-4 space-y-6">
//       <TextInput
//         label="Email"
//         name="email"
//         placeholder="you@example.com"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         iconLeft={<EmailIcon fontSize="small" />}
//         supportText="We'll never share your email."
//         required
//       />

//       <TextInput
//         label="Password"
//         name="password"
//         type="password"
//         placeholder="••••••••"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         iconRight={<VisibilityOffIcon fontSize="small" />}
//         error={!password}
//         supportText={!password ? "Password is required" : ""}
//         required
//         maxLength={20}
//       />
//     </div>
//   );
// }