import React, { useEffect } from "react";
import { useRef } from "react";
import useKey from "../../hooks/useKey";

interface SearchProps {
  query: string;
  setQuery: any;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  const inputFocus = useRef<any>();

  useKey({
    key: "Enter",
    action: () => {
      if (document.activeElement === inputFocus.current) return;
      inputFocus.current.focus();
      setQuery("");
    },
  });

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
