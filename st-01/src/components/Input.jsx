import React from 'react'

const Input = ({children, type, value, onChange, placeholder}) => {

  return (
    <label className="input-wrapper">
    {children}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </label>
  )
}

export default Input