import React from 'react'
import HomeHeading from '../Home/HomeHeading'
import HomeLinks from '../Home/HomeLinks'
import HomeName from '../Home/HomeName'
import HomeResume from '../Home/HomeResume'

export default function Hero() {
  return (
    <section className='min-h-[calc(100vh_-_3rem)] sm:min-h-[calc(100vh_-_5rem)] grid justify-items-center content-center gap-6 p-8 max-w-4xl mx-auto'>
      <HomeName />
      <HomeHeading />
      <HomeResume />
      <HomeLinks />
    </section>
  )
}