import React, { useState } from 'react'

function PolicyForm() {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
        e.prevenDefault()
        const formData = {
            name: name,
            mobile: mobile,
            amount: amount
        }
        // localStorage.setItem
        console.log('form', formData)
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1> {name} </h1>
                <input placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br/>
                <br/>
                <input placeholder="Mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <br/>
                <br/>
                <input placeholder="Amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <br/>
                <br/>
                <button onClick={handleSubmit}> Create </button>
            </form>
        </div>
    )
}
export default PolicyForm