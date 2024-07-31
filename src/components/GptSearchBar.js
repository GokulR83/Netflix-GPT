import React, { useRef } from 'react'
import { model } from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const getEachMovieDetails = async( movieName ) =>{
    const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+ movieName +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
  const handleGPTClick = async() =>{
    const prompt = "You are movie recommended system, i need you to suggest the movie based on the user input, the user input is " + searchText.current.value + ". the result will looks like, i will give the example for you, you will need to give the same format answer for me and give only 5 movie name and no need to add anything just movie name with comma seprated , the example is  'nanban, kodi, leo, master, legend'";
      const chatSession = model.startChat({
        generationConfig,
        history: [
      {
        role: "user",
        parts: [
          {text: "You are movie recommended system, i need you to suggest the movie based on the user input, the user input is  Vijay most famous romatic movie . the result will looks like, i will give the example for you, you will need to give the same format answer for me and give only 5 movie name and no need to add anything just movie name with comma seprated , the example is 'nanban, kodi, leo, master, legend'"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "'Pokkiri,Kavalan,Thulladha Manamum Thullum,Ghilli,Kadhalukku Mariyadhai' \n"},
        ],
      },
    ],
    });
      const result = await chatSession.sendMessage(prompt);
      const gptResults = result.response.text().split(",");
      //? this will return the promises because it will make all the call's next to next , it doesn't wait until the promise is get resolved
      // const moviePromises = getEachMovieDetails(gptResults[0]);
      const moviePromises = gptResults.map((movie) => getEachMovieDetails(movie));
      //? need to resolve the promise
      const movieResults =await Promise.all(moviePromises);
      dispatch(addGptResults({movieResults:movieResults, movieQuery: gptResults }));
  }
  return (
    <div className='pt-[30%] md:pt-[14%] flex justify-center '>
        <form className="w-full bg-black rounded-lg  p-6 m-4 mb-0 flex justify-center" onSubmit={(e)=> e.preventDefault()}>
          <input 
            ref={searchText}
            type='text' className='m-4 px-4 py-2 rounded-md md:w-6/12 w-5/12' placeholder='what would you like to watch' />
            <button className='py-2 text-white px-4 m-4 bg-red-600 rounded-md md:w-2/12 w-3/12'
            onClick={handleGPTClick}
            >Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar