import { useState} from 'react'


export default function Profile() {

    const [profile, setProfile] = useState({
        age: "",
        gender: "",
        description: "",
        about: "",
        problems: "",
        needs: "",
        goals: ""
    })


    const [list, setList] = useState([])

    const [error, setError] = useState("")

    const handleChange = (event) => {
        console.log(event.target.value)

        setProfile({
            ...profile,
            [event.target.name]: event.target.value
        })

    }



    const handleSubmit = (event) => {
        event.preventDefault()

        setList([
            ...list,
            profile
        ])

        setProfile ({
            age: "",
            gender: "",
            description: "",
            about: "",
            problems: "",
            needs: "",
            goals: ""
        })
        
    }

    

  return (
    <>

        <h1>Your Profile</h1>
        <form onSubmit= {(event) => {handleSubmit(event)}} >

        
        <label>Age</label>
        <input
            name = "age" 
            value = {profile.age}
            onChange = {(event) => { handleChange(event)}}
        />

        <label>Gender</label>
        <input
            name = "gender" 
            value = {profile.gender}
            onChange = {(event) => { handleChange(event)}}
        />

        <label>Description</label>
        <input
            name = "description" 
            value = {profile.description}
            onChange = {(event) => { handleChange(event)}}
        />

        <label>About</label>
        <input
            name = "about" 
            value = {profile.about}
            onChange = {(event) => { handleChange(event)}}
        />

        <label>Problems</label>
        <input
            name = "problems" 
            value = {profile.problems}
            onChange = {(event) => { handleChange(event)}}
        />

        <label>Needs</label>        
        <input
            name = "needs" 
            value = {profile.needs}
            onChange = {(event) => { handleChange(event)}}
        />
        
        <label>Goals</label>
        <input
            name = "goals" 
            value = {profile.goals}
            onChange = {(event) => { handleChange(event)}}
        />  

        <button type='submit'>Crear perfil</button>

        <p>{error}</p>
        </form>

        <h2>Profile</h2>

        {
            list.length === 0 ? <p>No hay publicaciones</p>
            :
	        list.map((elt, index) => {
                return (
			        <div>
				        <h3>{elt.age}</h3>
				        <span>{elt.gender}</span>
				        <p>{elt.goals}</p>
			        </div>
		        )
            })
	    }
    </>
  )
}
