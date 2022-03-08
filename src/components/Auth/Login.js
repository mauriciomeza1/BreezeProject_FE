// ./src/components/Auth/Login.js
import {useContext, useState} from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Login() {

  const ctxUser = useContext(UsersContext)

  const {
    loginUser
  } = ctxUser


  const [data, setData] = useState({
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

    loginUser(data)

  }


  return (
    

<div className='login-container'> 
  <div className="container">
    <div className="title">Log In</div>
    <div className="content">
      <form onSubmit={(evt) => { handleSubmit(evt) }}>
        <div className="user-details">
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
            type="password" 
            placeholder="Enter your password" required/>
          </div>
        </div>
        <div className="button">
          <input type="submit" />
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}




    