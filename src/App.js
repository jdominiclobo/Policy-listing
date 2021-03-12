import './App.css';
import React, { useState } from 'react'
import Modal from './Modal'


function App() {

  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [policeis, setPolicies] = useState([{name: 'josh', mobile: '1234567890', amount: '20$'}])

  const handleSubmit =(e) =>{
    e.preventDefault()
    const formData = {
      name: name,
      number: number,
      amount: amount
    }
    // handleSubmit(formData)
    console.log('form', formData)
    modalClose();
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
      <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dany</td>
            <td>9638527417</td>
            <td>45</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="App" className="container">
        <button type="button" class="btn btn-secondary" href="javascript:;" onClick={e => modalOpen(e)} >
          Create policy
        </button>
        
        <Modal show={showModal} handleClose={e => modalClose(e)} align="center">
          <div className="bg-primary w-25 p-3 justify-content-between">
          <h2>Hey there!</h2>
          <div className="form-group">
            <label>Enter Details</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-control"
            />
            <input
              type="text"
              name="number"
              onChange={e => setNumber(e.target.value)}
              className="form-control"
            />
             <input
              type="text"
              name="number"
              onChange={e => setAmount(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={handleSubmit}> 
              Save
            </button>
          </div>
          <div className="form-group">
            <button onClick={modalClose}> 
              cancel
            </button>
          </div>
          </div>
        </Modal>
      </div>
   </div>
  );
}

export default App;
