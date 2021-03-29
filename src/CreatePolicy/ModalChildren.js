import React from "react";
import Modal from "./Modal";

function ModalChildren(props) {
  return (
    <div>
      <Modal show={props.showModal} handleClose={(e) => props.modalClose(e)}>
        <div className="bg-warning mx-auto">
          <div className="form-group" style={{ align: "center" }}>
            <h1>Enter details</h1>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={props.firstName}
              onChange={(e) => props.setFirstName(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.firstNameError}</p>
            <br />
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={props.lastName}
              onChange={(e) => props.setLastName(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.lastNameError}</p>
            <br />
            <input
              placeholder="Mobile"
              type="number"
              name="mobile"
              value={props.mobile}
              onChange={(e) => props.setMobile(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.mobileError}</p>
            <br />
            <input
              placeholder="Amount"
              type="number"
              name="amount"
              value={props.amount}
              onChange={(e) => props.setAmount(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.amountError}</p>
            <br />
            {props.operation === "save" ? (
              <div className="form-group">
                <button class="btn btn-danger " onClick={props.handleSubmit}>
                  Save
                </button>
              </div>
            ) : (
              <div className="form-group">
                {console.log(props.operation)}
                <button class="btn btn-danger " onClick={props.handleEdit}>
                  update
                </button>
              </div>
            )}
            <div className="form-group">
              <button class="btn btn-danger" onClick={props.modalClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ModalChildren;
