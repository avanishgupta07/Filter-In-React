import React from 'react';

export const Slider = ({ value, onChange, max, step, className }) => {
  return (
    <input
      type="range"
      min="0"
      max={max}
      step={step}
      value={value}
      onChange={e => onChange([+e.target.value, value[1]])}
      className={`w-full ${className}`}
    />
  );
};
