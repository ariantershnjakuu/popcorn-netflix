import React, { useState } from "react";
import MovieList from "./MovieList";
import { MovieType } from "../../types/MovieType";

interface ListBoxProps {
  movies: MovieType[];
}

const ListBox: React.FC<ListBoxProps> = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default ListBox;
