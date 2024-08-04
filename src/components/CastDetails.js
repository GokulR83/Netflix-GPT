import React from 'react'
import useMovieDetails from '../hooks/useMovieDetails';
import CastCard from './CastCard';

const CastDetails = ({ MovieId }) => {
    const details = useMovieDetails(MovieId);
    if(!details) return null;
  return (
    <div className='px-3 pt-4  overflow-hidden bg-black'>
            <h1 className='text-white text-xl p-3  md:text-3xl md:p-7 pb-2'>{"Cast"}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    details.cast.map((c) =>(
                        <CastCard character={c.character} key={c.name} name={c.name} imgURL={c.profile_path} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CastDetails