import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moiveSlice";
import { useEffect } from "react";

const useMovieTrailer = ( movieId ) =>{
    const dispatch = useDispatch();
  const getMovieVideos = async() =>{
    const videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await videos.json();
    const filterData = json.results.filter(video => video.type = "Trailer");
    const trailer = filterData ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  }
  useEffect(()=>{
    getMovieVideos();
  },[movieId])
}

export default useMovieTrailer;