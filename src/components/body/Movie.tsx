import { MovieType } from "../../types/MovieType";

interface MovieProps {
  movie: MovieType;
  handleSelectedId?: any;
}

const Movie: React.FC<MovieProps> = ({ movie, handleSelectedId }) => {
  return (
    <li key={movie.imdbID} onClick={() => handleSelectedId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
