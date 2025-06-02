import React from 'react';
import classNames from 'classnames';
import { PlayArrow, ArrowForward } from '@mui/icons-material';

const baseStyles = 'inline-flex items-center justify-center font-medium transition cursor-pointer';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'disabled';
type ButtonSize = 'default' | 'small' | 'large';
type ButtonRounded = 'default' | 'small' | 'pill' | 'square';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-p-500 text-white hover:bg-p-40 transition duration-300 ease-in-out dark:bg-p-60',
    secondary: 'bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out dark:bg-gray-60',
    ghost: 'bg-transparent ring-2 ring-inset ring-p-500 text-p-500 hover:bg-p-90 dark:hover:bg-p-500 transition duration-300 ease-in-out dark:text-white',
    destructive: 'bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out dark:bg-red-600',
    disabled: 'bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800',
};

const roundedStyles: Record<ButtonRounded, string> = {
    default: 'rounded-lg',
    small: 'rounded-sm',
    pill: 'rounded-full',
    square: 'rounded-none',
};
const sizeStyles: Record<ButtonSize, string> = {
    default: 'h-auto px-4 py-2 text-base min-h-[40px]',
    small: 'h-auto px-2 py-1 text-sm min-h-[32px]',
    large: 'h-auto px-6 py-3 text-lg min-h-[48px]',
};

const Button: React.FC<ButtonProps> = ({
    iconLeft,
    iconRight,
    variant = 'primary',
    size = 'default',
    rounded = 'default',
    className,
    disabled = false,
    onClick,
    children,
    ...props
}) => {
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
};

export default Button;
