import React from 'react';
import classNames from 'classnames';

const baseStyles = 'inline-flex items-center justify-center font-medium transition cursor-pointer';

type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'disabled';
type IconButtonSize = 'small' | 'default' | 'medium' | 'large';
type IconButtonShape = 'default' | 'small' | 'circle' | 'square';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    shape?: IconButtonShape;
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

const variantStyles: Record<IconButtonVariant, string> = {
    primary: 'bg-p-500 text-white hover:bg-p-40 transition duration-300 ease-in-out dark:bg-p-60',
    secondary: 'bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-300 ease-in-out dark:bg-gray-60',
    ghost: 'bg-transparent ring-2 ring-inset ring-p-500 text-p-500 hover:bg-p-90 dark:hover:bg-p-500 transition duration-300 ease-in-out dark:text-white',
    destructive: 'bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out dark:bg-red-600',
    disabled: 'bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800',
};

const shapeStyles: Record<IconButtonShape, string> = {
    default: 'rounded-lg',
    small: 'rounded-sm',
    circle: 'rounded-full',
    square: 'rounded-none',
};

const sizeStyles: Record<IconButtonSize, string> = {
    small: 'h-[32px] w-[32px] justify-center items-center touch-none focus:outline-none active:outline-none md:touch-target touch-target:md:w-[44px] touch-target:md:h-[44px] touch-target:md:rounded-full',
    default: 'h-[40px] w-[40px] justify-center items-center touch-none focus:outline-none active:outline-none md:touch-target touch-target:md:w-[44px] touch-target:md:h-[44px] touch-target:md:rounded-full',
    medium: 'h-[40px] w-[40px] justify-center items-center touch-none focus:outline-none active:outline-none md:touch-target touch-target:md:w-[44px] touch-target:md:h-[44px] touch-target:md:rounded-full',
    large: 'h-[48px] w-[48px] justify-center items-center touch-none focus:outline-none active:outline-none md:touch-target touch-target:md:w-[44px] touch-target:md:h-[44px] touch-target:md:rounded-full',
};

const IconButton: React.FC<IconButtonProps> = ({
    variant = 'primary',
    size = 'default',
    shape = 'default',
    icon,
    className,
    disabled = false,
    onClick,
    children,
    ...props
}) => {
    return (
        <button
            className={classNames(
                shapeStyles[shape],
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
            aria-disabled={disabled}
            {...props}
        >
            {icon ? icon : children ? children : 'NA'}
        </button>
    );
};

export default IconButton;

