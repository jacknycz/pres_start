import React from "react"
import { useState } from 'react'
import classNames from "classnames"

const baseStyles = 'inline-flex items-center justify-center font-medium text-sm py-0.5 px-2';

const typeStyles = {
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
    primary: 'bg-p-50 text-white',
    secondary: 'bg-gray-500 text-white',
    ghost: 'bg-transparent text-p-50 dark:text-white border border-p-50',
}

const shapeStyles = {
    default: 'rounded',
    pill: 'rounded-full',
    square: 'rounded-none',
};

function Badge({
    icon,
    variant = 'info',
    shape = 'default',
    className,
    children,
    ...rest
}) {
    return (
        <div
            className={classNames(
                baseStyles,
                typeStyles[variant],
                shapeStyles[shape],
                className
            )}
            {...rest}
        >
            {icon && (
                <span className="mr-1 -ml-1 flex">
                    {React.cloneElement(icon, {
                        sx: { fontSize: 16, width: 16, height: 16, ...(icon.props.sx || {}) }
                    })}
                </span>
            )}
            {children}
        </div>
    )
}

export default Badge;