import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleGptSearch: false,
        gptMovieList: null,
        gptMovieQuery: null,
    },
    reducers:{
        setToggleGptSearch : (state) =>{
            state.toggleGptSearch = !state.toggleGptSearch;
        },
        addGptResults: (state,action) =>{
            const { movieQuery, movieResults } = action.payload;
            state.gptMovieList = movieResults;
            state.gptMovieQuery = movieQuery;
        }
    }
})

export const { setToggleGptSearch, addGptResults } = gptSlice.actions;
export default gptSlice.reducer;