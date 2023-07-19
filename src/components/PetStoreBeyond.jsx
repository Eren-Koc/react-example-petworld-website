import React from 'react'
import PetStoreBeyondImg from '../assets/petstore-beyond.png';

const PetStoreBeyond = () => {
  return (
    <div className='w-full bg-light-pink h-[calc(100vh-96px)] flex max-768:flex-col justify-evenly items-center px-4 max-768:pb-8'>
    <div className='flex flex-col max-768:justify-center max-768:items-center'>
        <span className=' text-5rem max-1024:text-5xl text-dark font-bold flex flex-col'>Pet Store <span>& Beyond</span></span>
        <span className='mt-4 opacity-50 text-dark text-l max-w-[500px] max-1024:max-w-[350px] max-768:text-center'>
        This is a sample landing page, created with Figma and Anima. No coding involved.
        </span>
        <a href="">
        <button className='mt-16 bg-yellow py-3 px-8 rounded-md text-dark font-light text-xl w-fit h-fit max-768:mt-8'>Get Started</button>
        </a>
    </div>
    <div>
        <img src={PetStoreBeyondImg} className='max-1024:w-96 max-1024:h-auto ease-in duration-300' alt="" />
    </div>
    </div>
  )
}

export default PetStoreBeyond