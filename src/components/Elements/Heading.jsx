import React from 'react'

const Heading = ({ children }) => {
  return (
    <h2 className='font-bold text-4xl sm:text-6xl text-center tracking-tighter leading-tight selection:bg-black selection:text-white'>
      {children}
    </h2>
  )
}

export default Heading
