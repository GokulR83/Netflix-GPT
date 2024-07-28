import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies2 } from "../utils/moiveSlice";


const useTopRatedMovies2 = () =>{
    const dispatch = useDispatch();
    const topRatedMovies2 = useSelector(store => store.movies.topRatedMovies2);
    const getTopRatedMovies2 = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRatedMovies2(json.results));
  };
  useEffect(()=>{
    !topRatedMovies2 && getTopRatedMovies2();
  },[])
}

export default useTopRatedMovies2;