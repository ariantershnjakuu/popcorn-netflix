import React from "react";
import { MovieType } from "../../types/MovieType";
import Movie from "./Movie";

interface MovieListProps {
  movies: MovieType[];
  handleSelectedId: any;
}

const MovieList: React.FC<MovieListProps> = ({ movies, handleSelectedId }) => {
  return (
    <ul className="list">
      {movies?.map((movie: MovieType) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleSelectedId={handleSelectedId}
        />
      ))}
    </ul>
  );
};

export default MovieList;
