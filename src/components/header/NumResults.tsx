import React from "react";
import { MovieType } from "../../types/MovieType";

interface NumResultsProps {
  movies: MovieType[];
}

const NumResults: React.FC<NumResultsProps> = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
