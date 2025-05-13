import React from 'react';
import classNames from 'classnames';

const baseStyles = 'inline-flex items-center justify-center font-medium transition cursor-pointer';

const variantStyles = {
    primary: 'bg-p-500 text-white hover:bg-p-40 transition duration-300 ease-in-out dark:bg-p-60',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out dark:bg-gray-60',
    ghost: 'bg-transparent ring-2 ring-inset ring-p-500 text-p-500 hover:bg-p-90 dark:hover:bg-p-500 transition duration-300 ease-in-out dark:text-white',
    destructive: 'bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out dark:bg-red-600',
};

const shapeStyles = {
    default: 'rounded-lg',
    small: 'rounded-sm',
    circle: 'rounded-full',
    square: 'rounded-none',
};

const sizeStyles = {
    small: 'h-[32px] w-[32px] justify-center items-center touch-none focus:outline-none active:outline-none md:touch-target touch-target:md:w-[44px] touch-target:md:h-[44px] touch-target:md:rounded-full',
    default: 'h-[40px] w-[40px] justify-center items-center touch-none focus:outline-none active:outline-none md:touch-target touch-target:md:w-[44px] touch-target:md:h-[44px] touch-target:md:rounded-full',
    large: 'h-[48px] w-[48px] justify-center items-center touch-none focus:outline-none active:outline-none md:touch-target touch-target:md:w-[44px] touch-target:md:h-[44px] touch-target:md:rounded-full',
};

function IconButton({
    variant = 'primary',
    size = 'default',
    shape = 'default',
    icon,
    className,
    disabled,
    onClick,
    ...props
}) {
    return (
        <button
            className={classNames(
                shapeStyles[shape], 
                sizeStyles[size], 
                variantStyles[variant], 
                baseStyles, 
                className)}
            {...props}
        >
            {icon}
        </button>
    );
}

export default IconButton;
