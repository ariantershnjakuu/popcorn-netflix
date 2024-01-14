import WatchedMovie from "./WatchedMovie";
import { MovieDetailsType } from "./MovieDetails";

interface WatchedListProps {
  watched: any;
}

const WatchedList: React.FC<WatchedListProps> = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie: MovieDetailsType) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedList;
