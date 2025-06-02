import React from 'react';
import classNames from 'classnames';
import { Close } from '@mui/icons-material';

const variantStyles = {
  primary: 'bg-p-100 text-p-800 dark:bg-p-900/30 dark:text-p-200',
  secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200',
  error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  lg: 'text-base px-3 py-1.5'
};

export function Tag({
  children,
  variant = 'primary',
  size = 'md',
  onRemove,
  className,
  ...props
}) {
  return (
    <div
      className={classNames(
        'inline-flex items-center font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        onRemove ? 'pr-2' : '',
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1.5 -mr-1 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20"
          aria-label="Remove"
        >
          <Close className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
