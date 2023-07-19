import React from 'react'
import Amazon from '../assets/Amazon.svg';
import Google from '../assets/Google.svg';
import Apple from '../assets/Apple.svg';
import Nestle from '../assets/Nestle.svg';
import Walmart from '../assets/Walmart.svg';
import Beco from '../assets/Beco.svg';

const Clients = () => {
  return (
    <div className='clients w-full px-4 flex-wrap flex justify-center items-center py-16 bg-white'>
        <img className='mx-10 my-4 max-768:mx-4 max-450:m-2 max-450:h-7 max-450:w-auto' src={Nestle} alt="" />
        <img className='mx-10 my-4 max-768:mx-4 max-450:m-2 max-450:h-7 max-450:w-auto' src={Apple} alt="" />
        <img className='mx-10 my-4 max-768:mx-4 max-450:m-2 max-450:h-7 max-450:w-auto' src={Beco} alt="" />
        <img className='mx-10 my-4 max-768:mx-4 max-450:m-2 max-450:h-7 max-450:w-auto' src={Amazon} alt="" />
        <img className='mx-10 my-4 max-768:mx-4 max-450:m-2 max-450:h-7 max-450:w-auto' src={Google} alt="" />
        <img className='mx-10 my-4 max-768:mx-4 max-450:m-2 max-450:h-7 max-450:w-auto' src={Walmart} alt="" />
    </div>
  )
}

export default Clients