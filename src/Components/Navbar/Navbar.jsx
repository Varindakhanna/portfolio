import React from 'react'
import './Navbar.css'
import {AiOutlineHome, AiOutlineUser,AiOutlineContacts} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'




const Navbar = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#'? 'active':''}><AiOutlineHome className='Navbar__icons'/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about'? 'active':''}><AiOutlineUser className='Navbar__icons'/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience'? 'active':''}><BsBook className='Navbar__icons'/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services'? 'active':''}><RiServiceLine className='Navbar__icons'/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact'? 'active':''}><AiOutlineContacts className='Navbar__icons'/></a>
    </nav> 
  )
}

export default Navbar
