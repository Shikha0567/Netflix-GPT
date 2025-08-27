import React from "react";
import MovieCard from "./MovieCard";

const MoviesListContainer = ({ title, moviesList }) => {
  return (
    <div className="flex flex-col p-3 mx-5 relative z-30">
      <h1 className="text-2xl font-medium pb-3 text-white">{title}</h1>
      <div className="flex flex-row overflow-x-auto space-x-4 no-scrollbar">
        {moviesList?.length &&
          moviesList?.map((movie) => (
            <MovieCard key={movie.id} posterUrl={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MoviesListContainer;
