import React, { useState } from "react";
import { MovieType } from "../../types/MovieType";
import Movie from "./Movie";

interface MovieListProps {
  movies: MovieType[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie: MovieType) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
