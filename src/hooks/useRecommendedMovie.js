import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRecommendedMovies } from "../utils/moiveSlice";

const useRecommendedMovie = (movieId) => {
    const dispatch =useDispatch();
    // console.log(movieId);
    useEffect(()=>{
        getRecommendedMovie();
    },[movieId]);

    const getRecommendedMovie = async() =>{
        const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        dispatch(addRecommendedMovies(json.results));
    }
}

export default useRecommendedMovie;