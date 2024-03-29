import { useEffect, useRef, useState } from "react";
import StartComponent from "../../utils/StarComponent";
import Loader from "../../utils/Loader";
import useKey from "../../hooks/useKey";

interface MovieDetailsProps {
  handleCloseSelected: any;
  selectedId: string;
  onAddWatched: any;
  watched: any;
}

export type MovieDetailsType = {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbID: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
  userRating: number;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({
  selectedId,
  handleCloseSelected,
  onAddWatched,
  watched,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({} as MovieDetailsType);
  const [userRating, setUserRating] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  // useEffect(() => {
  //   function callback(e: any) {
  //     if (e.code === "Escape") {
  //       handleCloseSelected("");
  //     }
  //   }

  //   document.addEventListener("keydown", callback);

  //   return () => {
  //     document.removeEventListener("keydown", callback);
  //   };
  // }, [handleCloseSelected]);

  useKey({ key: "Escape", action: handleCloseSelected });

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${selectedId}`
      );
      const data = await response.json();
      setMovie(data);
      setIsLoading(false);
    }
    fetchMovieDetails();
  }, [selectedId]);

  const { Title, Poster, imdbRating, Plot, Actors, Director, Genre, Runtime } =
    movie;

  const handleAdd = () => {
    const newMovie = {
      Title,
      Poster,
      imdbID: selectedId,
      Plot,
      imdbRating: Number(imdbRating),
      Actors,
      Director,
      Genre,
      Runtime: Number(Runtime.split(" ")[0]),
      userRating,
      countRatingDesicions: countRef.current,
    };
    onAddWatched(newMovie);
    handleCloseSelected();
  };

  const isWatched = watched
    .map((movie: MovieDetailsType) => movie.imdbID)
    .includes(selectedId);

  const watchedUserRating = watched.find(
    (movie: MovieDetailsType) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(() => {
    if (!Title) return;
    document.title = `Movie | ${Title}`;
    return () => {
      document.title = "Popcorn Netflix";
    };
  }, [Title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={handleCloseSelected}>
              &larr;
            </button>
            <img src={Poster} alt="" />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>{Genre}</p>
              <p>
                ⭐️
                <span>{imdbRating}</span>
                IMB Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StartComponent
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this moviem with {watchedUserRating} ⭐️</p>
              )}
            </div>
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>
              Directed by <strong>{Director}</strong>
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
