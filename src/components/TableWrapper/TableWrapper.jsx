import React from "react";
import { data } from "../../constants";
import Button from "../Button/Button";
import Select from "../Select/Select";
import Text from "../Text/Text";
import Pagination from "./Pagination";
import "./table-wrapper.scss";

const TableWrapper = ({
  children,
  items,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeHandler = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  }

  return (
    <div className="row">
      <div className="col-12 col-md-12">
        <div className="table-header">
          <div className="table-header-left-side">
            <Text medium align={`center`} size={14}>Show</Text>
            <Select
                  hasLabel={false}
                  label={``}
                  searchPlaceHolder={`Search`}
                  data={data.dropdownData}
                  value={``}
                  error={``}
                  name={`Rows`}
                  onChange={changeHandler}
                  defaultOptionLabel={`10`}
                />
            <Text medium align={`center`} size={14}> rows</Text>
          </div>
          <div className="table-header-right-side">
            <Button sm radius>Create Thing</Button>
          </div>
        </div>
        <div className="table-wrapper">{children}</div>
        <div className="table-footer">
          <Pagination
            totalItems={items.length}
            {...{ itemsPerPage }}
            paginate={paginate}
            {...{ currentPage }}
          />
        </div>
      </div>
    </div>
  );
};

export default TableWrapper;
