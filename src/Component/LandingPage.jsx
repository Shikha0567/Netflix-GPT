import Header from "./Header";
import useMoviesDetails from "../hooks/useMoviesDetails";
import MainVideo from "./MainVideo";
import MainMovieInfo from "./MainMovieInfo";

const LandingPage = () => {
  const [popularMoviesList, videoTrailerId] = useMoviesDetails();

  return (
    <div className="flex flex-col">
      <Header />
      <MainVideo videoId={videoTrailerId} />
      <MainMovieInfo
        info={popularMoviesList?.results ? popularMoviesList?.results[0] : []}
      />
    </div>
  );
};

export default LandingPage;
