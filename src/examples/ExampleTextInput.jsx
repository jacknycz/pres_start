// import React from "react";
// import TextInput from "../components/Input/TextInput";

// export default function ExampleTextInput() {
//   return (
//     <TextInput
//       label="Button Text"
//       name="buttonText"
//       placeholder="type a different message"
//     />
//   );
// }



// Usage example:

import React, { useState } from "react";
import TextInput from "../components/Input/TextInput";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ExampleTextInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const generateRadioGroupCode = () => {
    return `<TextInput
  label="Email"
  name="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  iconLeft={<EmailIcon fontSize="small" />}
  supportText="We'll never share your email."
  required
/>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Text Input</h2>
      </div>

      <div className="component-wrapper">
        <TextInput
          label="Email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          iconLeft={<EmailIcon fontSize="small" />}
          supportText="We'll never share your email."
          required
        />

        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconRight={<VisibilityOffIcon fontSize="small" />}
          error={!password}
          supportText={!password ? "Password is required" : ""}
          required
          maxLength={20}
        />
      </div>

      <div className="component-code">
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {generateRadioGroupCode()}
        </SyntaxHighlighter>
      </div>

      <div className="props-wrapper">
        <h3 className='text-2xl mb-6'>Props</h3>
        <table className="w-full border rounded-lg table-auto props">
          <thead className="props-header">
            <tr>
              <th className="props-cell">Name</th>
              <th className="props-cell">Details</th>
              <th className="props-cell">Default</th>
            </tr>
          </thead>

          <tbody>
            <tr className="props-row">
              <td className="props-cell"><code className="label-style">header</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>The text displayed as the header of the modal. Just that - text.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">id</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>A unique identifier for both the RadioGroup and the Radio components.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">onClose</code></td>
              <td className="props-cell props-details">
                <code className="label-style">callback function</code>
                <span>Toggles the modal by default. You can be clever here, it's your design system.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}