import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
  if(!movie.poster_path) return null;
  return (
    <div className='w-48 p-4'>
        <img src={IMG_CDN_URL+movie.poster_path} alt='movie icon' />
    </div>
  )
}

export default MovieCard;