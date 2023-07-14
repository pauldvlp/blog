import ContactContext from '@/context/ContactContext'
import useFormSubmit from '@/hooks/useFormSubmit'
import React, { useContext, useState } from 'react'
import Button from '../Elements/Button'
import ContactEmail from './ContactEmail'
import ContactError from './ContactError'
import ContactMessage from './ContactMessage'
import ContactName from './ContactName'
import ContactSubject from './ContactSubject'
import ContactSuccess from './ContactSuccess'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { data, resetData, handleErrors } = useContext(ContactContext)
  const { success, handleFormSubmit } = useFormSubmit(data)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      setError(null)

      handleErrors()

      if (!data.name || !data.email || !data.message) {
        throw new Error('Tienes campos vacíos.')
      }

      await handleFormSubmit()

      resetData()
    } catch (error) {
      setError(error?.message || error.toString())
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <span className='text-center'>
    Ó puedes enviarme un correo
  </span>
    <form className='grid gap-4' onSubmit={handleSubmit}>
      <ContactName />
      <ContactEmail />
      <ContactSubject />
      <ContactMessage />
      <Button type='submit' className='justify-self-end' disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </Button>
      {
        error && (
          <ContactError>{error?.message || error.toString()}</ContactError>
        )
      }
      {success && <ContactSuccess />}
    </form>
    </>
  )
}

export default ContactForm
