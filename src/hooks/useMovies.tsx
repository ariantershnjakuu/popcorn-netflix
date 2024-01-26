import React, { useEffect, useState } from "react";

interface useMoviesProps {
  query: string;
  callback: () => void;
}

export const useMovies: React.FC<useMoviesProps> = ({ query, callback }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const rest = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!rest.ok) throw new Error("Something went wrong with fetching!");

        const data = await rest.json();
        if (data.Response === "False") throw new Error("Movie not found!");
        setMovies(data.Search);
        setError("");
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error } as any;
};
