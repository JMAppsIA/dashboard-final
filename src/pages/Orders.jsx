import React, { useState } from "react";
import { DashboardHeader } from "../components/DashboardWrapper/DashboardWrapper";
import TableWrapper from "../components/TableWrapper/TableWrapper";
import { orders } from "../constants";
const Orders = () => {
  const [itemsPerPage] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1);

  //Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  return (


    <>
    <DashboardHeader
            icon={`receipt`}
            title={`Orders  `}
            subtitle={`This is an example dashboard created using build-in elements and components.`}
          />
    <TableWrapper itemsPerPage={itemsPerPage} items={orders} setCurrentPage={setCurrentPage}>
      <table>
        <thead>
          <tr className="table100-head">
            <th className="column3">Order ID</th>
            <th className="column1">Date</th>
            <th className="column2">Hour</th>
            <th className="column4">Name</th>
            <th className="column5">Price</th>
            <th className="column6">Quantity</th>
            <th className="column7">Total</th>
          </tr>
        </thead>
        <tbody>
            {currentItems.map((order, index) => (
              <tr key={index}>
                <td key={`column1`} className={`column1`}>
                  {order.id}
                </td>
                <td key={`column2`} className={`column2`}>
                  {order.date}
                </td>
                <td key={`column3`} className={`column3`}>
                  {order.time}
                </td>
                <td key={`column4`} className={`column4`}>
                  {order.name}
                </td>
                <td key={`column5`} className={`column5`}>
                  {order.price}
                </td>
                <td key={`column6`} className={`column6`}>
                  {order.quantity}
                </td>
                <td key={`column7`} className={`column7`}>
                  {order.total}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableWrapper>
    </>
  );
};

export default Orders;
