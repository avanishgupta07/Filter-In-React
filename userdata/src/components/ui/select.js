import React from 'react';

export const Select = ({ onValueChange, children }) => {
  return (
    <select onChange={e => onValueChange(e.target.value)} className="border rounded p-2">
      {children}
    </select>
  );
};

export const SelectTrigger = ({ children }) => {
  return <>{children}</>;
};

export const SelectContent = ({ children }) => {
  return <>{children}</>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

export const SelectValue = ({ placeholder }) => {
  return <option value="">{placeholder}</option>;
};
