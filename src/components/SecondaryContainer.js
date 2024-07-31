import React from 'react'
import MovieLists from './MovieLists';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  if(!movies.nowPlayingMovies) return;
  if(!movies.trendingMovies) return;
  if(!movies.topRatedMovies) return;
  if(!movies.topRatedMovies2) return;
  if(!movies.upComingMovies) return;
  return (
    <div className='bg-black'>
      <div className='relative -mt-[25%] md:-mt-80 z-20 pl-2'>
      <MovieLists title={"Now Playing Movies"} movies = {movies.nowPlayingMovies} />
      <MovieLists title={"Up Coming"} movies = {movies.upComingMovies} />
      <MovieLists title={"Trending"} movies = {movies.trendingMovies} />
      <MovieLists title={"Top Rated"} movies = {movies.topRatedMovies} />
      <MovieLists title={"Top Rated - 2"} movies = {movies.topRatedMovies2} />
      </div>
    </div>
  )
}

export default SecondaryContainer;