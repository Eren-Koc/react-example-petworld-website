import React from 'react'
import ContactUsImg from '../assets/contact-us-img.png';

const ContactUs = () => {
  return (
    <div className='px-4 py-16 w-full flex justify-center items-center bg-light-yellow'>
    <div className='flex flex-row max-768:flex-col justify-center items-center'>
    <div className="contact-us-texts flex flex-col mr-10 max-1024:mr-5 max-768:mr-0 max-768:justify-center  max-768:items-center">
        <span className='text-dark text-5rem max-1024:text-5xl max-450:text-3xl font-bold flex flex-col max-768:flex-row'>Let’s talk,<span> woof! </span></span>
        <span className='mt-8 opacity-50 text-dark text-l max-w-[400px] max-768:text-center'>You can ask us questions about your pet, and we will be happy to answer you!</span>
        <a href="">
        <button className='mt-16 bg-yellow py-3 px-8 rounded-md text-dark font-light text-xl w-fit h-fit max-768:mt-8'>Contact Us</button>
        </a>
    </div>
    <img src={ContactUsImg} className='ml-10 max-1024:ml-5 max-768:ml-0 max-1024:w-96 max-1024:h-auto max-768:mt-8' alt="" />
    </div>  
    </div>
  )
}

export default ContactUs