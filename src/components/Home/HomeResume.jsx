import Link from 'next/link'
import React from 'react'

const HomeResume = () => {
  return (
    <div className='text-center max-w-3xl text-slate-800'>
      <p className='text-lg'>
        Soy <strong>Desarrollador y Diseñador Web y UI</strong> de Honduras.
      </p>
      <p>
        Este es mi blog personal donde te compartiré sobre temas de tecnología, y también, experiencias personales, esperando que pueda ayudarte.
        Si quieres que escriba sobre un tema, puedes <Link className='text-blue-500 border-b border-b-blue-500' href='#contact'>Contactarme</Link> y decírmelo.
      </p>
    </div>
  )
}

export default HomeResume
