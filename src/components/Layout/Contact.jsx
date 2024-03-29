import React from 'react'
import ContactForm from '@/components/Contact/ContactForm'
import Heading from '../Elements/Heading'
import { ContactProvider } from '@/context/ContactContext'
import ContactLinks from '../Contact/ContactLinks'

const Contact = () => {
  return (
    <ContactProvider>
      <section
        id='contact'
        className='max-w-xl p-4 mx-auto grid gap-12 mb-12'
      >
        <Heading>Contáctame.</Heading>
        <ContactLinks />
        <ContactForm />
      </section>
    </ContactProvider>
  )
}

export default Contact
