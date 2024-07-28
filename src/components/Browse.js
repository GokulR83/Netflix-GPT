import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import useTopRatedMovies2 from '../hooks/useTopRatedMovies2';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  const toggleGptSearch = useSelector(store => store.gpt.toggleGptSearch);
  useNowPlayingMovie();
  useTrendingMovies();
  useTopRatedMovies();
  useTopRatedMovies2();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {
        toggleGptSearch ? (<GptSearch />) : (
        <>
      <MainContainer />
      <SecondaryContainer />
      </>
      )
      }
    </div>
  )
}

export default Browse;