import React, { useState, useEffect } from 'react';
import classNames from 'classnames';


interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  label?: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value: propValue,
  onChange,
  className,
  label,
  disabled = false,
  ...props
}) => {
  const [value, setValue] = useState(propValue || min);

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className={classNames('w-full', className)}>
      {label && (
        <div className="flex justify-between mb-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
          </label>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {value}
          </span>
        </div>
      )}
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={classNames(
            'range-slider w-full h-2 appearance-none bg-gray-200 dark:bg-gray-700 rounded-full outline-none',
            'transition-all duration-200',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
            className
          )}
          style={{
            ...({
              '--progress': `${progress}%`,
              '--track-bg': 'var(--color-gray-200, #e5e7eb)',
              '--track-bg-dark': 'var(--color-gray-700, #374151)',
              '--thumb-size': '1.25rem',
              '--thumb-bg': 'white',
              '--thumb-border': 'var(--color-p-500, #4f46e5)',
              '--thumb-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            } as Record<string, string>),
          }}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-disabled={disabled}
          {...props}
        />
      </div>
    </div>
  );
}
