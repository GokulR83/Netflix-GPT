import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/moiveSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const  trailerDetails = useSelector(store => store.movies?.movieTrailer);
  useMovieTrailer(movieId);
  return (
    <div className=''>
        <iframe 
        className="w-screen aspect-video overflow-hidden"
        src={`https://www.youtube.com/embed/${trailerDetails?.key}?si=pOZOPXX7iT2P9tdY?controls=0&autoplay=1&loop=1&mute=1&playlist=${trailerDetails?.key}`}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground;