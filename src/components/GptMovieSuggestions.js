import React from 'react'
import { useSelector } from 'react-redux';
import MovieLists from './MovieLists';

const GptMovieSuggestions = () => {
  const { gptMovieList, gptMovieQuery } = useSelector(store => store.gpt);
  if(!gptMovieQuery) return null;
  return (
    <div className='p-6 bg-black text-white m-4 mt-0 bg-opacity-80 rounded-lg'>
      <h1 className='font-bold text-xl text-center p-3'>The Gemini AI suggested Movies:  </h1>
      {
        gptMovieQuery.map((movie,idx)=> <MovieLists key={movie} title={movie} movies={gptMovieList[idx]} />)
      }
      
    </div>
  )
}

export default GptMovieSuggestions;