import React, { useEffect } from 'react';
import classNames from 'classnames';
import { X } from '@mui/icons-material';

const variantStyles = {
  success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900 dark:border-green-700 dark:text-green-100',
  error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900 dark:border-red-700 dark:text-red-100',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-100',
  info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-100',
  default: 'bg-white border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100'
};

const iconStyles = {
  success: 'text-green-400',
  error: 'text-red-400',
  warning: 'text-yellow-400',
  info: 'text-blue-400',
  default: 'text-gray-400'
};

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
  onDismiss?: () => void;
  autoDismiss?: boolean;
  autoDismissTimeout?: number;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  variant = 'default',
  onDismiss,
  autoDismiss = true,
  autoDismissTimeout = 5000,
  className,
  ...props
}) => {
  useEffect(() => {
    if (autoDismiss && onDismiss) {
      const timer = setTimeout(() => {
        onDismiss();
      }, autoDismissTimeout);
      
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissTimeout, onDismiss]);

  return (
    <div
      role="alert"
      className={classNames(
        'flex items-start p-4 border rounded-lg shadow-lg max-w-sm',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 mt-0.5">
        <div className={classNames('w-5 h-5', iconStyles[variant])}>
          {variant === 'success' && (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          {variant === 'error' && (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
          {variant === 'warning' && (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          )}
          {variant === 'info' && (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10V9z" clipRule="evenodd" />
            </svg>
          )}
          {variant === 'default' && (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10V9z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-4 -mx-1.5 -my-1.5 p-1.5 inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-label="Dismiss"
        >
          <span className="sr-only">Dismiss</span>
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
