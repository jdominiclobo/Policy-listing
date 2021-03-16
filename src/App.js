import "./App.css";
import React, { useState, useEffect } from "react";
import ModalChildren from "./ModalChildren";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");

  const [policies, setPolicies] = useState([]);

  const [operation, setOperation] = useState("");

  const [id, setId] = useState("");

  useEffect(() => {
    console.log("policies", policies);
  }, [policies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      const formData = {
        id: Math.floor(Math.random() * Date.now()),
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        amount: amount,
      };
      // don't do this
      // const currentPolicies = policies;
      // currentPolicies.push(formData);

      // do this
      setPolicies((prevState) => {
        return [...prevState, formData];
      });
      setFirstName("");
      setLastName("");
      setMobile("");
      setAmount("");
      modalClose();
    }
  };

  const validation = () => {
    let isValid = true;
    setFirstNameError("");
    setLastNameError("");
    setMobileError("");
    setAmountError("");
    if (!firstName) {
      setFirstNameError("Please enter a first name");
      isValid = false;
    }
    if (!lastName) {
      setLastNameError("Please enter a last name");
      isValid = false;
    }
    if (!mobile.length) {
      setMobileError("Please enter mobile number");
      isValid = false;
    } else if (mobile.length != 10) {
      setMobileError("enter a valid mobile number");
      isValid = false;
    }
    if (!amount.length) {
      setAmountError("please enter a policy amount");
    } else if (amount > 35) {
      setAmountError("Policy can only be of $35 and less");
      isValid = false;
    }
    return isValid;
  };

  const modalOpen = () => {
    setShowModal(true);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  const openEditModal = (id) => {
    setId(id);
    const [formData] = policies.filter((policy) => policy.id === id);
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setMobile(formData.mobile);
    setAmount(formData.amount);
    setOperation("update");
    modalOpen();
  };

  const handleEdit = () => {
    const index = policies.findIndex((policy) => policy.id === id);
    console.log("index", index);
    if (validation()) {
      const formData = {
        firstName,
        lastName,
        mobile,
        amount,
      };
      setPolicies((prevState) => {
        return [
          ...prevState.slice(0, index),
          formData,
          ...prevState.slice(index + 1),
        ];
        // prevState.forEach((policy) => {
        //   if (policy.id == id) {
        //     console.log("check this value", policy.id, id);
        //     if (validation()) {
        //       policy.firstName = firstName;
        //       policy.lastName = lastName;
        //       policy.mobile = mobile;
        //       policy.amount = amount;
        //     }

        //   }
        // });
        // return prevState;
      });
    }
    setFirstName("");
    setLastName("");
    setMobile("");
    setAmount("");
    modalClose();
  };

  const handleDelete = (policyId) => {
    alert("Are you sure?");
    setPolicies((prevState) =>
      prevState.filter((policy) => policy.id !== policyId)
    );
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <h1>Policies</h1>
        </a>
      </nav>
      <br />
      {policies.length != 0 ? (
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy, index) => {
                return (
                  <tr>
                    <th
                      scope="row"
                      key={function uniqueID() {
                        return Math.floor(Math.random() * Date.now());
                      }}
                    >
                      {index + 1}
                    </th>

                    <td>{policy.firstName}</td>
                    <td>{policy.lastName}</td>
                    <td>{policy.mobile}</td>
                    <td>{"$ " + policy.amount}</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button
                          type="button"
                          class="btn btn-success btn-lg"
                          onClick={() => openEditModal(policy.id)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-lg"
                          onClick={() => handleDelete(policy.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
      <div className="container" className="col-md">
        <button
          type="button"
          class="btn btn-danger btn-lg"
          href="javascript:;"
          onClick={(e) => {
            setOperation("save");
            modalOpen(e);
          }}
        >
          Create policy
        </button>

        <ModalChildren
          showModal={showModal}
          modalClose={modalClose}
          firstName={firstName}
          setFirstName={setFirstName}
          firstNameError={firstNameError}
          lastName={lastName}
          setLastName={setLastName}
          lastNameError={lastNameError}
          mobile={mobile}
          setMobile={setMobile}
          mobileError={mobileError}
          amount={amount}
          setAmount={setAmount}
          amountError={amountError}
          handleSubmit={handleSubmit}
          operation={operation}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
