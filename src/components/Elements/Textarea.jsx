import React from 'react'

const Textarea = (props) => {
  return (
    <textarea className='min-h-[8rem] resize-y p-4 rounded-md border border-blue-300 focus:outline-blue-600' {...props} />
  )
}

export default Textarea