import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isInTop, setIsInTop] = useState(true)

  useEffect(
    () => {
      const handleScroll = () => setIsInTop(window.scrollY < 20)
      window.addEventListener('scroll', handleScroll)
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    []
  )

  return (
    <header className={`sticky top-0 backdrop-blur-lg bg-white/70 border-b duration-300 ${isInTop ? 'border-b-transparent' : 'border-b-slate-100'}`}>
      <div className='flex h-12 justify-between items-center max-w-5xl mx-auto px-4 sm:h-20 sm:px-8'>
        <Link className='font-semibold text-lg' href={'/'}>
          Paul.
        </Link>

        <ul className='flex gap-2 items-center'>
          <li>
            <Link href={'/#blog'} className='text-sm text-slate-600 hover:text-slate-800 hover:border-b font-bold'>
              Blog
            </Link>
          </li>
          <li>
            <Link href={'/#contact'} className='text-sm text-slate-600 hover:text-slate-800 hover:border-b font-bold'>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
