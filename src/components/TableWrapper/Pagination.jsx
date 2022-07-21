import React, { useEffect, useMemo, useState } from "react";
import "./pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  // eslint-disable-next-line
  const pageNumbers = [];
  const [activeIndex, setActiveIndex] = useState(0);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    const activeItem = pageNumbers.findIndex((item) => item === currentPage);
    setActiveIndex(currentPage === 1 ? 1 : activeItem + 1);
  }, [pageNumbers, currentPage]);

  return (
    <div className="row pagination-wrapper">
      <div className="col-4 col-md-3">
        <span
          onClick={() => paginate(currentPage - 1)}
          className={`pagination-label ${
            currentPage <= 1 ? `pagination-label-disabled` : ``
          }`}
        >
          Prev
        </span>
      </div>
      <div className="col-4 col-md-6">
        <ul className="pagination pagination-info">
          {pageNumbers.length > 2 ? (
            <>
              <li
                key={1}
                className={`pagination-number ${
                  activeIndex === 1 && `pagination-number-active`
                }`}
                onClick={() => paginate(1)}
              >
                {1}
              </li>
              <li
                key={2}
                className={`pagination-number ${
                  activeIndex === 2 && `pagination-number-active`
                }`}
                onClick={() => paginate(2)}
              >
                {2}
              </li>

              <li key={`dots`} className={`pagination-number disabled`}>
                {`...`}
              </li>

              <li
                key={pageNumbers.length - 1}
                className={`pagination-number ${
                  activeIndex === pageNumbers.length - 1 &&
                  `pagination-number-active`
                }`}
                onClick={() => paginate(pageNumbers.length - 1)}
              >
                {pageNumbers.length - 1}
              </li>
              <li
                key={pageNumbers.length}
                className={`pagination-number ${
                  activeIndex === pageNumbers.length &&
                  `pagination-number-active`
                }`}
                onClick={() => paginate(pageNumbers.length)}
              >
                {pageNumbers.length}
              </li>
            </>
          ) : (
            pageNumbers.map((number, index) => (
              <li
                key={index}
                className={`pagination-number ${
                  activeIndex === number && `pagination-number-active`
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="col-4 col-md-3">
        <span
          className={`pagination-label ${
            currentPage === pageNumbers.length
              ? `pagination-label-disabled`
              : ``
          }`}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Pagination;
