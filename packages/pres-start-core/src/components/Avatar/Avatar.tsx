import React from "react"
import { useState } from 'react'
import classNames from "classnames"
import Person from '@mui/icons-material/Person';

const baseStyles = `
    flex
    rounded-full
    overflow-hidden
    bg-p-500
    items-center
    justify-center
    text-p-5000
    font-medium
    text-white
    border-p-500
`.trim();

type AvatarSize = 'large' | 'default' | 'small';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    children?: React.ReactNode;
    className?: string;
    size?: AvatarSize;
}

const sizeStyles: Record<AvatarSize, string> = {
    large: 'h-16 w-16 text-2xl',
    default: 'h-12 w-12 text-xl',
    small: 'h-8 w-8 text-sm',
};

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    children,
    className,
    size = 'default',
    ...props
}) => {
    return (
        <div
            className={classNames(
                baseStyles,
                sizeStyles[size],
                src && (size === 'large' ? 'border-4 border-p-500' : 'border-3 border-p-500'),
                className)}
            {...props}
        >
            {src ? (
                <img src={src} alt={alt} />
            ) : children ? (
                children
            ) : size === 'large' ? (
                <Person sx={{ fontSize: 64, width: 64, height: 64, color: 'white' }} />
            ) : size === 'default' ? (
                <Person sx={{ fontSize: 48, width: 48, height: 48, color: 'white' }} />
            ) : size === 'small' ? (
                <Person sx={{ fontSize: 32, width: 32, height: 32, color: 'white' }} />
            ) : null}
        </div>
    )
};

export default Avatar;