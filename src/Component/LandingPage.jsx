import Header from "./Header";
import MainVideo from "./MainVideo";
import MainMovieInfo from "./MainMovieInfo";
import useMoviesList from "../hooks/useMoviesList";
import {
  TMDB_NOW_PLAYING_MOVIES_URL,
  TMDB_POPULAR_MOVIES_URL,
  TMDB_TOP_RATED_MOVIES_URL,
  TMDB_UPCOMING_MOVIES_URL,
} from "../constants/Constants";
import useMainMovieTrailerVideo from "../hooks/useMainMovieTrailerVideo";
import MoviesListContainer from "./MoviesListContainer";
import { useEffect, useState } from "react";
import { debounce } from "../Utilities";

const LandingPage = () => {
  //const [popularMoviesList, videoTrailerId] = useMoviesDetails();
  const popularMoviesList = useMoviesList(TMDB_POPULAR_MOVIES_URL);
  const upcomingMoviesList = useMoviesList(TMDB_UPCOMING_MOVIES_URL);
  const topRatedMoviesList = useMoviesList(TMDB_TOP_RATED_MOVIES_URL);
  const nowPlayingMoviesList = useMoviesList(TMDB_NOW_PLAYING_MOVIES_URL);
  const trailerVideoId = useMainMovieTrailerVideo(popularMoviesList);

  //State to track how many times to render 4 lists
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      console.log(bottom, "bottom");
      if (bottom) {
        setCounter((prev) => prev + 1);
      }
    }, 200);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderMovieRecommendations = (index) => {
    return (
      <div key={index} className="bg-black">
        {popularMoviesList?.length > 0 && (
          <div className="mt-[-100px]">
            <MoviesListContainer
              title="Popular Movies"
              moviesList={popularMoviesList}
            />
          </div>
        )}
        {topRatedMoviesList?.length > 0 && (
          <MoviesListContainer
            title="Top Rated Movies"
            moviesList={topRatedMoviesList}
          />
        )}
        {nowPlayingMoviesList?.length > 0 && (
          <MoviesListContainer
            title="Now Playing Movies"
            moviesList={nowPlayingMoviesList}
          />
        )}
        {upcomingMoviesList?.length > 0 && (
          <MoviesListContainer
            title="Upcoming Movies"
            moviesList={upcomingMoviesList}
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <Header />
      {popularMoviesList?.length > 0 && (
        <div className="relative pb-[40%] overflow-hidden">
          <MainVideo videoId={trailerVideoId} />
          <MainMovieInfo info={popularMoviesList ? popularMoviesList[0] : []} />
        </div>
      )}
      {[...Array(counter)].map((_, idx) => renderMovieRecommendations(idx))}
    </div>
  );
};

export default LandingPage;
