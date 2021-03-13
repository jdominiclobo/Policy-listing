import React from 'react'
import Modal from './Modal'


function ModalChildren(props) {
    return (
        <div>
            <Modal show={props.showModal} handleClose={e => props.modalClose(e)} >
            <div className="bg-secondary mx-auto" >
            <h2>Hey there!</h2>
            <div className="form-group">
            <label>Enter Details</label>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={props.firstName}
              onChange={e => props.setFirstName(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.firstNameError}</p>
            <br />
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={props.lastName}
              onChange={e => props.setLastName(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.lastNameError}</p>
            <br />
            <input
              placeholder="Mobile"
              type="number"
              name="mobile"
              value={props.mobile}
              onChange={e => props.setMobile(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.mobileError}</p>
            <br />
             <input
              placeholder="Amount"
              type="number"
              name="amount"
              value={props.amount}
              onChange={e => props.setAmount(e.target.value)}
              className="form-control"
            />
            <p style={{ color: "red" }}>{props.amountError}</p>
            <br />
          </div>
          <div className="form-group">
            <button class="btn btn-dark " onClick={props.handleSubmit}> 
              Save
            </button>
          </div>
          <div className="form-group">
            <button class="btn btn-dark" onClick={props.modalClose}> 
              cancel
            </button>
          </div>
          </div>
        </Modal>
        </div>
    )
}
export default ModalChildren