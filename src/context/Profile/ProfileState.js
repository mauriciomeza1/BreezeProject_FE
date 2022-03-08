import { useReducer } from 'react'

import axiosClient from './../../config/axios'

import ProfileContext from './ProfileContext'
import ProfileReducer from './ProfileReducer'


const ProfileState = (props) => {

	const initialState = {
        profiles: []
	}


    const [globalState, dispatch] = useReducer(ProfileReducer, initialState)
	
	const getProfile = async (profileform) => {
			
	  const res = await axiosClient.get("http://localhost:3006/api/profile")	

       const arrProfile = res.data.data

		dispatch({
			type: "GET_PROFILE",
			dispatch: arrProfile
			})
	}



	const createProfile = async (dataForm) => {

		await axiosClient.post("http://localhost:3006/api/profile/create", dataForm)

		getProfile()

	}

	return (
		<ProfileContext.Provider
			value={{
				profiles: globalState.profiles,
				createProfile,
				getProfile
			}}
		>
			{ props.children }
		</ProfileContext.Provider>
	)
}

export default ProfileState