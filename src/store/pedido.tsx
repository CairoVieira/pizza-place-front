import { IItensPedido } from "../interfaces/IItensPedido";
import {
	SET_CRIAR_PIZZA_ITENS,
	SET_CRIAR_PIZZA_ITENS_ADD,
	SET_CRIAR_PIZZA_NOME,
	SET_PEDIDO_BEBIDA,
	SET_PEDIDO_ENDERECO,
	SET_PEDIDO_PAGAMENTO,
	SET_PEDIDO_PIZZA,
	SET_PEDIDO_USUARIO,
	SET_PEDIDO_VALOR,
	SET_ULTIMO_PEDIDO,
} from "./reducersTypes";

const INITIAL_STATE = {
	id: "",
	cliente_id: "",
	endereco_id: "",
	valor: 0,
	metodo_pagamento: "",
	itens_pedido: [],
	criar_pizza: {
		nome: "",
		valor: 0,
		itens_pizza: [],
	},
	ultimo_pedido: {
		itens_pedido: [],
	},
};

const reducer = (state = INITIAL_STATE, action: any = {}) => {
	let itens: IItensPedido[];
	let itensPizza: string[] = [];

	switch (action.type) {
		case SET_PEDIDO_USUARIO:
			return { ...state, cliente_id: action.payload };
		case SET_PEDIDO_ENDERECO:
			return { ...state, endereco_id: action.payload };
		case SET_PEDIDO_PAGAMENTO:
			return { ...state, metodo_pagamento: action.payload };
		case SET_PEDIDO_VALOR:
			return { ...state, valor: state.valor + action.payload };
		case SET_PEDIDO_PIZZA:
			itens = state.itens_pedido.filter(
				(i: IItensPedido) => i.pizza_id !== action.payload.pizza_id
			);
			itens.push(action.payload);
			return {
				...state,
				itens_pedido: itens,
			};
		case SET_PEDIDO_BEBIDA:
			itens = state.itens_pedido.filter(
				(i: IItensPedido) => i.bebida_id !== action.payload.bebida_id
			);
			itens.push(action.payload);
			return {
				...state,
				itens_pedido: itens,
			};
		case SET_CRIAR_PIZZA_NOME:
			return {
				...state,
				criar_pizza: { ...state.criar_pizza, nome: action.payload },
			};
		case SET_CRIAR_PIZZA_ITENS:
			console.log("state. action.payload,", action.payload);
			return {
				...state,
				criar_pizza: {
					...state.criar_pizza,
					itens_pizza: action.payload,
				},
			};
		case SET_CRIAR_PIZZA_ITENS_ADD:
			console.log("state.criar_pizza", state.criar_pizza);
			itensPizza = state.criar_pizza.itens_pizza;
			itensPizza.push(action.payload);
			return {
				...state,
				criar_pizza: {
					...state.criar_pizza,
					itens_pizza: itensPizza,
				},
			};
		case SET_ULTIMO_PEDIDO:
			return { ...state, ultimo_pedido: action.payload };
		default:
			return state;
	}
};
export default reducer;
