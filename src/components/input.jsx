import React from 'react';

const Input = ({ label, name, defaultValue, type, required }) => (
  <label htmlFor={name} className='flex flex-col my-3'>
    <span>{label}</span>
    <input
      required={required}
      type={type}
      name={name}
      className="p-2 border border-green-200 focus:outline-none focus:border-green-800 rounded-md shadow-sm"
      defaultValue={defaultValue}
    />
  </label>
);

export default Input;