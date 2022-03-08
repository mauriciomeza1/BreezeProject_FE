// ./src/components/Auth/Register.js


import { useState, useContext } from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Register() {

  const ctxUser = useContext(UsersContext)

  const {
    registerUser
  } = ctxUser


  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })


  const handleChange = (event) => {
    
    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    registerUser(data)

  }

  return (
<div className='register-container'>
  <div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form onSubmit={(evt) => { handleSubmit(evt) }}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>

            <input
             name="name"
             value={data.name}
             onChange={(evt) => { handleChange(evt) }}
             type="text" placeholder="Enter your name" required/>
          </div>

          <div className="input-box">
            <span 
            className="details">Email</span>
            <input 
            name="email"
            value={data.email}
            onChange={(evt) => { handleChange(evt) }}
            type="text" placeholder="Enter your username" required/>
          </div>
          
          <div className="input-box">
            <span 
            className="details">Password</span>
            <input
            name="password"
            value={data.password}
            onChange={(evt) => { handleChange(evt) }} 
            type="text" 
            placeholder="Enter your password" required/>
          </div>

          <div className="input-box">
            <span 
            className="details">Confirm Password</span>
            <input
            name="password"
            value={data.password}
            onChange={(evt) => { handleChange(evt) }} 
            type="text" 
            placeholder="Enter your password" required/>
          </div>

        </div>
        <div className="button">
          <input type="submit"/>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}