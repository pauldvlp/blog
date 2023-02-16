import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0 backdrop-blur-lg bg-white/70'>
      <div className='flex h-12 justify-between items-center max-w-5xl mx-auto px-4 sm:h-20 sm:px-8'>
        <Link className='font-semibold' href={'/'}>
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
