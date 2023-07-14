import { convertFirstLetterToUppercase } from './string'

export function getFormattedDate (date) {
  const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }
  const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(new Date(date))
  return convertFirstLetterToUppercase(formattedDate)
}
