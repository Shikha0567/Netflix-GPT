import React, { useEffect, useState } from "react";
import { TMDB_API_OPTION } from "../constants/Constants";

const useMainMovieTrailerVideo = (moviesList) => {
  const [videoTrailerId, setVideoTrailerId] = useState([]);

  useEffect(() => {
    if (moviesList?.length > 0) {
      getTMDBTrailerVideo(moviesList[0].id);
    }
  }, [moviesList]);

  const getTMDBTrailerVideo = async (id) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
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
  return videoTrailerId;
};

export default useMainMovieTrailerVideo;
