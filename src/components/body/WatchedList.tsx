import WatchedMovie from "./WatchedMovie";
import { MovieDetailType } from "../../types/MovieType";

interface WatchedListProps {
  watched: any;
}

const WatchedList: React.FC<WatchedListProps> = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie: MovieDetailType) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedList;
