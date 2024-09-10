import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieLists = ({ title, movies }) => {
  return (
    <div className='px-3 pt-[15%] md:pt-7 overflow-hidden'>
            <h1 className='text-white text-xl p-5  md:text-3xl md:p-7 pb-2'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    movies.map((movie) =>(
                        <Link to={`../movie/${movie.id}`} key={movie.id} >
                        <MovieCard key={movie.id} movie = {movie} />
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieLists;