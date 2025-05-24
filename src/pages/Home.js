import React, { useState, useRef } from "react";
import QuoteSlider from "../components/QuoteSlider";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const booksPerPage = 20;

  const bookListRef = useRef(null);

  const handleSearchResults = (results) => {
    setBooks(results);
    setCurrentPage(1);
    // Scrollnutí ke knihám
    setTimeout(() => {
      if (bookListRef.current) {
        bookListRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // Výpočet rozsahu knih pro aktuální stránku
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="home-page-space">
      <QuoteSlider />
      <h1 className="find-quote">Find your book!</h1>

      <SearchBar onSearch={handleSearchResults} onLoading={setIsLoading} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div ref={bookListRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
  <BookList books={currentBooks} />
</div>
          {books.length > booksPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(books.length / booksPerPage)}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
