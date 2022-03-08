import { useState} from 'react'


export default function Profile() {

    const [profile, setProfile] = useState({
        age: "",
        pronouns: "",
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
            pronouns: "",
            description: "",
            about: "",
            problems: "",
            needs: "",
            goals: ""
        })
        
    }

    

  return (

<>
    <form onSubmit= {(event) => {handleSubmit(event)}} >

  <div className="space-y-6">
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
          <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-md shadow-sm">
                </div>
              </div>
            </div>
  


            <div>
              <label for="about" className="block text-sm font-medium text-gray-700"> About </label>
              <div className="mt-1">
                <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                value = {profile.about}
                onChange = {(event) => { handleChange(event)}} placeholder="you@example.com"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>
  



   


            
            <div>
              <label for="age" className="block text-sm font-medium text-gray-700"> Age </label>
              <div className="mt-1">
                <input id="age" name="age" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                value = {profile.age} 
                onChange = {(event) => { handleChange(event)}}
                placeholder="you@example.com"/>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>


            <div>
              <label for="pronouns" className="block text-sm font-medium text-gray-700"> Pronouns </label>
              <div className="mt-1">
                <textarea id="pronouns" name="pronouns" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                value = {profile.pronouns} 
                onChange = {(event) => { handleChange(event)}}placeholder="you@example.com"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>






            <div>
              <label for="needs" className="block text-sm font-medium text-gray-700"> Needs </label>
              <div className="mt-1">
                <textarea id="needs" name="needs" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                value = {profile.needs}
                onChange = {(event) => { handleChange(event)}}
                placeholder="you@example.com"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>


            <div>
              <label for="goals" className="block text-sm font-medium text-gray-700"> Goals </label>
              <div className="mt-1">
                <textarea id="goals" name="goals" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                value = {profile.goals}
                onChange = {(event) => { handleChange(event)}}
                placeholder="you@example.com"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>






            <div>
              <label className="block text-sm font-medium text-gray-700"> Photo </label>
              <div className="mt-1 flex items-center space-x-5">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="flex justify-end">
      <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
      <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
    </div>
  </div>
  
  </form>





{/*         
        <form onSubmit= {(event) => {handleSubmit(event)}} >
        <label>Age</label>
        <input
            name = "age" 
            value = {profile.age}
            onChange = {(event) => { handleChange(event)}}
        />

        <label>pronouns</label>
        <input
            name = "pronouns" 
            value = {profile.pronouns}
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

        {
            
	        list.map((elt, index) => {
                return (
			        <div>
				        <h3>{elt.age}</h3>
				        <span>{elt.pronouns}</span>
				        <p>{elt.goals}</p>
			        </div>
		        )
            })
	    }*/}
  </>
  )
}
