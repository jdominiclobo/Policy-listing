import './App.css';
import React, { useState } from 'react'
import ModalChildren from './ModalChildren'

function App() {

  const [showModal, setShowModal] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError ] = useState('')

  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('')

  const [mobile, setMobile] = useState('')
  const [mobileError, setMobileError] = useState('')

  const [amount, setAmount] = useState('')
  const [amountError, setAmountError] = useState('')

  const [policies, setPolicies] = useState([])

  const handleSubmit =(e) => {
    e.preventDefault()
    if(validation()){
    const formData = {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      amount: amount
    }
    // don't do this
    // const currentPolicies = policies;
    // currentPolicies.push(formData);

    // do this
    setPolicies(prevState => {
      return [...prevState, formData]
      })
      modalClose();
    }
  } 
   

  const validation = () => {
    let isValid = true;
    setFirstNameError('')
    setLastNameError('')
    setMobileError('')
    setAmountError('')
    if(!firstName) {
      setFirstNameError('Please enter a first name')
      isValid = false
    }
    if(!lastName) {
      setLastNameError('Please enter a last name')
      isValid = false
    }
    if(!mobile.length) {
      setMobileError('Please enter mobile number')
      isValid = false;
    } else if(mobile.length != 10 ) {
      setMobileError('enter a valid mobile number')
      isValid = false;
    }
    if(!amount.length) {
      setAmountError('please enter a policy amount')
    } else if(amount > 35) {
      setAmountError('Policy can only be of $35 and less')
      isValid = false;
    }
    return isValid
  }

  const modalOpen = () => {
    setShowModal(true)
  }

  const modalClose = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <h1>Policies</h1>
      <br />
      {policies.length != 0 ? (<div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            policies.map((policy, index) => {
             return ( 
             <tr>
                <th scope="row" key={function uniqueID() {
                  return Math.floor(Math.random() * Date.now())
                  }}>{index + 1}</th>
                <td>{policy.firstName}</td>
                <td>{policy.lastName}</td>
                <td>{policy.mobile}</td>
                <td>{ '$ ' + policy.amount}</td>
              </tr>
             )
            })
          }
        </tbody>
      </table>
      </div>) : null}
      <div className="container" className="col-md">
        <button type="button" class="btn btn-secondary" href="javascript:;" onClick={e => modalOpen(e)} >
          Create policy
        </button>
        
        <ModalChildren 
          showModal={showModal} modalClose={modalClose} 
          setFirstName={setFirstName} firstNameError={firstNameError}
          setLastName={setLastName}  lastNameError={lastNameError}
          setMobile={setMobile}  mobileError={mobileError}
          setAmount={setAmount} amountError={amountError}
          handleSubmit={handleSubmit}
        />
       
      </div>
   </div>
  );
}

export default App;
