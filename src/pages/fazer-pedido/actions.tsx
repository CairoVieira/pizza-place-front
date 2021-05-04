import axios from "axios";
import Swal from "sweetalert2";
import * as actionHome from "../home/actions";
import {
	FILTRAR_BEBIDAS_GRUPO,
	FILTRAR_PIZZAS,
	LISTA_INGREDIENTES,
	SET_USUARIO,
} from "../../app/reducersTypes";
import { IPizzas } from "../../interfaces/IPizzas";
import { IBebidas } from "../../interfaces/IBebidas";

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
				dispatch({ type: LISTA_INGREDIENTES, action: payload });
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
		}
	};
};

const handleFiltrarPedido = (
	listaPizzas: Array<IPizzas>,
	listaBebidas: Array<Array<IBebidas>>
) => {
	console.log("1.0", listaPizzas, listaBebidas);
	return (dispatch: any) => {
		dispatch({ type: FILTRAR_PIZZAS, payload: listaPizzas });
		dispatch({ type: FILTRAR_BEBIDAS_GRUPO, payload: listaBebidas });
	};
};
export {
	getIngredientes,
	getBebidasGrupo,
	getPizzas,
	getUsuario,
	handleFiltrarPedido,
};
