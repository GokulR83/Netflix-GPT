import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'


const GptSearch = () => {
  return (
    <div>
        <div className="-z-10 fixed h-screen w-full">
                <img
                className="object-cover w-full h-full"
                src={BG_URL} alt="bg-image" />
            </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch