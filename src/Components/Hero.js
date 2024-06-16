import HeroImg from '../Assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

import React from 'react'

export default function Hero() {
const config ={
  subtitle :' Iam a FullStack Developer',
  social:{
    twitter :'https://x.com/itz_deva07',
    facebook:'https://www.facebook.com/saravanan.deva.94402/',
  linkedin:'https://www.linkedin.com/in/deva-saravanan-5b74b52ab/'  }
}

  return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center font-hero-font'>
<div className='w-1/2 flex flex-col'>
          <h1 className=' text-white text-6xl'> Hi, <br/> Iam <span className='text-black'>S.</span> Deva
          <p className='text-2xl'> {config.subtitle}</p> 
          </h1>
<div className='flex py-10'>
          <a target='_blank' href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/> </a>
          <a  target='_blank' href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/> </a>
          <a  target='_blank' href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/> </a>
</div>
</div>


<img  className='w-1/3'  src={HeroImg}/>

         </section>
}
