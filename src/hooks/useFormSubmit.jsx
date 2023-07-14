import { useState } from 'react'

const endpoint = 'https://formsubmit.co/ajax/hola@paulbarahona.com'
const headers = { 'Content-Type': 'application/json' }
const method = 'POST'

const useFormSubmit = (data) => {
  const [success, setSuccess] = useState(false)

  const handleFormSubmit = async () => {
    try {
      const { subject, ...restOfData } = data

      restOfData._subject = subject || `Hola, soy ${restOfData.name}`

      const options = { method, headers, body: JSON.stringify(restOfData) }

      const { message, success } = await fetch(endpoint, options).then(res => res.json())

      if (!success) {
        setSuccess(false)
        throw new Error(message)
      }

      setSuccess(true)
      setTimeout(setSuccess, 2000, false)
    } catch (error) {
      throw new Error(error?.message || error.toString())
    }
  }

  return { success, handleFormSubmit }
}

export default useFormSubmit
