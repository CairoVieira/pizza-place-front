import { SET_USUARIO } from "../../app/reducersTypes";

const INITIAL_STATE = {
	usuario: {},
};

const reducer = (state = INITIAL_STATE, action: any = {}) => {
	switch (action.type) {
		case SET_USUARIO:
			return {
				...state,
				usuario: action.payload,
			};
		default:
			return state;
	}
};
export default reducer;
