import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import useTopRatedMovies2 from '../hooks/useTopRatedMovies2';

const Browse = () => {
  useNowPlayingMovie();
  useTrendingMovies();
  useTopRatedMovies();
  useTopRatedMovies2();
  useUpComingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;