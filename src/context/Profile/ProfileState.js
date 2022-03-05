import { useReducer } from 'react'

import ProfileContext from './ProfileContext'
import ProfileReducer from './ProfileReducer'

import axiosClient from './../../config/axios'

const ProfileState = (props) => {

	const initialState = {
        profile: [],
	}


    const [globalState, dispatch] = useReducer(ProfileReducer, initialState)
	

	const getProfile = async (form) => {
			
	  const res = await axiosClient.post("/api/profile", form)	

       const arrProfile = res.data.data

		dispatch({
			type: "REGISTRO_EXITOSO",
			dispatch: arrProfile
			})
	}



	const createProfile = async (form) => {

		await axiosClient.get("/api/profile/create")

		getProfile

		const listData = res.data.data  // [{},{}]

		dispatch({
			type: "OBTENER_DATA",
			payload: listData
		})

	}

	return (
		<ProfileContext.Provider
			value={{
				profile: globalState.profile,
				createProfile,
				getProfile
			}}
		>
			{ props.children }
		</ProfileContext.Provider>
	)
}

export default ProfileState