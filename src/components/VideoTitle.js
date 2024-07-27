import React from 'react'
import { infoIcon, playIcon } from '../Assets'
const VideoTitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] pl-8 absolute text-white bg-gradient-to-r overflow-hidden from-black'>
        <h1 className='font-bold text-5xl px-6'>{title}</h1>
        <p className='text-md px-6 mt-5 w-2/4'>{description}</p>
        <div className='mx-4'>
          
            <button className='bg-white m-2 text-black p-2 px-8 text-lg rounded-lg font-bold hover:bg-opacity-80'>
                <img className='w-4 h-4 inline' src={playIcon} alt="play"/> Play
               </button>
            <button className='bg-gray-600 m-2 text-white p-2 px-8 text-lg rounded-lg font-bold bg-opacity-40'>
              <img className='w-5 h-5 inline m-1 object-center' src={infoIcon} alt="info"/>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle