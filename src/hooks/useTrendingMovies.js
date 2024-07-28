import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moiveSlice";


const useTrendingMovies = () =>{
    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies.trendingMovies);
    const getTrendingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(()=>{
    !trendingMovies && getTrendingMovies();
  },[])
}

export default useTrendingMovies;