import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useEntireMovie from '../hooks/useEntireMovie'; 
import MovieDetails from './MovieDetails';
import CastDetails from './CastDetails';
import MovieLists from './MovieLists';
import useSimilarMovie from '../hooks/useSimilarMovie';
import { useSelector } from 'react-redux';
import useRecommendedMovie from '../hooks/useRecommendedMovie';
import useMovieDetails from '../hooks/useMovieDetails';

const EntireMovie = () => {
  const[ids, setIds ] = useState();
  const params = useParams();
  const { id } = params;
  // console.log(id);
  const movie = useEntireMovie(id);
  useSimilarMovie(id);
  useRecommendedMovie(id);
  useMovieDetails(id);
  const similarMovies = useSelector(store => store.movies.similarMovies);
  const recommendedMovies = useSelector(store => store.movies.recommendedMovie);
  if(!movie) return null;
  return (
    <div className='bg-black'>
      <MovieDetails movie={movie} />
      <CastDetails MovieId={id} />
      {
        !similarMovies ? null : (<MovieLists title={"Similar Movies"} movies={similarMovies} />)
      }
      {
        !recommendedMovies ? null : (<MovieLists title={"Recommended Movies"} movies={recommendedMovies} />)
      }
    </div>
  )
}

export default EntireMovie;