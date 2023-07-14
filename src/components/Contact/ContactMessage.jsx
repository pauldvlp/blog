import React, { useContext } from 'react'
import FormControl from '@/components/Form/FormControl'
import FormErrorMessage from '@/components/Form/FormErrorMessage'
import FormLabel from '@/components/Form/FormLabel'
import Textarea from '@/components/Elements/Textarea'
import ContactContext from '@/context/ContactContext'

const ContactMessage = () => {
  const { data, errors, handleData } = useContext(ContactContext)

  return (
    <FormControl>
      <FormLabel required>Mensaje</FormLabel>
      <Textarea
        placeholder='Me gustaría charlar contigo 😊.'
        name='message'
        value={data.message}
        onChange={({ target }) => handleData(target.name, target.value)}
      />
      {errors.message && (
        <FormErrorMessage>Este campo es requerido.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default ContactMessage
