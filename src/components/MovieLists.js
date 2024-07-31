import React from 'react'
import MovieCard from './MovieCard';

const MovieLists = ({ title, movies }) => {
  return (
    <div className='px-3 pt-[15%] md:pt-7 overflow-hidden'>
            <h1 className='text-white text-xl p-5  md:text-3xl md:p-7 pb-2'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    movies.map((movie) =>(
                        <MovieCard key={movie.id} movie = {movie} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieLists;