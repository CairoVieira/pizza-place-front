import { SET_USUARIO } from "./reducersTypes";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action: any = {}) => {
	switch (action.type) {
		case SET_USUARIO:
			return action.payload;
		default:
			return state;
	}
};
export default reducer;
