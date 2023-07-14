import React from 'react'

const Input = ({ type = 'text', ...props }) => {
  return (
    <input className='p-4 rounded-md border border-blue-300 focus:outline-blue-600' {...props} />
  )
}

export default Input
