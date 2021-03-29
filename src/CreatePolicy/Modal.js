import React from "react";

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div
      className={showHideClassName}
      style={{
        position: "fixed",
        top: "60%",
        left: "50%",
        transform: ' translate("-50%", "-50%")',
        width: "1200px",
        maxWidth: "100%",
        height: "1000px",
        maxHeight: "100%",
      }}
    >
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Modal;
