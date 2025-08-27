import React from "react";
import { TMDB_IMG_BASE_URL } from "../constants/Constants";

const MovieCard = ({ posterUrl }) => {
  return (
    <div className="w-[340px] h-[240px] flex-shrink-0">
      <img
        className="w-full h-full object-cover"
        alt="movie card"
        src={TMDB_IMG_BASE_URL + posterUrl}
      />
    </div>
  );
};

export default MovieCard;
