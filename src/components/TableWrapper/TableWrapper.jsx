import React from "react";
import Pagination from "./Pagination";
import './table-wrapper.scss'

const TableWrapper = ({ children, items, itemsPerPage }) => {
  return (
    <>
      <div className="table-wrapper">{children}</div>
      <Pagination totalItems={items.length} {...{itemsPerPage}} />
    </>
  );
};

export default TableWrapper;
