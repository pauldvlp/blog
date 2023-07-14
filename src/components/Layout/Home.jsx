import Head from 'next/head'
import React from 'react'
import HomeHeading from '../Home/HomeHeading'
import HomeLinks from '../Home/HomeLinks'
import HomeName from '../Home/HomeName'
import HomeResume from '../Home/HomeResume'

const title = 'Paul Barahona | Desarrollo y Diseño Web y UI [I 💛 JavaScript]'
const description = '¿Quieres aprender sobre desarrollo y diseño web?, Bienvenido a mi blog donde puedes encontrar recursos y tips de Programación y Diseño, tanto en el Frontend como en el Backend. Mi proposito es enseñar y aprender, espero que crezcamos juntos.'

export default function Home ({ imageURL }) {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta
          name='description'
          content={description}
        />
        <meta name='keywords' content='paul, barahona, blog, javascript, frontend, css, html, figma, desarrollo, web' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={imageURL} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={imageURL} />
      </Head>
      <section className='min-h-[calc(100vh_-_3rem)] sm:min-h-[calc(100vh_-_5rem)] grid justify-items-center content-center gap-6 p-8 max-w-4xl mx-auto'>
        <HomeName />
        <HomeHeading />
        <HomeResume />
        <HomeLinks />
      </section>
    </>
  )
}
