import React, { useState } from 'react'

const initialData = { email: '', name: '', message: '', subject: '' }
const initialErrors = { email: false, name: false, message: false }

const ContactContext = React.createContext()

const ContactProvider = ({ children }) => {
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState(initialErrors)

  const handleData = (name, value) => {
    setData(
      prevData => ({ ...prevData, [name]: value })
    )
  }

  const handleErrors = () => {
    setErrors({
      email: !data.email,
      name: !data.name,
      message: !data.message
    })
  }

  const resetData = () => setData(initialData)

  return (
    <ContactContext.Provider value={{ data, errors, handleData, resetData, handleErrors }}>
      {children}
    </ContactContext.Provider>
  )
}

export { ContactProvider }
export default ContactContext
