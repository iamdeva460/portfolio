import websiteImg from '../Assets/ecommerce-websites.jpg';
import websiteImg2 from '../Assets/food-ecommerce.jpg';
import websiteImg3 from '../Assets/website-blog.jpg'

import React from 'react'

export default function Projects() {
  
const config={
    projects:[
        {image : websiteImg,
          description:'A Ecommerce Website built with MERN Stack.',
          link:'https://github.com/iamdeva460/ecommerce-project'  
        },
        {image : websiteImg2,
            description:'Food Ecommerce website like swiggy,Zomato.',
            link:'https://github.com/iamdeva460/image-slider'  
          },
          {image :  websiteImg3,
            description:'  basic Blog Webite Built Next JS and MongoDB',
            link:'https://github.com/iamdeva460/autosearch'  
          }
    ]
}

  return  <section className='flex-col px-5 py-5 justify-center bg-primary text-white' id='project'>
    <div className='w-full'>
       
            <div className='flex flex-col justify-center py-5'>
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
            <p className='text-2xl px-10'>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div> 
      
    </div>
<div  className='w-full'>
   <div className='flex flex-col md:flex-row text-sm px-10 gap-5'>
    {config.projects.map((project)=>(

        
 <div className='relative'>
        <img src={project.image} className='h-[200px] px-5 w-[500px]'/>
     <div className='project-desc'>
        <p className='text-center py-5 px-5'> {project.description}</p>  
     <div className='flex justify-center'>
     <a className='btn' target='_blank' href={project.link}> View Project  </a>
     </div> 
     </div>
     
</div>
    ))}
           

    </div>
      
 </div>
         </section>
}
