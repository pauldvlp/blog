import React from 'react'

export default function Hero() {
  return (
    <section className='min-h-[calc(100vh_-_3rem)] sm:min-h-[calc(100vh_-_5rem)] grid justify-items-center content-center gap-6 p-8 max-w-prose mx-auto'>
      <h1 className='font-semibold sm:text-xl'>Paul Barahona</h1>
      <p className='font-semibold text-3xl sm:text-5xl text-center tracking-tighter leading-tight'>
        El aprendizaje y la enseñanza son los mejores regalos que puedes dar y recibir.
      </p>
      <div className='text-center'>
        <p>
          Soy <strong>Desarrollador y Diseñador Web y UI</strong> de Honduras.
        </p>
        <p>
          Siempre especializando en <strong>JavaScript</strong> y <strong>Figma</strong>, y esperando poder ayudarte con mis conocimientos.
        </p>
      </div>
    </section>
  )
}