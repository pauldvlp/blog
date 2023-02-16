import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Paul Barahona</title>
        <meta name='description' content='Bienvenido a mi blog' />
      </Head>
      <Header />
      <main className='min-h-screen max-w-5xl mx-auto'>
        {children}
      </main>
      <Footer />
    </>
  )
}