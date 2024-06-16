import aboutImg from '../Assets/about.png'
import React from 'react'

export default function About() {

  const config = {
    line1:'Hi there! My name is Deva.s , and I am a passionate Web Developer with a strong background in Full Stack Development. I have honed my skills in JavaScript, React, and Node.js, creating dynamic and responsive web applications.',
    line2:' I hold a Bachelor’s degree in Computer Science from the University Of Sathyabama, Sholinganallur. I developed a keen interest in web technologies and application development, which led me to pursue a career in web development.',
    line3:'Throughout my career, I have worked on a variety of projects that span from e-commerce websites to data-driven applications. I was able to lead development teams and implement innovative solutions that significantly enhanced user experiences.'
  }

  return <section className='flex flex-col md:flex-row bg-secondary px-5 py-9' id='about'>
    <div className='md:w-1/2 py-5'> 
        <img src={aboutImg}/>
    </div>
    <div className='md:w-1/2 text-white flex  '>

     <div className='flex flex-col justify-center  '>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[200px] font-bold '>About Me..  </h1>
            <p className='text-2xl pb-5'>{config.line1} </p> 
               
                
            <p className='text-2xl pb-5'>{config.line2}  </p>
           

            <p  className='text-2xl pb-5'> {config.line3}</p>

          
     </div>
       
    </div>
  </section>
}
