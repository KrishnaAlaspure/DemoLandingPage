import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

function HeroSection() {
  return (
    <>
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide'>LoopAI Build Tools for 
      <span className='bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text'> Developers Community</span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ducimus debitis quas molestias porro laudantium aliquam, minima exercitationem! Minus reprehenderit quibusdam autem eveniet delectus nulla quia quaerat nostrum tempora nesciunt?
      </p>
      <div className='flex justify-center my-10'>
        <a href="" className='bg-gradient-to-r  from-orange-400 to-orange-800 py-3 px-4 mx-3 rounded-md'> Start for free!</a>
        <a href="" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-300 mx-2 my-4'>
          <source src={video1} type='video/mp4'/>Browser doent support video tag.
        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-300 mx-2 my-4'>
          <source src={video2} type='video/mp4'/>Browser doent support video tag.
        </video>

      </div>
    </div>
    </>
  )
}

export default HeroSection
