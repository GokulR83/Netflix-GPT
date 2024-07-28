import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moiveSlice";
import { useEffect } from "react";

const useMovieTrailer = ( movieId ) =>{
    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movies.movieTrailer)
  const getMovieVideos = async() =>{
    const videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await videos.json();
    const filterData = json.results.filter(video => video.type = "Trailer");
    const trailer = filterData ? filterData[2] : json.results[0];
    dispatch(addTrailer(trailer));
  }
  useEffect(()=>{
    !movieTrailer && getMovieVideos();
  },[movieId])
}

export default useMovieTrailer;