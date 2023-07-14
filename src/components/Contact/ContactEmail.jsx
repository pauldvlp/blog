import React, { useContext } from 'react'
import FormControl from '@/components/Form/FormControl'
import FormErrorMessage from '@/components/Form/FormErrorMessage'
import FormLabel from '@/components/Form/FormLabel'
import Input from '@/components/Elements/Input'
import ContactContext from '@/context/ContactContext'

const ContactEmail = () => {
  const { data, errors, handleData } = useContext(ContactContext)

  return (
    <FormControl>
      <FormLabel required>Correo Electrónico</FormLabel>
      <Input
        type='email'
        placeholder='nombre@email.com'
        name='email'
        value={data.email}
        onChange={({ target }) => handleData(target.name, target.value)}
      />
      {errors.email && (
        <FormErrorMessage>Este campo es requerido.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default ContactEmail
