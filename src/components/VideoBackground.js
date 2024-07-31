import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const  trailerDetails = useSelector(store => store.movies?.movieTrailer);
  useMovieTrailer(movieId);
  return (
    <div className='overflow-hidden'>
        <iframe 
        className="w-screen h-[50%] aspect-video overflow-hidden"
        src={`https://www.youtube.com/embed/${trailerDetails?.key}?si=pOZOPXX7iT2P9tdY?controls=0&autoplay=1&loop=1&mute=1&playlist=${trailerDetails?.key}`}
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground;