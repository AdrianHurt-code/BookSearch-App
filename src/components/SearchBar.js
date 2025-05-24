import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch, onLoading }) => {
  const [query, setQuery] = useState("");

  const fetchBooks = async (query) => {
    try {
      onLoading(true); // Spustí loader
      const response = await fetch(
        `/search.json?title=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      onSearch(data.docs); // Vrátí všechny výsledky
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      onLoading(false); // Zastaví loader
    }
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      fetchBooks(query);
    }
  };

  return (
    <div className="search">
      <input
        className="search-field"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter name of the title"
        id="input-search"
      />
      <button className="search-button" onClick={handleSearch}>
        SEARCH DATABASE
      </button>
    </div>
  );
};

export default SearchBar;
