import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";


const useEntireMovie = (id) =>{
    const [movie, setMovie ] = useState(null);
    useEffect(()=>{
        fetchMovieDetails();
    },[])
    const fetchMovieDetails = async() =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}`, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        setMovie(json);
    }
    return movie;
}


export default useEntireMovie;