import React from 'react'

const Logo = () => {
  return (
    <div className="logo flex flex-row justify-center items-center w-fit h-fit">
    <div className='logo-icon relative flex justify-center items-center'>
<svg className='relative' xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 33 19" fill="none">
<path d="M27.9407 1.77151C25.4523 1.13296 22.9063 0.744368 20.3407 0.611511C19.0807 0.531511 17.7007 0.49151 16.1507 0.50151C14.6007 0.51151 13.2207 0.501511 11.9707 0.611511C9.40507 0.744368 6.85912 1.13296 4.37069 1.77151C1.72069 2.47151 0.370685 11.7115 0.0106847 14.5115C-0.0232194 14.7416 0.0241356 14.9763 0.144596 15.1752C0.265056 15.3742 0.451092 15.5249 0.670688 15.6015C0.670688 15.6015 1.47068 15.9215 2.89068 16.3315C7.10585 17.6069 11.4868 18.2506 15.8907 18.2415H16.4407C20.8447 18.2516 25.2257 17.6079 29.4407 16.3315C30.8607 15.9215 31.6707 15.6015 31.6707 15.6015C31.8903 15.5249 32.0763 15.3742 32.1968 15.1752C32.3172 14.9763 32.3646 14.7416 32.3307 14.5115C31.9607 11.6815 30.6007 2.44151 27.9407 1.77151Z" fill="#2D2D2D"/>
</svg>
<span className="logo-text absolute text-white font-bold z-10 text-xsm">12kg</span>
</div>
<span className='ml-3 text-dark text-xl font-bold'>PETWORLD</span>
</div>
  )
}

export default Logo