import React from 'react';
import classNames from 'classnames';

const sizeStyles: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium'
};

const marginStyles: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', string> = {
  h1: 'mb-6',
  h2: 'mb-5',
  h3: 'mb-4',
  h4: 'mb-3',
  h5: 'mb-2',
  h6: 'mb-2'
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  noMargin?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size,
  className,
  children,
  noMargin = false,
  ...props
}) => {
  const headingSize = size || Component;
  
  return (
    <Component
      className={classNames(
        'text-gray-900 dark:text-white',
        sizeStyles[headingSize],
        !noMargin && marginStyles[headingSize],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
