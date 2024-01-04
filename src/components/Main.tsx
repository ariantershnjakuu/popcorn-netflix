import React from "react";
import ListBox from "./body/ListBox";
import WatchedBox from "./body/WatchedBox";
import { MovieType } from "../types/MovieType";

interface MainProps {
  movies: MovieType[];
}

const Main: React.FC<MainProps> = ({ movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox movies={movies} />
    </main>
  );
};

export default Main;
