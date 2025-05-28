import React, { useState, useEffect } from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { title, author_name, cover_i, first_publish_year, key } = book;

  const [isValidImage, setIsValidImage] = useState(true);

  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : null;

  const bookID = key?.split("/").pop();

  useEffect(() => {
    if (!coverUrl) {
      setIsValidImage(false);
      return;
    }

    const img = new Image();
    img.src = coverUrl;
    img.onload = () => {
      if (img.width > 1000 || img.height > 1500) {
        setIsValidImage(false);
      }
    };
    img.onerror = () => {
      setIsValidImage(false);
    };
  }, [coverUrl]);

  return (
    <div className="book-card">
      {bookID && (
        <Link to={`/book/${bookID}`} className="card-link" aria-label={`View details of ${title}`} />
      )}
      <div className="book-image-container">
        {isValidImage ? (
          <img src={coverUrl} alt={title} className="book-image" />
        ) : (
          <div className="no-image">No image</div>
        )}
      </div>
      <h3 className="book-title">{title}</h3>
      {author_name && <p className="book-authors">{author_name.join(", ")}</p>}
      {first_publish_year && (
        <p className="book-year">First published: {first_publish_year}</p>
      )}
      <button className="detail-button">Detail</button>
    </div>
  );
};

export default BookCard;