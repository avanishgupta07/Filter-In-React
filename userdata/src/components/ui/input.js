import React from 'react';

export const Input = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded px-4 py-2 ${className}`}
    />
  );
};
