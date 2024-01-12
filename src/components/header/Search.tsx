import React, { useState } from "react";

interface SearchProps {
  query: string;
  setQuery: any;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
