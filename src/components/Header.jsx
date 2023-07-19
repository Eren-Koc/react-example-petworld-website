import React from 'react'
import {AiOutlineUser} from 'react-icons/ai';
import Logo from './Logo';
const Header = () => {
  return (
    <header className='header w-full h-24 flex justify-between laptop:px-16 450px:px-8 px-4 bg-white items-center shadow-sm fixed left-0 top-0 z-50'>
        <Logo/>
        <div className='login-signup flex flex-row justify-center items-center'>
            <div className='buttons laptop:block hidden'>
              <a href="">
            <button className='rounded-md text-dark text-l py-2 px-4 font-light mx-2'>Sign Up</button>
            </a>
            <a href="">
            <button className='rounded-md text-white text-l py-2 px-8 mx-2 font-light bg-blue'>Log in</button>
            </a>
            </div>
            <div className='log-in-icon laptop:hidden block'>
              <a href="">
            <AiOutlineUser className='text-dark w-8 h-auto'/>
            </a>
            </div>
        </div>
        
    </header>
  )
}

export default Header