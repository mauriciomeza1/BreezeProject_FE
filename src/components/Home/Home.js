import { useContext } from 'react'
import UsersContext from '../../context/Users/UsersContext'
import { Link } from 'react-router-dom'

export default function Home() {

	


	const ctxUsers = useContext(UsersContext)

	const {
		currentUser,
		verifyingToken
	} = ctxUsers



  return (
    <div>
<div class="relative bg-800">
  <div class="absolute inset-0">
    <img class="hero w-full h-full object-cover" src={require('./../../images/vector/Hero.png')} alt=""/>
    <div class="absolute inset-0 bg-800 mix-blend-multiply" aria-hidden="true"></div>
  </div>
  <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
    <p class="mt-6 text-xl text-indigo-100 max-w-3xl">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
  </div>
</div>

<div className=" w-full h-full mt-80 object-cover">
		<img className='homeinfo' src={require('./../../images/vector/backg.png')} />
		<img className='guydiary' src={require('./../../images/vector/GuyDiary.png')} />
		<div className='breezedescription'>
			<h2>
			The Breez Experience
			</h2>
			<p>
			Enjoy mindfulness and meditation experience online. Practice with us as much as you want on any digital device.
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

  
  <div className='hometext'>
			<p className='homep'>
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
			</p>
			<Link to="/register"><button>Start off</button></Link>
		</div>


    </div>
  )
}
