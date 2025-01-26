import React from 'react'

const Radio = ({children, type, value, checked, onChange}) => {
  return (
    <label>
    <input
      type={type}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {children}
  </label>
  )
}

export default Radio