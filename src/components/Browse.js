import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        -MainContainer
          - VideoBackground
          - VideoTitle
        -SecondayContainer
          -ListOfVideos * N
           - videoCards * N
      */}

    </div>
  )
}

export default Browse;