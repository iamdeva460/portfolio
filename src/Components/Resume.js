import resumeImg from '../Assets/resume.jpg'
import React from 'react'

export default function Resume() {
const config ={
  link:'https://icseindia.org/document/sample.pdf'
}

  return  <section className='flex flex-col md:flex-row bg-secondary px-5 py-9' id='resume'>
  <div className='md:w-1/2 py-5 flex justify-center md:justify-end'> 
      <img className='w-[300px] ' src={resumeImg} />
  </div>

  <div className='md:w-1/2 text-white  flex justify-center '>
   <div className='flex flex-col justify-center '>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold '>Resume  </h1>
          <p className='text-2xl pb-5'>You Can View My Resume  <a target='_blank' href={config.link} className='btn  '>Download</a></p> 
             
        
   </div>
     
  </div>
</section>
}
