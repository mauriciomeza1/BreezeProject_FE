const reducer = (globalState, action) => {

	switch (action.type) {
		case "GET_PROFILE":
			return {
				...globalState,
			    profile: action.payload
			}

		default:
			return globalState
	}
}

export default reducer