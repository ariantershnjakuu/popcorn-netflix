import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";
import { MovieType } from "../../types/MovieType";

interface NavProps {
  movies: MovieType[];
}

const Nav: React.FC<NavProps> = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
};

export default Nav;
