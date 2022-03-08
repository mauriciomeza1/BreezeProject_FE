import { useReducer } from 'react'

import axiosClient from './../../config/axios'

import DiaryContext from  './DiaryContext'
import DiaryReducer from './DiaryReducer'


const DiaryState  = (props) => {

	const initialState = {

		diaries: []

	}

	//console.log(useReducer(DrinksReducer, initialState))
	// => [valor1, valor2]
	// => [globalState, dispatch]  Dispatch se asegura que escenario quiero


	const [globalState, dispatch] = useReducer(DiaryReducer, initialState) //Desestruración de arreglos

	const getDiaries = async (diaryForm) => {

		const res = await axiosClient.get("http://localhost:3006/api/diary")

		const arrDiaries = res.data.data //PAY ATTENTION

		dispatch({
			type: "GET_DIARIES",
			payload: arrDiaries
		})

	}

	const createDiary = async (dataForm) => {

		await axiosClient.post("http://localhost:3006/api/diary/create", dataForm)


		getDiaries()

	}


	return (
		<DiaryContext.Provider
			value={{
				diaries: globalState.diaries,
				getDiaries,
				createDiary
			}}
		>
			{props.children}
		</DiaryContext.Provider>
	)


}


export default DiaryState