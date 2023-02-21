export function getFormattedDate(date) {
  const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }
  return new Intl.DateTimeFormat('es-ES', options).format(new Date(date))
}