import React from 'react'
import "../css/Components/Button.css"

const Button = (props) => {
  return (
    <button 
    // className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 '
    // className=' py-2 px-6  md:ml-8 md:ml-8bg-dark dark:bg-dark-2 border-black-500 border-4 dark:border-dark-4 border inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-black hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
    className=' py-2 px-6  md:ml-8 bg-black dark:bg-dark-2 border-dark dark:border-dark-2 border inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
    >
    {props.children}
  </button>
  )
}

export default Button