import React from 'react'
import { useParams } from 'react-router-dom';
import useEntireMovie from '../hooks/useEntireMovie'; 
import MovieDetails from './MovieDetails';
import CastDetails from './CastDetails';
import MovieLists from './MovieLists';
import useSimilarMovie from '../hooks/useSimilarMovie';
import { useSelector } from 'react-redux';
import useRecommendedMovie from '../hooks/useRecommendedMovie';

const EntireMovie = () => {
  const { id } = useParams();
  const movie = useEntireMovie(id);
  useSimilarMovie(id);
  useRecommendedMovie(id);
  const similarMovies = useSelector(store => store.movies.similarMovies);
  const recommendedMovies = useSelector(store => store.movies.recommendedMovie);
  console.log(recommendedMovies);
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
      {/* <MovieLists title={"Recommended"} movies={""} /> */}
    </div>
  )
}

export default EntireMovie;