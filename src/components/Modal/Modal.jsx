import React, { useCallback, useEffect, useRef } from "react";
import Text from "../Text/Text";
import "./modal.scss";

function Modal({ title, setOpenModal, openModal, handleClick }) {
  const modalEl = useRef();
  const closeModal = useCallback(() => {
    document.documentElement.removeAttribute("style");
    setOpenModal(false);
  }, [setOpenModal]);

  const handleClickOutside = useCallback(
    (e) => {
      if (
        openModal &&
        e.target.closest(".modal-background") !== modalEl.current
      ) {
        closeModal();
      }
    },
    [closeModal, openModal]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="modal-background" ref={modalEl}>
      <div className="modal-container">
        <div className="header row">
          <div className="col-6 col-md-6">
            <Text semi size={20}>
              {title}
            </Text>
          </div>
          <div className="col-6 col-md-6 close-btn-wrapper">
            <button className="close-btn" onClick={() => closeModal()}>
              <i className="bx bx-x" />
            </button>
          </div>
          {/* <div className="row">
        </div> */}
        </div>
        <div className="body">
          <div className="col-12 col-md-12">
            <p>The next page looks amazing. Hope you want to go there!</p>
          </div>
        </div>
        <div className="footer">
          <div className="col-6 col-md-6">
            <button onClick={() => closeModal()} id="cancelBtn">
              Cancel
            </button>
          </div>
          <div className="col-6 col-md-6">
            <button onClick={handleClick}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
