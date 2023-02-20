import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import ScrollTop from '../Elements/ScrollTop'
import Contact from './Contact'
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
      <main className='max-w-5xl mx-auto'>
        {children}
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}