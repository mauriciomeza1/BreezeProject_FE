const reducer = (globalState, action) => {

	switch (action.type) {
		case "GET_DIARIES":  
			return {
				...globalState,
				diaries: action.payload
			}

		default:
			return globalState
	}
}

export default reducer