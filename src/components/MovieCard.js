import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
  if(!movie.poster_path) return null;
  console.log(movie);
  return (
    <div className='w-32 p-2 md:w-48 md:p-4'>
        <p className='text-white w-fit relative bg-green-700 px-2 p-1 inline top-7 md:top-9 mr-7 rounded-r-lg'>★ {movie.vote_average.toFixed(1)+" "} </p>
        <img className='rounded-sm shadow-md' src={IMG_CDN_URL+movie.poster_path} alt='movie icon' />
        <p className='text-white pt-3'>{movie.title}</p>
    </div>
  )
}

export default MovieCard;