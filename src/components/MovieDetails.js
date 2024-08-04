import React from 'react'
import { playIcon } from '../Assets';
import { IMG_CDN_URL } from '../utils/constants';

const MovieDetails = ({ movie }) => {
  return (
    <div className="pt-[10%] w-full bg-black text-white flex flex-col justify-center items-center md:flex-row">
      <div className='p-4 aspect-video rounded-lg shadow-lg'>
            <img
            className=' p-2 rounded-lg shadow-lg'
            src={IMG_CDN_URL + movie?.backdrop_path} alt="Movie Poster" />
      </div>
      <div className='w-full md:w-1/2 h-1/2 aspect-video p-2'>
          <div className='flex justify-end gap-3'>
            <p className='bg-green-500 px-3 py-1 mt-3 rounded-md w-fit'>Rating ★ {movie.vote_average.toFixed(1)+" "} </p>
            <p className='bg-pink-600 px-3 py-1 mt-3 rounded-md w-fit'>Revenue ${Intl.NumberFormat("en", {notation: "compact"}).format(movie.revenue)} </p>
          </div>
          <h2 className='text-3xl font-bold pt-3'>{movie.title}</h2>
          <p className='text-lg pt-3'>{movie.overview}</p>
          <div className='pt-5'>
            <a href={movie.homepage} 
            className='bg-white mt-3 text-black p-2  px-8 text-sm md:text-lg rounded-lg font-bold hover:bg-opacity-80' >
              <img className='md:w-4 md:h-4 inline w-2 h-2' src={playIcon} alt="play"/>Play
            </a>
          </div>
      <div className='flex gap-2 flex-end pt-7 flex-wrap'>
        {
          movie.genres.map((genre) => <p className='bg-red-500 px-3 py-1 rounded-md text-md' key={genre.id}>{genre.name}</p>)
        }
      </div>
      </div>
    </div>
  )
}

export default MovieDetails;