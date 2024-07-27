import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies2 } from "../utils/moiveSlice";


const useTopRatedMovies2 = () =>{
    const dispatch = useDispatch();
    const getTopRatedMovies2 = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRatedMovies2(json.results));
  };
  useEffect(()=>{
    getTopRatedMovies2();
  },[])
}

export default useTopRatedMovies2;