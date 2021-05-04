import { SET_USUARIO } from "../../app/reducersTypes";

const INITIAL_STATE = {
	dados: {},
};

export default (state = INITIAL_STATE, action: any = {}) => {
	switch (action.type) {
		case SET_USUARIO:
			return { ...state, dados: action.payload };
		default:
			return state;
	}
};
