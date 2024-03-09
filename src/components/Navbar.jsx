import React from 'react'
import "../css/Components/Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import Button from './Button'
import { useState } from 'react'

function Navbar() {

  let Links = [
    {name: "HOME", link: "/"},
    {name: "ABOUT", link: "/about"},
    {name: "PROJECTS", link: "/projects"},
    {name: "CONTACT", link: "/contact"}
  ]
  let [open,setOpen]=useState(false);


  return (
    <div className='shadow-md w-full relative top-0 left-0'>
        <nav className='md:flex items-center justify-between bg-white md:px-10 py-4'>
          <div className="ml-4 font-bold text-2xl cursor-pointer flex items-center text-gray-800">
           <a href="/" className='custom_text custom_text_main'>Bandhan </a>
          </div>
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-490px]'}`}>
            {
              Links.map((link) =>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 cursor-pointer'>{link.name}</a>
                </li>
              ))
            }
            <Button><a href="https://linkedin.com/in/bandhanpokhrel/" target='_blank'>Hire Me</a></Button>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar