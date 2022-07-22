import { useCallback, useEffect, useState } from "react";
import "./toast.scss";

const Toast = ({ type, orientation, setOpenToast }) => {
  let toastProperties;
  switch (type) {
    case "success":
      toastProperties = {
        id: 1,
        title: "Success",
        description: "This is a success toast component",
        backgroundColor: "#5cb85c",
      };
      break;
    case "danger":
      toastProperties = {
        id: 2,
        title: "Danger",
        description: "This is a danger toast component",
        backgroundColor: "#d9534f",
      };
      break;
    case "info":
      toastProperties = {
        id: 3,
        title: "Info",
        description: "This is a info toast component",
        backgroundColor: "#5bc0de",
      };
      break;
    case "warning":
      toastProperties = {
        id: 4,
        title: "Warning",
        description: "This is a warning toast component",
        backgroundColor: "#f0ad4e",
      };
      break;
    default:
      toastProperties = [];
  }

  const closeToast = useCallback(() => {
    setOpenToast(false);
  }, [setOpenToast]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastProperties) {
        closeToast();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastProperties, closeToast]);

  return (
    <div
      className={`container ${
        orientation === "bottom-right" ? `bottom-right` : orientation === 'top-right' && `top-right`
      }`}
    >
      <div
        key={toastProperties.id}
        className={`notification toast ${
          orientation === "bottom-right" ? `bottom-right` : orientation === 'top-right' && `top-right`
        }`}
        style={{ backgroundColor: toastProperties.backgroundColor }}
      >
        <button onClick={() => closeToast()}><i className="bx bx-x"/></button>
        <div>
          <p className={`title`}>{toastProperties.title}</p>
          <p className={`description`}>{toastProperties.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
