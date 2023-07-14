import React, { useContext } from 'react'
import FormControl from '@/components/Form/FormControl'
import FormLabel from '@/components/Form/FormLabel'
import Input from '@/components/Elements/Input'
import ContactContext from '@/context/ContactContext'

const ContactSubject = () => {
  const { data, handleData } = useContext(ContactContext)

  return (
    <FormControl>
      <FormLabel>Asunto</FormLabel>
      <Input
        placeholder='¡Me encanta tu contenido!'
        name='subject'
        value={data.subject}
        onChange={({ target }) => handleData(target.name, target.value)}
      />
    </FormControl>
  )
}

export default ContactSubject
