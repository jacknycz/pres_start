import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

const positions = {
  top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
  bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
  left: 'right-full mr-2 top-1/2 -translate-y-1/2',
  right: 'left-full ml-2 top-1/2 -translate-y-1/2'
};

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  isInteractive?: boolean;
  [key: string]: any;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  className,
  isInteractive = false,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };

  const hideTooltip = () => {
    if (isInteractive && isHovered) return;
    
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };
  
  const handleTooltipMouseEnter = () => {
    if (isInteractive) {
      setIsHovered(true);
      showTooltip();
    }
  };
  
  const handleTooltipMouseLeave = () => {
    if (isInteractive) {
      setIsHovered(false);
      hideTooltip();
    }
  };

  return (
    <div className="relative inline-flex">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby={isVisible ? "tooltip" : undefined}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          id="tooltip"
          onMouseEnter={isInteractive ? handleTooltipMouseEnter : undefined}
          onMouseLeave={isInteractive ? handleTooltipMouseLeave : undefined}
          className={classNames(
            'absolute z-50 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded shadow-lg whitespace-nowrap',
            'dark:bg-gray-700',
            positions[position],
            className
          )}
          {...props}
          data-interactive={isInteractive}
        >
          {content}
          <div 
            className={classNames(
              'absolute w-2 h-2 bg-gray-900 dark:bg-gray-700 transform rotate-45',
              {
                'bottom-[-4px] left-1/2 -translate-x-1/2': position === 'top',
                'top-[-4px] left-1/2 -translate-x-1/2': position === 'bottom',
                'right-[-4px] top-1/2 -translate-y-1/2': position === 'left',
                'left-[-4px] top-1/2 -translate-y-1/2': position === 'right',
              }
            )}
          />
        </div>
      )}
    </div>
  );
}
