import React from 'react'
import PetFoodIcon from '../assets/pet-food-icon.svg';
import MedicalIcon from '../assets/Medical-icon.svg';
import AccessoriesIcon from '../assets/Accessories-icon.svg';
import GroomingIcon from '../assets/Grooming-icon.svg';

const Features = () => {
  return (
    <div className='px-4 py-16 w-full flex justify-center items-center bg-white'>
        <div className='card-container flex flex-row flex-wrap justify-center items-center'>

        <div className="card max-w-[400px] my-4 mx-8 max-768:mx-4 max-450:mx-0 h-fit px-2 flex justify-center items-center flex-col">
            <img src={PetFoodIcon} alt="" />
            <span className='text-dark text-l font-bold mt-8'>Best quality pet food</span>
            <span className='text-dark text-l opacity-50 mt-8 text-center max-w-[270px]'>Super delicious food. Available in a range of delicious flavors.</span>
        </div>

        <div className="card max-w-[400px] my-4 mx-8 max-768:mx-4 max-450:mx-0 h-fit px-2 flex justify-center items-center flex-col">
            <img src={AccessoriesIcon} alt="" />
            <span className='text-dark text-l font-bold mt-8'>Best quality pet food</span>
            <span className='text-dark text-l opacity-50 mt-8 text-center max-w-[270px]'>Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</span>
        </div>

        <div className="card max-w-[400px] my-4 mx-8 max-768:mx-4 max-450:mx-0 h-fit px-2 flex justify-center items-center flex-col">
            <img src={MedicalIcon} alt="" />
            <span className='text-dark text-l font-bold mt-8'>Best quality pet food</span>
            <span className='text-dark text-l opacity-50 mt-8 text-center max-w-[270px]'>You can get a wide range of great treatments for your dog.</span>
        </div>

        <div className="card max-w-[400px] my-4 mx-8 max-768:mx-4 max-450:mx-0 h-fit px-2 flex justify-center items-center flex-col">
            <img src={GroomingIcon} alt="" />
            <span className='text-dark text-l font-bold mt-8'>Best quality pet food</span>
            <span className='text-dark text-l opacity-50 mt-8 text-center max-w-[270px]'>It's the right time to groom your dog with a variety of treatments.</span>
        </div>

        </div>
    </div>
  )
}

export default Features