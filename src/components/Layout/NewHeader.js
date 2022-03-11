import { useContext } from 'react'
import UsersContext from '../../context/Users/UsersContext'
import { Link } from 'react-router-dom'

export default function NewHeader() {
  
	const ctxUser = useContext(UsersContext)

	const {
		currentUser,
		authStatus,
		logoutUser
	} = ctxUser

  return (
    <div>
        

        <nav>
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">

      <div class="flex space-x-4">
        <div>
          <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
          <figure className='thelogo'>
			<Link to="/">WRITE AND BREEZE</Link>	
			</figure>
             
          </a>
        </div>

        {/* <!-- primary nav --> */}
        <div class="hidden md:flex items-center space-x-1">
        <Link to ="/diary" class="py-5 px-3 text-gray-700 hover:text-gray-900">Your Diary</Link>
        <Link to ="/mood-report" class="py-5 px-3 text-gray-700 hover:text-gray-900">Mood Report</Link>
        </div>
      </div>






      {/* <!-- secondary nav --> */}
      <div class="hidden md:flex items-center space-x-1">
      <Link className='signupbutton py-5 px-3"' to ="/login" >Log In</Link>
      <Link to ="/registro" className="signupbutton py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</Link>
      </div>

      {/* <!-- mobile button goes here --> */}
      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  {/* <!-- mobile menu --> */}
  <div class="mobile-menu hidden md:hidden">
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
  </div>
</nav>


{/* <div>
				<ul>
					{
						authStatus ?
						(
							<>
								<li>
									<Link to="/" onClick={() => {logoutUser()}} >
										Cerrar sesión		
									</Link>
								</li>
								<li>Hola {currentUser.name}!</li>



								
							</>
						) :
						(
							<>

								<Link className='signupbutton' to ="/login">Log In</Link>
								<Link className='signupbutton' to ="/registro">Sign up</Link>
			
							</>
						)

					}

					
					

				</ul>
				</div>  */}






    </div>
  )
}



