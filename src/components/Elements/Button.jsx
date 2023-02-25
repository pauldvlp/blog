import React from 'react'

const variantsClassNames = {
  primary: 'bg-blue-600 text-white border-transparent hover:bg-blue-700 disabled:bg-blue-300',
  secondary: 'bg-white text-blue-600 border-blue-500 hover:bg-slate-100 disabled:text-blue-300 disabled:border-blue-300'
}

const Button = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <button
      className={`h-12 text-sm font-semibold px-6 rounded-full whitespace-nowrap ${variantsClassNames[variant]} ${className} hover:shadow-lg hover:shadow-blue-300 active:shadow-none active:scale-90 duration-300 focus:outline-blue-400`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button