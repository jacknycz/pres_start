import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  value: propValue,
  onChange,
  className,
  label,
  disabled = false,
  ...props
}) {
  const [value, setValue] = useState(propValue || min);

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleChange = (e) => {
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
            'w-full h-2 appearance-none bg-gray-200 dark:bg-gray-700 rounded-full outline-none',
            'transition-opacity',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
            'range-thumb:appearance-none range-thumb:w-5 range-thumb:h-5',
            'range-thumb:bg-white range-thumb:rounded-full range-thumb:border-2',
            'range-thumb:border-p-500 range-thumb:shadow-md',
            'range-thumb:focus:ring-2 range-thumb:focus:ring-p-500'
          )}
          style={{
            background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`
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
