import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../css/Components/Footer.css"

const Footer = () => {
  return (
    <div className='bg-gray-200 w-full block flex-items-center justify-between customHeight'>
        <h1 className='text-center pb-4 mt-4 pt-4 md:text-3xl px-6 select-none getintouch custom_text custom_text_main'>Get In Touch</h1>
        <div className=" p-4  flex items-center justify-around">
          <a href='https://facebook.com/bandhanpokhrel01/' target='_blank' className='social_logo text-3xl'><FaFacebook /></a>
          <a href='https://instagram.com/_bandhann/' target='_blank' className='social_logo text-3xl'><FaInstagram/></a>
          <a href='https://github.com/itzbandhan/' target='_blank' className='social_logo text-3xl'><FaGithub/></a>
          <a href='https://linkedin.com/in/bandhanpokhrel/' target='_blank' className='social_logo text-3xl'><FaLinkedin/></a>
        </div>
        <div className="flex items-center justify-around mt-2 p-4">
          <a href="mailto:codewithbandhan@gmail.com" target='_blank' className='hover:underline'>codewithbandhan@gmail.com</a>
        </div>
        <div className=' text-center'>
          <span className='text-bold'><a href="https://github.com/itzbandhan/" target='_blank' className='hover:underline'>Bandhan Pokhrel</a></span> <span className='cursor-none'>© 2024 </span>
        </div>
    </div>
  )
}

export default Footer
