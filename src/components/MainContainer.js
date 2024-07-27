import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;
  const random = Math.floor(Math.random()*movies.length);
  const selectedMovie = movies[random];
  return (
    <div>
      <VideoTitle title={selectedMovie.title} description={selectedMovie.overview} />
      <VideoBackground movieId = {selectedMovie.id} />
    </div>
  )
}

export default MainContainer;