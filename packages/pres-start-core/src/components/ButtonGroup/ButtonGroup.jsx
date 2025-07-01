import React from 'react';
import classNames from 'classnames';

const baseStyles = 'inline-flex';
const variantStyles = {
  horizontal: 'flex-row',
  vertical: 'flex-col'
};

export function ButtonGroup({
  children,
  variant = 'horizontal',
  className,
  ...props
}) {
  return (
    <div
      className={classNames(
        baseStyles,
        variantStyles[variant],
        variant === 'horizontal' ? 'space-x-0' : 'space-y-0',
        className
      )}
      role="group"
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        const isFirst = index === 0;
        const isLast = index === React.Children.count(children) - 1;
        
        // Get the rounded value from the button's props or use 'default' as fallback
        const roundedValue = child.props.rounded || 'default';
        
        // Map rounded values to their corresponding Tailwind classes
        // These should match the roundedStyles in the Button component
        const roundedMap = {
          default: 'rounded-lg',
          small: 'rounded-sm',
          large: 'rounded-lg',
          pill: 'rounded-full',
          square: 'rounded-none'
        };
        
        const baseRounded = roundedMap[roundedValue] || 'rounded';
        let roundedClass = '';
        
        if (variant === 'horizontal') {
          if (isFirst) {
            // First button - round left corners only
            roundedClass = `rounded-r-none ${baseRounded}-l`;
          } else if (isLast) {
            // Last button - round right corners only
            roundedClass = `rounded-l-none ${baseRounded}-r`;
          } else {
            // Middle buttons - no rounding
            roundedClass = 'rounded-none';
          }
        } else {
          // Vertical variant
          if (isFirst) {
            // First button - round top corners only
            roundedClass = `rounded-b-none ${baseRounded}-t`;
          } else if (isLast) {
            // Last button - round bottom corners only
            roundedClass = `rounded-t-none ${baseRounded}-b`;
          } else {
            // Middle buttons - no rounding
            roundedClass = 'rounded-none';
          }
        }
        
        return React.cloneElement(child, {
          className: classNames(
            child.props.className,
            roundedClass,
            variant === 'horizontal' && !isLast && 'border-r-0',
            variant === 'vertical' && !isLast && 'border-b-0'
          )
        });
      })}
    </div>
  );
} 