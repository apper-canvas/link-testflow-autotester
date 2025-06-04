import React from 'react'

const Input = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
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
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
          error ? 'border-red-500' : 'border-surface-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default Input