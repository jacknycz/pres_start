import React from 'react';
import classNames from 'classnames';

const sizeStyles = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4'
};

const variantStyles = {
  primary: 'bg-p-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-blue-500'
};

export function Progress({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = false,
  className,
  ...props
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={classNames('w-full', className)}>
      <div className="flex justify-between mb-1">
        {showLabel && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Progress
          </span>
        )}
        {showLabel && (
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div
        className={classNames(
          'w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden',
          sizeStyles[size]
        )}
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin="0"
        aria-valuemax="100"
        {...props}
      >
        <div
          className={classNames(
            'h-full rounded-full transition-all duration-300 ease-out',
            variantStyles[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
