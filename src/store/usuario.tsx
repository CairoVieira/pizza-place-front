import {
	SET_ENDERECO,
	SET_LISTA_ENDERECOS,
	SET_USUARIO,
} from "./reducersTypes";

const INITIAL_STATE = {
	cpf: "",
	created_at: "",
	id: "",
	nome: "",
	updated_at: "",
	endereco: {},
	listaEndereco: [],
};

const reducer = (state = INITIAL_STATE, action: any = {}) => {
	switch (action.type) {
		case SET_USUARIO:
			return action.payload;
		case SET_ENDERECO:
			return { ...state, endereco: action.payload };
		case SET_LISTA_ENDERECOS:
			return { ...state, listaEndereco: action.payload };
		default:
			return state;
	}
};
export default reducer;
