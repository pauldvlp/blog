import React from 'react'

const ContactError = ({ children }) => {
  return (
    <span className='text-center text-red-500 font-semibold text-sm'>{children}</span>
  )
}

export default ContactError