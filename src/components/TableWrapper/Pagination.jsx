import React from "react";
import "./pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-number" onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
