import { useState, useContext} from 'react'
import ProfileContext from '../../context/Profile/ProfileContext'



export default function Profile() {

  const ctxProfile = useContext(ProfileContext)

  const {
    profiles,
    getProfile,
    createProfile
  } = ctxProfile

    const [newProfile, setProfile] = useState({
        age: "",
        pronouns: "",
        about: "",
        needs: "",
        goals: ""
    })


    const handleChange = (event) => {
        console.log(event.target.value)

        setProfile({
            ...newProfile,
            [event.target.name]: event.target.value
        })

    }



    const handleSubmit = (event) => {
      event.preventDefault()

      createProfile(newProfile)

    }

    

  return (

<>

<div className='register-container'>
  <div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form onSubmit={(evt) => { handleSubmit(evt) }}>
        
        <div className="user-details">
          <div className="input-box">
            <span className="details">Age</span>
            <input
            name = "age" 
            value = {setProfile.age}
            onChange={(e) => { handleChange(e) }}
             type="text" placeholder="Enter your name" required/>
          </div>

          <div className="input-box">
            <span 
            className="details">Pronouns</span>
            <input 
            name = "pronouns" 
            value = {setProfile.pronouns}
            onChange={(e) => { handleChange(e) }}
            type="text" placeholder="Enter your username" required/>
          </div>
          
          <div className="input-box">
            <span 
            className="details">Description</span>
            <input
            name = "description" 
            value = {setProfile.description}
            onChange={(e) => { handleChange(e) }}
            placeholder="Enter your password" required/>
          </div>

          <div className="input-box">
            <span 
            className="details">About</span>
            <input
            name = "about" 
            value = {setProfile.about}
            onChange={(e) => { handleChange(e) }}
            type="text" 
            placeholder="Enter your password" required/>
          </div>
          
          <div className="input-box">
            <span 
            className="details">Problems</span>
            <input
            name = "problems" 
            value = {setProfile.problems}
            onChange={(e) => { handleChange(e) }}
            type="text" 
            placeholder="Enter your password" required/>
          </div>


          <div className="input-box">
            <span 
            className="details">Needs</span>
            <input
            name = "needs" 
            value = {setProfile.needs}
            onChange={(e) => { handleChange(e) }}
            type="text" 
            placeholder="Enter your password" required/>
          </div>


          <div className="input-box">
            <span 
            className="details">Goals</span>
            <input
            name = "goals" 
            value = {setProfile.goals}
            onChange={(e) => { handleChange(e) }}
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










        {/* <form onSubmit= {(event) => {handleSubmit(event)}} >
        <label>Age</label>
        <input
            name = "age" 
            value = {setProfile.age}
            onChange={(e) => { handleChange(e) }}
        />

        <label>Pronouns</label>
        <input
            name = "pronouns" 
            value = {setProfile.pronouns}
            onChange={(e) => { handleChange(e) }}
        />

        <label>Description</label>
        <input
            name = "description" 
            value = {setProfile.description}
            onChange={(e) => { handleChange(e) }}
        />

        <label>About</label>
        <input
            name = "about" 
            value = {setProfile.about}
            onChange={(e) => { handleChange(e) }}
        />

        <label>Problems</label>
        <input
            name = "problems" 
            value = {setProfile.problems}
            onChange={(e) => { handleChange(e) }}
        />

        <label>Needs</label>        
        <input
            name = "needs" 
            value = {setProfile.needs}
            onChange={(e) => { handleChange(e) }}
        />
        
        <label>Goals</label>
        <input
            name = "goals" 
            value = {setProfile.goals}
            onChange={(e) => { handleChange(e) }}
        />  

        <button className="profilesubmit" type="submit" onClick={() =>{ getProfile() }}>SUBMIT</button>

     
        </form>  */}

        {/* <div className="somecontainer">
        <h2 className="youprofile">Your Profile</h2>
        {
            profiles.map((elt, index) => {
                return (
                    <div key = {elt._key}>
                        <h3>{elt.age} </h3>
                        <h3>{elt.pronouns} </h3>                        <h3>{elt.age} </h3>
                        <h3>{elt.about} </h3>                        <h3>{elt.age} </h3>
                        <h3>{elt.needs} </h3>                        <h3>{elt.age} </h3>
                        <h3>{elt.goals} </h3> 
                    </div>
              )  
            })
        }  
</div>  */}
  </>
  )
}
