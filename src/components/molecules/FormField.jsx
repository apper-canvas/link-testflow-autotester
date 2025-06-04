import React from 'react'
import Input from '../atoms/Input'
import Select from '../atoms/Select'

const FormField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  required = false,
  options, // For select type
  ...props
}) => {
  if (type === 'select') {
    return (
      <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        error={error}
        required={required}
        {...props}
      />
    )
  }

  return (
    <Input
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      error={error}
      required={required}
      {...props}
    />
  )
}

export default FormField