import React from 'react'

import ImagenImprovisar from '../Img/Rap.jpg'



const Home = () => {
    return (
        <div className='flex items-center sm:w-screen'>

        <div className=' relative mx-auto flex flex-col'>
          <div className='absolute  -top-20 right-10 w-72 h-72 bg-pink-300 rounded-full filter blur-xl opactiy-25 mix-blend-multiply  animate-blob'></div> 
          <div className='absolute z-0 -top-20  w-72 h-72 bg-yellow-300 rounded-full filter blur-xl opactiy-25 mix-blend-multiply  animate-blob'></div>
          <div className='absolute z-0 -bottom-40 right-0 w-72 h-72 bg-orange-300 rounded-full filter blur-xl opactiy-25  mix-blend-multiply  animate-blob'></div>
          <div className='absolute z-0 -bottom-40 left-0 w-72 h-72 bg-fuchsia-300 rounded-full filter blur-xl opactiy-25 mix-blend-multiply  animate-blob'></div>
          <img src={ImagenImprovisar} alt="Aprender a improvisar" className=' sm:w-11/12 my-4' />
          <h1 className='font-bold text-xl md:text-4xl text-center'> Improvisando </h1>
          <div className='flex flex-col w-full mx-auto items-center' >
          </div>
        </div>
  
      </div>
  
  
    )
}

export default Home
