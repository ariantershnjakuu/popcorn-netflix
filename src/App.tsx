import Box from "./components/body/Box";
import MovieList from "./components/body/MovieList";
import Logo from "./components/header/Logo";
import NavBar from "./components/header/NavBar";
import NumResults from "./components/header/NumResults";
import Search from "./components/header/Search";
import Main from "./components/Main";
import WatchedSummary from "./components/body/WatchedSummary";
import WatchedList from "./components/body/WatchedList";
import { useEffect, useState } from "react";
import Loader from "./utils/Loader";
import MovieDetails from "./components/body/MovieDetails";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [watched, setWatched]: any = useLocalStorageState([] as any, "watched");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const { movies, isLoading, error }: any = useMovies({
    query,
    callback: () => setSelectedId(""),
  });

  const handleAddWatched = (movie: any) => {
    setWatched((watched: any) => [...watched, movie] as never[]);
  };

  const handleRemoveWatched = (id: string) => {
    setWatched((watched: any) =>
      watched.filter((movie: any) => movie.imdbID !== id)
    );
  };

  const handleSelectId = (id: string) => {
    setSelectedId((selectedId) => (id === selectedId ? "" : id));
  };

  function handleCloseSelected() {
    setSelectedId("");
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && (
            <MovieList movies={movies} handleSelectedId={handleSelectId} />
          )}
          {error && <p className="error">{error}</p>}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handleCloseSelected={handleCloseSelected}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                handleRemoveWatched={handleRemoveWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

//CHALLENGE 1: CURRENCY CONVERTER
// import { useEffect, useState } from "react";

// type Rates = {
//   amount: number;
//   base: string;
//   date: string;
//   rates: {
//     [key: string]: number;
//   };
// };

// export default function App() {
//   const [amountRes, setAmount] = useState(1);
//   const [currencyFrom, setCurrencyFrom] = useState("EUR");
//   const [currencyTo, setCurrencyTo] = useState("USD");
//   const [converted, setConverted] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(
//         `https://api.frankfurter.app/latest?amount=${amountRes}&from=${currencyFrom}&to=${currencyTo}`
//       );
//       const data = await res.json();
//       setConverted(data.rates[currencyTo]);
//     }
//     fetchData();
//   }, [amountRes, currencyFrom, currencyTo]);
//   return (
//     <div>
//       <input
//         defaultValue={amountRes}
//         type="text"
//         onChange={(e) => setAmount(Number(e.target.value))}
//       />
//       <select
//         value={currencyFrom}
//         onChange={(e) => setCurrencyFrom(e.target.value)}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <select
//         value={currencyTo}
//         onChange={(e) => setCurrencyTo(e.target.value)}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <p>
//         {converted} {currencyTo}
//       </p>
//     </div>
//   );
// }
