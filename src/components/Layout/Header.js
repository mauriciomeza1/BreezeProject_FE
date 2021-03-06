// . /src/components/Layout/Header.js

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'


export default function Header() {


	const ctxUser = useContext(UsersContext)

	const {
		currentUser,
		authStatus,
		logoutUser
	} = ctxUser


  return (
	<>
		<header className="topnav" id="myTopnav">
			<figure className='thelogo'>
			<Link to="/">WRITE AND BREEZE</Link>	
			</figure>
				
			
				<div className='links'>
				<Link to = "/">Home</Link>
				<Link to ="/diary">Your Diary</Link>
				<Link to ="/about" >About Us </Link>
				</div>
			
			 <div>
				<ul>
					{
						authStatus ?
						(
							<>
								<li>
									<Link to="/" onClick={() => {logoutUser()}} >
										Log Out		
									</Link>
								</li>
								<li>Hey {currentUser.name}!</li>



								
							</>
						) :
						(
							<>

								<Link className='signupbutton' to ="/login">Log In</Link>
								<Link className='signupbutton' to ="/register">Sign up</Link>
			
							</>
						)

					}

					
					

				</ul>
				</div> 


		</header>
	
	</>


  )
}