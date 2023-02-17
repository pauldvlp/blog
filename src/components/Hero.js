import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className='min-h-[calc(100vh_-_3rem)] sm:min-h-[calc(100vh_-_5rem)] grid justify-items-center content-center gap-6 p-8 max-w-4xl mx-auto'>
      <h1 className='font-semibold sm:text-lg'>Paul Barahona.</h1>
      <p className='font-bold text-3xl sm:text-6xl text-center tracking-tighter leading-tight'>
        El aprendizaje y la enseñanza son los mejores regalos que puedes dar y recibir.
      </p>
      <div className='text-center'>
        <p>
          Soy <strong>Desarrollador y Diseñador Web y UI</strong> de Honduras.
        </p>
        <p>
          Siempre especializandome en <strong>JavaScript</strong> y <strong>Figma</strong>, y esperando poder ayudarte con mis conocimientos.
        </p>
      </div>
        <Link href={'/#contact'} className='bg-blue-600 text-white px-6 h-12 rounded-full grid place-items-center shadow-xl shadow-blue-100 active:shadow-none active:scale-90 duration-300 text-sm font-semibold'>Contáctame</Link>
    </section>
  )
}