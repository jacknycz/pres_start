import React from 'react';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

const variantStyles: Record<'primary' | 'secondary' | 'danger' | 'success', string> = {
  primary: 'text-p-600 hover:text-p-700 dark:text-p-400 dark:hover:text-p-300',
  secondary: 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100',
  danger: 'text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400',
  success: 'text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400'
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  className?: string;
  children?: React.ReactNode;
  isExternal?: boolean;
  [key: string]: any;
}

export const Link: React.FC<LinkProps> = ({
  to,
  href,
  variant = 'primary',
  className,
  children,
  isExternal = false,
  ...props
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 ease-in-out';
  const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  if (to) {
    return (
      <RouterLink
        to={to}
        className={classNames(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </RouterLink>
    );
  };

  return (
    <a
      href={href}
      className={classNames(baseStyles, variantStyles[variant], className)}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;
