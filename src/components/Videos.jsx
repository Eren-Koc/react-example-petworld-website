import React from 'react'

const Videos = () => {
  return (
    <div className='px-4 w-full py-16 bg-light-blue flex justify-center items-center h-fit'>
       
        <iframe className='w-[800px] h-[500px] max-1024:w-4/5 max-768:w-96 max-768:h-72  rounded-lg' src="https://www.youtube.com/embed/01le4Ln8da0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Videos