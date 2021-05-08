import { IItensPedido } from "../interfaces/IItensPedido";
import {
	SET_PEDIDO_BEBIDA,
	SET_PEDIDO_PIZZA,
	SET_PEDIDO_USUARIO,
	SET_PEDIDO_VALOR,
} from "./reducersTypes";

const INITIAL_STATE = {
	id: "",
	cliente_id: "",
	endereco_id: "",
	valor: 0,
	metodo_pagamento: "",
	itens_pedido: [],
};

const reducer = (state = INITIAL_STATE, action: any = {}) => {
	let itens: IItensPedido[];

	switch (action.type) {
		case SET_PEDIDO_USUARIO:
			return { ...state, cliente_id: action.payload };
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
		default:
			return state;
	}
};
export default reducer;
