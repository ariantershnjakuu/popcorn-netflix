import WatchedMovie from "./WatchedMovie";
import { MovieDetailsType } from "./MovieDetails";

interface WatchedListProps {
  watched: any;
  handleRemoveWatched: any;
}

const WatchedList: React.FC<WatchedListProps> = ({
  watched,
  handleRemoveWatched,
}) => {
  return (
    <ul className="list">
      {watched.map((movie: MovieDetailsType) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          handleRemoveWatched={handleRemoveWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
