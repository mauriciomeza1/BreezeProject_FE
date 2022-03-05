const reducer = (globalState, action) => {

	switch (action.type) {
		case "REGISTRO_EXITOSO":
			return {
				...globalState,
			    profile: action.payload
			}

		default:
			return globalState
	}
}

export default reducer