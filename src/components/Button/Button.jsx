import React from 'react';
import classNames from 'classnames';
import { PlayArrow, ArrowForward } from '@mui/icons-material';

const baseStyles = 'inline-flex items-center justify-center font-medium transition cursor-pointer';

const variantStyles = {
    primary: 'bg-p-50 text-white hover:bg-p-40 transition duration-300 ease-in-out dark:bg-p-60',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out dark:bg-gray-60',
    ghost: 'bg-transparent ring-2 ring-inset ring-p-50 text-p-50 hover:bg-p-90 dark:hover:bg-p-50 transition duration-300 ease-in-out dark:text-white',
    destructive: 'bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out dark:bg-red-600',
};

const roundedStyles = {
    default: 'rounded-lg',
    small: 'rounded-sm',
    pill: 'rounded-full',
    square: 'rounded-none',
};

const sizeStyles = {
    default: 'h-[40px] px-4 py-2 text-base',
    small: 'h-[32px] px-2 py-1 text-sm',
    large: 'h-[48px] px-6 py-3 text-lg',
};

function Button({
    iconLeft,
    iconRight,
    variant = 'primary',
    size = 'default',
    rounded = 'default',
    className,
    children,
    ...props
}) {
    return (
        <button
            className={classNames(
                roundedStyles[rounded], 
                sizeStyles[size], 
                variantStyles[variant], 
                baseStyles, 
                className)}
            {...props}
        >
            {iconLeft && <span className="mr-2 -ml-1">{iconLeft}</span>}
            {children}
            {iconRight && <span className="ml-2 -mr-1">{iconRight}</span>}
        </button>
    );
}

export default Button;
