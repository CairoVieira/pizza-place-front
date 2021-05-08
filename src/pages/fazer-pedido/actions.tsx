import axios from "axios";
import Swal from "sweetalert2";
import * as actionHome from "../home/actions";
import {
	FILTRAR_BEBIDAS_GRUPO,
	FILTRAR_PIZZAS,
	LISTA_INGREDIENTES,
	SET_BEBIDA_SELECIONADA,
	SET_PEDIDO_BEBIDA,
	SET_PEDIDO_PIZZA,
	SET_PEDIDO_USUARIO,
	SET_PEDIDO_VALOR,
	SET_PIZZA_SELECIONADA,
	SET_USUARIO,
} from "../../store/reducersTypes";
import { IPizzas } from "../../interfaces/IPizzas";
import { IBebidas } from "../../interfaces/IBebidas";
import { IUsuario } from "../../interfaces/IUsuario";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const getPizzas = () => {
	return (dispatch: any) => {
		dispatch(actionHome.getPizzas());
	};
};

const getBebidasGrupo = () => {
	return (dispatch: any) => {
		dispatch(actionHome.getBebidasGrupo());
	};
};

const getIngredientes = () => {
	return (dispatch: any) => {
		return axios
			.get(`${API_URL}/ingredientes`)
			.then((response) => {
				const payload = response.data;
				dispatch({ type: LISTA_INGREDIENTES, payload });
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao buscar bebidas",
						"error"
					);
			});
	};
};

const getUsuario = () => {
	return (dispatch: any) => {
		const usuario = sessionStorage.getItem("user");
		if (usuario) {
			const payload = JSON.parse(usuario);
			dispatch({ type: SET_USUARIO, payload });
			dispatch({ type: SET_PEDIDO_USUARIO, payload });
		}
	};
};

const handleFiltrarPedido = (
	listaPizzas: Array<IPizzas>,
	listaBebidas: Array<Array<IBebidas>>
) => {
	return (dispatch: any) => {
		dispatch({ type: FILTRAR_PIZZAS, payload: listaPizzas });
		dispatch({ type: FILTRAR_BEBIDAS_GRUPO, payload: listaBebidas });
	};
};

const setBebidaSelecionada = (bebida: Array<IBebidas>) => {
	return (dispatch: any) => {
		dispatch({ type: SET_BEBIDA_SELECIONADA, payload: bebida });
	};
};

const setPizzaSelecionada = (pizza: IPizzas) => {
	return (dispatch: any) => {
		dispatch({ type: SET_PIZZA_SELECIONADA, payload: pizza });
	};
};

const addPedido = (usuario: IUsuario, pizza: IPizzas, bebida: IBebidas) => {
	return (dispatch: any) => {
		if (usuario) {
			dispatch({ type: SET_PEDIDO_USUARIO, payload: usuario.id });
		}
		if (pizza) {
			const pedido_pizza = {
				pizza_id: pizza.id,
				valor_item_pedido: pizza.valorTotal,
			};
			dispatch({ type: SET_PEDIDO_PIZZA, payload: pedido_pizza });
			dispatch({
				type: SET_PEDIDO_VALOR,
				payload: pedido_pizza.valor_item_pedido,
			});
			Swal.fire(
				"Pizza adicionada",
				`Foi adicionado ${pizza.qtd} ${
					pizza.qtd > 1 ? "pizzas" : "pizza"
				} ${pizza.nome} ao seu pedido!`,
				"success"
			);
		}

		if (bebida) {
			const pedido_bebida = {
				bebida_id: bebida.id,
				valor_item_pedido: bebida.qtd * bebida.valor,
			};
			dispatch({ type: SET_PEDIDO_BEBIDA, payload: pedido_bebida });
			dispatch({
				type: SET_PEDIDO_VALOR,
				payload: pedido_bebida.valor_item_pedido,
			});
		}
	};
};

export {
	getIngredientes,
	getBebidasGrupo,
	getPizzas,
	getUsuario,
	handleFiltrarPedido,
	setBebidaSelecionada,
	setPizzaSelecionada,
	addPedido,
};
