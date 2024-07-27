import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer: null,
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
        }
    }
})

export const { addNowPlayingMovies, addTrailer , addTrendingMovies, addTopRatedMovies, addUpComingMovies, addTopRatedMovies2 } = movieSlice.actions;
export default movieSlice.reducer;