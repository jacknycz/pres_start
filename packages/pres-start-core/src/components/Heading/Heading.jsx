import React from 'react';
import classNames from 'classnames';

const variantStyles = {
  h1: 'mb-6 text-4xl font-bold',
  h2: 'mb-5 text-3xl font-bold',
  h3: 'mb-4 text-2xl font-semibold',
  h4: 'mb-3 text-xl font-semibold',
  h5: 'mb-2 text-lg font-medium',
  h6: 'mb-2 text-base font-medium',
  custom: ''
};

export function Heading({
  as: Component = 'h2',
  size,
  className,
  children,
  noMargin = false,
  variant = 'default',
  ...props
}) {
  const headingSize = size || Component;
  
  const headingClass = variant === 'custom'
    ? classNames('pres-heading', className)
    : classNames(
        'pres-heading text-gray-900 dark:text-white',
        !noMargin && variantStyles[headingSize],
        className
      );

  return (
    <Component
      className={headingClass}
      {...props}
    >
      {children}
    </Component>
  );
} 