import React from 'react'

const Loader = () => {
  return (
    <div className='w-full grid place-items-center leading-none p-12'>
      <img className='w-10 animate-spin' src="/images/loading.png" alt="loading" />
    </div>
  )
}

export default Loader