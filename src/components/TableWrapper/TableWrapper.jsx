import React from "react";
import Pagination from "./Pagination";
import './table-wrapper.scss'

const TableWrapper = ({ children, items, itemsPerPage, setCurrentPage }) => {

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <div className="table-wrapper">{children}</div>
      <Pagination totalItems={items.length} {...{itemsPerPage}} paginate={paginate} />
    </div>
  );
};

export default TableWrapper;
