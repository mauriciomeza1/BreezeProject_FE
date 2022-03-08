import { useReducer } from 'react'

import axiosClient from './../../config/axios'

import DiaryContext from './PetsContext'
import DiaryReducer from './PetsReducer'


const DiaryState  = (props) => {

	const initialState = {

		diaries: ""

	}

	//console.log(useReducer(DrinksReducer, initialState))
	// => [valor1, valor2]
	// => [globalState, dispatch]  Dispatch se asegura que escenario quiero


	const [globalState, dispatch] = useReducer(DiaryReducer, initialState) //Desestruración de arreglos

	const getDiaries = async (diaryForm) => {

		const res = await axiosClient.get("/api/diary/newdiary")

		const arrDiaries = res.data.data

		dispatch({
			type: "GET_DIARIES",
			payload: arrDiaries
		})

	}

	const createDiary = async (dataForm) => {

		await axiosClient.post("/api/diary/new-diary", dataForm)

		getDiaries()

	}


	return (
		<DiaryContext.Provider
			value={{
				diaries: globalState.diary,
				getDiaries,
				createDiary
			}}
		>
			{props.children}
		</DiaryContext.Provider>
	)


}


export default DiaryState