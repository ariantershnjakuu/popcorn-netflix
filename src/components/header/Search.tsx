import React, { useEffect } from "react";
import { useRef } from "react";

interface SearchProps {
  query: string;
  setQuery: any;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  const inputFocus = useRef<any>();

  useEffect(() => {
    const callback = (e: any) => {
      if (document.activeElement === inputFocus.current) return;
      if (e.code === "Enter") {
        inputFocus.current.focus();
        setQuery("");
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.addEventListener("keydown", callback);
    };
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputFocus}
    />
  );
};

export default Search;
