import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams(); // id je ve formátu OL123W
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [edition, setEdition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        // Načtení detailů díla (work)
        const workResponse = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );
        const workData = await workResponse.json();
        setBook(workData);

        // Získání seznamu edic (editions)
        const editionsResponse = await fetch(
          `https://openlibrary.org/works/${id}/editions.json?limit=1`
        );
        const editionsData = await editionsResponse.json();

        if (editionsData.entries && editionsData.entries.length > 0) {
          const editionKey = editionsData.entries[0].key; // např. "/books/OL123M"
          const editionId = editionKey.split("/").pop(); // "OL123M"
          const editionResponse = await fetch(
            `https://openlibrary.org/books/${editionId}.json`
          );
          const editionData = await editionResponse.json();
          setEdition(editionData);
        }
      } catch (error) {
        console.error("Chyba při načítání detailu knihy:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetail();
  }, [id]);

  const coverUrl = book?.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : "https://via.placeholder.com/300x450?text=No+Cover";

  return (
    <div className="book-detail-container">
      {loading ? (
        <p>Loading...</p>
      ) : book ? (
        <div className="book-detail-card">
          <img src={coverUrl} alt={book.title} className="book-detail-image" />
          <div className="book-detail-content">
            <h2>{book.title}</h2>

            <p>
              <strong>Author:</strong>{" "}
              {edition?.authors
                ? edition.authors
                    .map((author) =>
                      author.name ? author.name : "Author is not available"
                    )
                    .join(", ")
                : "Neznámý autor"}
            </p>

            {edition?.number_of_pages && (
              <p>
                <strong>Number of pages:</strong> {edition.number_of_pages}
              </p>
            )}

            {edition?.publishers && (
              <p>
                <strong>Publisher:</strong> {edition.publishers.join(", ")}
              </p>
            )}

            {edition?.publish_date && (
              <p>
                <strong>Publishing Date:</strong> {edition.publish_date}
              </p>
            )}

            {edition?.identifiers?.isbn_10 && (
              <p>
                <strong>ISBN-10:</strong>{" "}
                {edition.identifiers.isbn_10.join(", ")}
              </p>
            )}

            {edition?.identifiers?.isbn_13 && (
              <p>
                <strong>ISBN-13:</strong>{" "}
                {edition.identifiers.isbn_13.join(", ")}
              </p>
            )}

            <p>
              <strong>Description</strong>{" "}
              {book.description
                ? typeof book.description === "string"
                  ? book.description
                  : book.description.value
                : "Description is not available"}
            </p>

            <button className="back-button" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      ) : (
        <p>Book was not found</p>
      )}
    </div>
  );
};

export default BookDetail;
