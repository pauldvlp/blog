import React from 'react'

const FormErrorMessage = ({ children }) => {
  return (
    <span className='text-xs text-red-600 font-semibold'>{children}</span>
  )
}

export default FormErrorMessage
