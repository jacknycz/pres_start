import React from "react";
import { useEffect, useState } from "react";

export default function TabPanel({ children, labelledBy, id, className, variant = 'default', ...props }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const panelClass = variant === 'custom'
    ? className
    : `transition duration-300 ease-out transform
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        focus:outline-none
        ${className}`;

  return (
    <div
      id={id}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={labelledBy}
      className={panelClass}
      {...props}
    >
      {children}
    </div>
  );
} 