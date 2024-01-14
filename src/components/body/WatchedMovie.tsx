import { MovieDetailsType } from "./MovieDetails";

interface WatchedMovieProps {
  movie: MovieDetailsType;
  handleRemoveWatched: any;
}

const WatchedMovie: React.FC<WatchedMovieProps> = ({
  movie,
  handleRemoveWatched,
}) => {
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
        <button
          className="btn-delete"
          onClick={() => handleRemoveWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
