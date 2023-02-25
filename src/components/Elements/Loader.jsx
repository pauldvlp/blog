import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full grid place-items-center leading-none p-12'>
      <Image width={40} height={40} className='w-10 animate-spin' src="/images/loading.png" alt="loading" />
    </div>
  )
}

export default Loader