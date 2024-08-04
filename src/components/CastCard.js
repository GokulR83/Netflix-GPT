import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const CastCard = ({character,name,imgURL}) => {
  return (
        !imgURL ? null : (
    <div className='w-32 p-2 md:w-48 md:p-4 bg-black'>
        <img className='rounded-sm shadow-md' src={IMG_CDN_URL+ imgURL} alt = "cast" />
        <p className='text-white pt-3'>{name}</p>
    </div>
    )
  )
}

export default CastCard;