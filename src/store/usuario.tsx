import {
	SET_CRIACOES,
	SET_ENDERECO,
	SET_ENDERECO_EDIT,
	SET_ENDERECO_NEW,
	SET_LISTA_ENDERECOS,
	SET_NOVO_ENDERECO_BAIRRO,
	SET_NOVO_ENDERECO_CEP,
	SET_NOVO_ENDERECO_CIDADE,
	SET_NOVO_ENDERECO_CLIENTE,
	SET_NOVO_ENDERECO_COMPLEMENTO,
	SET_NOVO_ENDERECO_ESTADO,
	SET_NOVO_ENDERECO_LOGRADOURO,
	SET_NOVO_ENDERECO_NUMERO,
	SET_USUARIO,
} from "./reducersTypes";

const INITIAL_STATE = {
	cpf: "",
	created_at: "",
	id: "",
	nome: "",
	updated_at: "",
	endereco: {},
	novoEndereco: {
		logradouro: "",
		numero: "",
		complemento: "",
		bairro: "",
		cep: "",
		cidade: "",
		estado: "AC",
		pais: "Brasil",
		cliente_id: "",
		is_principal: false,
	},
	listaEndereco: [],
	listaCriacoes: [],
};

const reducer = (state = INITIAL_STATE, action: any = {}) => {
	switch (action.type) {
		case SET_USUARIO:
			return {
				...state,
				cpf: action.payload.cpf,
				id: action.payload.id,
				created_at: action.payload.created_at,
				nome: action.payload.nome,
				updated_at: action.payload.updated_at,
			};
		case SET_ENDERECO:
			return { ...state, endereco: action.payload };
		case SET_LISTA_ENDERECOS:
			return { ...state, listaEndereco: action.payload };
		case SET_CRIACOES:
			return { ...state, listaCriacoes: action.payload };
		case SET_NOVO_ENDERECO_LOGRADOURO:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					logradouro: action.payload,
				},
			};
		case SET_NOVO_ENDERECO_NUMERO:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					numero: action.payload,
				},
			};
		case SET_NOVO_ENDERECO_COMPLEMENTO:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					complemento: action.payload,
				},
			};
		case SET_NOVO_ENDERECO_BAIRRO:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					bairro: action.payload,
				},
			};
		case SET_NOVO_ENDERECO_CEP:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					cep: action.payload,
				},
			};
		case SET_NOVO_ENDERECO_CIDADE:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					cidade: action.payload,
				},
			};
		case SET_NOVO_ENDERECO_ESTADO:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					estado: action.payload,
				},
			};
		case SET_NOVO_ENDERECO_CLIENTE:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					cliente_id: action.payload,
				},
			};
		case SET_ENDERECO_EDIT:
			return {
				...state,
				novoEndereco: {
					...state.novoEndereco,
					logradouro: action.payload.logradouro,
					numero: action.payload.numero,
					complemento: action.payload.complemento,
					bairro: action.payload.bairro,
					cep: action.payload.cep,
					cidade: action.payload.cidade,
					estado: action.payload.estado.toUpperCase(),
					id: action.payload.id,
				},
			};
		case SET_ENDERECO_NEW:
			return {
				...state,
				novoEndereco: INITIAL_STATE.novoEndereco,
			};
		default:
			return state;
	}
};
export default reducer;
