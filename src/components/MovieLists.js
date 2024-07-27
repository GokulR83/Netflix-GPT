import React from 'react'
import MovieCard from './MovieCard';

const MovieLists = ({ title, movies }) => {
  return (
    <div className='px-5 pt-7 overflow-hidden'>
            <h1 className='text-white text-3xl p-7 pb-3'>{title}</h1>
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