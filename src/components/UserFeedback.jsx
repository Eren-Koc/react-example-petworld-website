import React from 'react'
import userfeedbackImg from '../assets/user-feedback-image.png';
const UserFeedback = () => {
  return (
    <div className='user-feedback-container w-full px-4 py-16 bg-pink flex justify-center items-center'>
        <div className='flex flex-row max-768:flex-col justify-center items-center'>
            <img className='mr-10 max-1024:mr-5  max-768:mr-0' src={userfeedbackImg} alt="" />
            <div className='user-feedback-texts max-768:mt-4 flex flex-col ml-10 max-1024:ml-5 max-768:ml-0'>

            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="46" viewBox="0 0 63 46" fill="none">
<path d="M0.5 30.4754C0.5 38.8003 6.61624 45.7661 13.7519 45.7661C20.7176 45.7661 25.9844 40.4993 25.9844 33.7035C25.9844 26.3979 19.5283 21.471 11.0335 20.9613C13.2422 15.5246 16.9799 9.74817 24.2854 2.44264L22.0768 0.234009C7.97541 8.2191 0.5 20.2817 0.5 30.4754ZM36.8577 30.4754C36.8577 38.8003 42.9739 45.7661 50.1095 45.7661C57.0753 45.7661 62.342 40.4993 62.342 33.7035C62.342 26.3979 55.886 21.471 47.3912 20.9613C49.5999 15.5246 53.3376 9.74817 60.6431 2.44264L58.4344 0.234009C44.3331 8.2191 36.8577 20.2817 36.8577 30.4754Z" fill="#2D2D2D"/>
</svg>
<span className='mt-8 text-dark font-bold text-l max-w-[410px]'>We love using 'PETWORLD' products.  Environmentally friendly and sustainable. 
We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.</span>
<span className='mt-16 opacity-50 text-dark text-l font-medium'>Dylan Shaw</span>
            </div>
        </div>
    </div>
  )
}

export default UserFeedback