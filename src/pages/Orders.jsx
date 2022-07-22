import React, { useState } from "react";
import DashboardWrapper, {
  DashboardHeader,
  DashboardBody,
} from "../components/DashboardWrapper/DashboardWrapper";
import Modal from "../components/Modal/Modal";
import TableWrapper from "../components/TableWrapper/TableWrapper";
import Toast from "../components/Toast/Toast";
import { orders } from "../constants";
const Orders = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  //Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const toggleNewModal = () => {
    document.documentElement.style.overflowY = `hidden`;
    setShowNewModal(true);
  };

  return (
    <DashboardWrapper>
      <DashboardHeader
        icon={`receipt`}
        title={`Orders  `}
        subtitle={`This is an example dashboard created using build-in elements and components.`}
      />
      <DashboardBody>
        <TableWrapper
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          items={orders}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          buttonTitle={`Add new Order`}
          toggleNewModal={toggleNewModal}
        >
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
                <th className="column8">Actions</th>
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
                  <td key={`column8`} className={`column8`}>
                    <button
                      className="table-btn"
                      onClick={() => {
                        console.log(index);
                        document.documentElement.style.overflowY = `hidden`;
                        setShowEditModal(true);
                      }}
                    >
                      <i className="bx bx-pencil table-edit-icon" />
                    </button>
                    <button className="table-btn">
                      <i className="bx bx-trash-alt table-delete-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </DashboardBody>
      {showNewModal && (
        <Modal
          key={`newOrderModal`}
          title={`New thing`}
          setOpenModal={setShowNewModal}
          handleClick={() => {
            document.documentElement.removeAttribute("style");
            setShowNewModal(false);
            setOpenToast(true);
          }}
        />
      )}
      {showEditModal && (
        <Modal
          key={`editOrderModal`}
          title={`Edit thing`}
          setOpenModal={setShowEditModal}
          handleClick={() => {
            document.documentElement.removeAttribute("style");
            setShowEditModal(false);
            setOpenToast(true);
          }}
        />
      )}
      {openToast && (
        <Toast
          setOpenToast={setOpenToast}
          type={`success`}
          orientation={`bottom-right`}
        />
      )}
    </DashboardWrapper>
  );
};

export default Orders;
