// ./src/components/Home/Home.js

import { useContext } from 'react'
import UsersContext from './../../context/Users/UsersContext'





export default function Home() {

	


	const ctxUsers = useContext(UsersContext)

	const {
		currentUser,
		verifyingToken
	} = ctxUsers




  return (
	<>




		<img className='hero' src={require('./../../images/vector/Hero.png')} />
		<div className='herocontent'>
			<h3 className='herotext1'>
			Nemo enim
			</h3>
			<h3 className='herotext2'>
			Adipiscing elit proin felis justo
			</h3>

			<button className='herobutton'>Learn more</button>

		</div>

		<div className='hometext'>
			<p className='homep'>
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
			</p>
			<button>Start off</button>
		</div>
		
		
		 {/* <p>Verificar autenticación</p>
		<button onClick={() => { verifyingToken() }}>VERIFICAR</button>

		<h1 className='tuusuario'>Tu usuario:</h1>
		<p>{currentUser.name}</p>
		<p>{currentUser.lastname}</p>
		<p>{currentUser.email}</p> */}


		<div>   



		<img className='homeinfo' src={require('./../../images/vector/backg.png')} />
		<img className='guydiary' src={require('./../../images/vector/GuyDiary.png')} />
		<div className='breezedescription'>
			<h2>
			The Breez Experience
			</h2>
			<p>
			Enjoy guided mindfulness and meditation classes online. Practice with us as much as you want on any digital device.
			</p>

			<div className='homesub'>
				<h3>
				Personal Diary
				</h3>
				<p>
				I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
				</p>

				<h3>
				Mood Tracker
				</h3>
				<p>
				I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
				</p>

			</div>

		</div>
		</div>
		





	</>
  )
}