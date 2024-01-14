import { MovieDetailsType } from "./MovieDetails";

interface WatchedMovieProps {
  movie: MovieDetailsType;
}

const WatchedMovie: React.FC<WatchedMovieProps> = ({ movie }) => {
  return (
    <li key={movie.imdbRating}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime}</span>
        </p>
      </div>
    </li>
  );
};

export default WatchedMovie;
