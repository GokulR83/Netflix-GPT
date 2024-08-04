import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSimilarMovies } from "../utils/moiveSlice";

const useSimilarMovie = (movieId) => {
    const dispatch =useDispatch();
    console.log(movieId);
    useEffect(()=>{
        getSimilarMovies();
    },[]);

    const getSimilarMovies = async() =>{
        const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        dispatch(addSimilarMovies(json.results));
    }
}

export default useSimilarMovie;