import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
