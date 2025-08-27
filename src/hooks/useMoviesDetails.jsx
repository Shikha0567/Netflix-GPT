import React, { useEffect, useState } from "react";
import {
  TMDB_API_OPTION,
  TMDB_POPULAR_MOVIES_URL,
} from "../constants/Constants";

const useMoviesDetails = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [videoTrailerId, setVideoTrailerId] = useState([]);

  useEffect(() => {
    getTMDBPopularMovies();
  }, []);

  const getTMDBPopularMovies = async () => {
    try {
      const res = await fetch(TMDB_POPULAR_MOVIES_URL, TMDB_API_OPTION);
      const popularMovies = await res.json();
      setPopularMoviesList(popularMovies);
      if (popularMovies?.results?.length > 0) {
        getTMDBTrailerVideo(popularMovies?.results[0].id);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getTMDBTrailerVideo = async (id) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          { id } +
          "/videos?language=en-US",
        TMDB_API_OPTION
      );
      const trailerJson = await res.json();
      let trailerVideo =
        trailerJson?.results?.length &&
        trailerJson?.results?.filter((video) => video.type == "Trailer")[0];
      setVideoTrailerId(trailerVideo?.key);
    } catch (error) {
      console.log(error, "error");
    }
  };
  return [popularMoviesList, videoTrailerId];
};

export default useMoviesDetails;
