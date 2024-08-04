import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (MovieId) =>{
    const [cast, setCast ] = useState(null);
    useEffect(()=>{
        getDetails();
    },[]);

    const getDetails = async() =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${MovieId}/credits`, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        setCast(json);
    }
    return cast;
}

export default useMovieDetails;