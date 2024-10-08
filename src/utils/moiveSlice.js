import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer: null,
        trendingMovies: null,
        topRatedMovies: null,
        topRatedMovies2: null,
        upComingMovies: null,
        similarMovies:null,
        recommendedMovie:null,
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrendingMovies : (state,action) =>{
            state.trendingMovies = action.payload;
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addTopRatedMovies2 : (state,action) =>{
            state.topRatedMovies2 = action.payload;
        },
        addUpComingMovies : (state,action) =>{
            state.upComingMovies = action.payload;
        },
        addTrailer : (state, action) =>{
            state.movieTrailer = action.payload;
        },
        addSimilarMovies : (state,action) =>{
            state.similarMovies = action.payload;
        },
        addRecommendedMovies : (state,action) =>{
            state.recommendedMovie = action.payload;
        },
    }
})

export const { addNowPlayingMovies, addTrailer , addTrendingMovies, addTopRatedMovies, addUpComingMovies, addTopRatedMovies2, addSimilarMovies, addRecommendedMovies  } = movieSlice.actions;
export default movieSlice.reducer;