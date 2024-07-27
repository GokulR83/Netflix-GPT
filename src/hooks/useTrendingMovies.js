import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moiveSlice";


const useTrendingMovies = () =>{
    const dispatch = useDispatch();
    const getTrendingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(()=>{
    getTrendingMovies();
  },[])
}

export default useTrendingMovies;