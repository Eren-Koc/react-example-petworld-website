import React from 'react'
import Logo from './Logo'
import { AiOutlineTwitter,AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn,FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer px-16 py-16 max-768:px-4 w-full flex justify-between items-start max-1024:flex-col'>
       <div className='footer-left flex flex-col max-1024:w-full'>
       <Logo/>
       <span className='mt-16 text-dark text-l'>Updates right to your Inbox</span>
       <div className='flex flex-row justify-center items-center mt-4 w-fit max-450:w-full'>
        
        <div className='max-1024:flex max-1024:flex-col max-450:w-full max-1024:h-fit'>
        <input type="text" className='pl-4 w-[320px] max-450:w-full text-dark text-l rounded-lg border-[#D0D0D0] border py-2 outline-none' placeholder='Email Address'/>
        <button className='rounded-md text-white text-base py-2 max-768:w-full px-4 max-1024:ml-0 max-1024:m-auto ml-4 font-light bg-blue max-1024:mt-4'>Send</button>
        </div>

       </div>
       <div className='copyrights flex flex-row justify-center items-center mt-8 w-fit max-1024:hidden'>
        <span className='copyright text-base mr-4 font-bold text-dark'>© PETWORLD 2022</span>
        <span className='copyright text-base mx-4 font-bold text-dark'>Privacy policy</span>
        <span className='copyright text-base ml-4 font-bold text-dark'>Terms of use</span>
       </div>
        </div>  
        <div className="footer-right flex flex-col justify-end items-center max-1024:items-start">
          <div className='nav flex flex-row max-1024:flex-col'>
         
              <div className='our-story flex flex-col mr-7 max-1024:mr-0 max-1024:mt-12 '>
                <span className='font-bold text-l mb-2 text-dark'>Our story</span>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">FAQ</a>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">Contact</a>
              </div>

              <div className='pet-care flex flex-col mx-7 max-1024:mx-0 max-1024:mt-4'>
                <span className='font-bold text-l mb-2 text-dark'>Pet Care</span>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">Treatments</a>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">Health</a>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">Hygiene </a>
              </div>

              <div className='pet-care flex flex-col ml-7 max-1024:ml-0 max-1024:mt-4'>
                <span className='font-bold text-l mb-2 text-dark'>Shop</span>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">Pet Food</a>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">Toys</a>
                <a className='text-l font-light my-2 text-dark hover:underline' href="">Accessories </a>
              </div>

            </div>
            <div className='social-medias w-full flex justify-end text-right mt-11 max-1024:hidden'>
            
              <a href="" className='p-1 rounded-full mx-2 bg-dark'><FaFacebookF className='text-white w-6 h-auto'/></a>
              <a href="" className='p-1 rounded-full mx-2 bg-dark'><FaLinkedinIn className='text-white w-6 h-auto'/></a>
              <a href="" className='p-1 rounded-full mx-2 bg-dark'><AiFillInstagram className='text-white w-6 h-auto'/></a>
              <a href="" className='p-1 rounded-full mx-2 bg-dark'><AiOutlineTwitter className='text-white w-6 h-auto'/></a>
              
            </div>
          
        </div>
       

        <div className='copyrights flex-col-reverse text-left justify-center items-start mt-8 w-fit laptop:hidden flex'>
        <span className='copyright text-base my-4 font-bold text-dark'>© PETWORLD 2022</span>
        <span className='copyright text-base my-4 font-bold text-dark'>Privacy policy</span>
        <span className='copyright text-base my-4 font-bold text-dark'>Terms of use</span>
       </div>
       <div className='social-medias w-full justify-start text-left mt-8 laptop:hidden flex'>   
            <a href="" className='p-1 rounded-full mx-2 bg-dark'><FaFacebookF className='text-white w-6 h-auto'/></a>
            <a href="" className='p-1 rounded-full mx-2 bg-dark'><FaLinkedinIn className='text-white w-6 h-auto'/></a>
            <a href="" className='p-1 rounded-full mx-2 bg-dark'><AiFillInstagram className='text-white w-6 h-auto'/></a>
            <a href="" className='p-1 rounded-full mx-2 bg-dark'><AiOutlineTwitter className='text-white w-6 h-auto'/></a>
          </div>
    </footer>
  )
}

export default Footer