import React from "react";
import "./BookCard.css";

const BookCard = ({ book }) => {
  const { title, author_name, cover_i, first_publish_year } = book;

  // Open Library cover image URL (if exists)
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} className="book-image" />
      <h3 className="book-title">{title}</h3>
      {author_name && <p className="book-authors">{author_name.join(", ")}</p>}
      {first_publish_year && (
        <p className="book-year">First published: {first_publish_year}</p>
      )}
    </div>
  );
};

export default BookCard;
