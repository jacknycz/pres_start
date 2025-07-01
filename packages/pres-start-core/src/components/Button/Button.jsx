import React from 'react';
import classNames from 'classnames';
import { PlayArrow, ArrowForward } from '@mui/icons-material';

const baseStyles = 'inline-flex items-center justify-center font-medium transition cursor-pointer';

const variantStyles = {
    primary: 'bg-p-500 text-white hover:bg-p-40 transition duration-300 ease-in-out dark:bg-p-60',
    secondary: 'bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out dark:bg-gray-60',
    ghost: 'bg-transparent ring-2 ring-inset ring-p-500 text-p-500 hover:bg-p-90 dark:hover:bg-p-500 transition duration-300 ease-in-out dark:text-white',
    destructive: 'bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out dark:bg-red-600',
    disabled: 'bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800',
};

const roundedStyles = {
    default: 'rounded-lg',
    small: 'rounded-sm',
    pill: 'rounded-full',
    square: 'rounded-none',
};

const sizeStyles = {
    default: 'h-auto px-4 py-2 text-base min-h-[40px]',
    small: 'h-auto px-2 py-1 text-sm min-h-[32px]',
    large: 'h-auto px-6 py-3 text-lg min-h-[48px]',
};

function Button({
    iconLeft,
    iconRight,
    variant = 'primary',
    size = 'default',
    rounded = 'default',
    className,
    disabled,
    onClick,
    children,
    ...props
}) {
    return (
        <button
            className={classNames(
                roundedStyles[rounded],
                sizeStyles[size],
                disabled ? variantStyles.disabled : variantStyles[variant],
                baseStyles,
                className,
                {
                    'opacity-50 cursor-not-allowed': disabled
                }
            )}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {iconLeft && <span className="mr-2">{iconLeft}</span>}
            {children}
            {iconRight && <span className="ml-2">{iconRight}</span>}
        </button>
    );
}

export default Button; 