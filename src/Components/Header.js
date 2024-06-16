import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'
import { useState } from 'react'
import Hero from './Hero';

export default function Header() {
//togglemenu

 const [toggleMenu , setToggleMenu] = useState(false);


  return <header className='flex justify-between px-5 py-2 bg-secondary  '>
  <a href='#' className='font-bold text-black'> Deva</a>
  <nav className='  hidden md:block  '>
        <ul className='flex text-white '>
          <li><a href='/'>Home </a> </li>
          <li><a href='#about'>About </a> </li>
          <li><a href='#project'>Project </a> </li>
          <li><a href='#resume'>Resume </a> </li>
          <li><a href='#contact'>Contact </a> </li>
        </ul> 
  </nav>  

  { toggleMenu && <nav className='block md:hidden '>
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
          <li><a href='/'>Home </a> </li>
          <li><a href='#about'>About </a> </li>
          <li><a href='#project'>Project </a> </li>
          <li><a href='#resume'>Resume </a> </li>
          <li><a href='#contact'>Contact </a> </li>
        </ul> 
  </nav>  }
   <button className='block md:hidden' onClick={()=>setToggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5'/> </button>
  
  
  </header>

}
