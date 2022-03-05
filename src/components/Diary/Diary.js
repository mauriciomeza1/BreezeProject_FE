import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'


export default function Diary() {

  
  return (
    <>
    
    <div>Your Diary</div>
    
  <Link 
      to="/new-diary">
        <div>Your Diary</div>
    </Link>
    </>
  )
}
