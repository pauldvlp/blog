import React, { useContext } from 'react'
import FormControl from '@/components/Form/FormControl'
import FormErrorMessage from '@/components/Form/FormErrorMessage'
import FormLabel from '@/components/Form/FormLabel'
import Input from '@/components/Elements/Input'
import ContactContext from '@/context/ContactContext'

const ContactName = () => {
  const { data, errors, handleData } = useContext(ContactContext)

  return (
    <FormControl>
      <FormLabel required>Nombre</FormLabel>
      <Input
        placeholder='John Doe'
        name='name'
        value={data.name}
        onChange={({ target }) => handleData(target.name, target.value)}
      />
      {errors.name && (
        <FormErrorMessage>Este campo es requerido.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default ContactName
