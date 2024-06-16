
import React from 'react'

export default function Contact() {

 const config ={
  email:'Devasaravanan8425@gmail.com',
  phone:'8939603352'
 }
  return <section className='flex flex-col  bg-primary px-5 py-32 text-white' id='contact'>
  
  <div className=' flex flex-col items-center'>
          <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold '>Contact  </h1>
          <p className='text-2xl pb-5'>If You Want To Discuss More in Detail ,Please Contact me </p> 
          <p className='py-5 text-2xl'><span className='font-bold '>Email : </span>{config.email} </p>
          <p className='py-5 text-2xl'><span className='font-bold '>Phone : </span>{config.phone} </p>

  </div>
</section>
}
