import React from 'react'

const FormLabel = ({ children, required }) => {
  return (
    <span className='text-sm font-semibold'>
      {children}
      {required && <i className='text-red-600'>*</i>}
    </span>
  )
}

export default FormLabel
