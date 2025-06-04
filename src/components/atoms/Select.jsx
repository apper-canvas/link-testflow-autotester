import React from 'react'

const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-surface-700 mb-2">
          {label} {required && '*'}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
          error ? 'border-red-500' : 'border-surface-300'
        } ${className}`}
        {...props}
      >
        <option value="" disabled={value !== ""}>
          {placeholder || `Select ${label ? label.toLowerCase() : 'an option'}`}
        </option>
        {options.map(option => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default Select