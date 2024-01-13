import { useEffect, useState } from "react";
import StartComponent from "../../utils/StarComponent";
import Loader from "../../utils/Loader";

interface MovieDetailsProps {
  handleCloseSelected: any;
  selectedId: string;
}

type MovieDetailsType = {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({
  selectedId,
  handleCloseSelected,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({} as MovieDetailsType);
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

  const { Title, Poster, imdbRating, Plot, Actors, Director, Genre } = movie;

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
              <StartComponent maxRating={10} size={24} />
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
