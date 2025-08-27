import React, { useEffect, useState } from "react";
import { TMDB_API_OPTION } from "../constants/Constants";

const useMoviesList = (url) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchMoviesList(url);
  }, []);

  const fetchMoviesList = async (url) => {
    try {
      const response = await fetch(url, TMDB_API_OPTION);
      const jsonData = await response.json();
      if (jsonData?.results?.length > 0) {
        setMoviesList(jsonData?.results);
      }
    } catch (error) {
      console.log("error while fetching movies list", error);
    }
  };
  return moviesList;
};

export default useMoviesList;
