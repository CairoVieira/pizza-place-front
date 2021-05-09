import axios from "axios";
import Swal from "sweetalert2";
import { IBebidas } from "../../interfaces/IBebidas";
import { IEndereco } from "../../interfaces/IEndereco";
import { IPedidos } from "../../interfaces/IPedido";
import { IPizzas } from "../../interfaces/IPizzas";
import { IUsuario } from "../../interfaces/IUsuario";
import { SET_ENDERECO } from "../../store/reducersTypes";
import * as actionsFazerPedido from "../fazer-pedido/actions";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const addPedido = (
	usuario: IUsuario,
	endereco: IEndereco,
	pizza: IPizzas,
	bebida: IBebidas,
	pagamento: string
) => {
	return (dispatch: any) => {
		dispatch(
			actionsFazerPedido.addPedido(
				usuario,
				endereco,
				pizza,
				bebida,
				pagamento
			)
		);
	};
};

const setEndereco = (endereco: IEndereco) => {
	return (dispatch: any) => {
		dispatch({ type: SET_ENDERECO, payload: endereco });
	};
};

const fazerPedido = (pedido: IPedidos) => {
	return (dispatch: any) => {
		return axios
			.post(`${API_URL}/pedidos`, pedido)
			.then((response) => {
				const payload = response.data;
				Swal.fire(
					"Pedido realizado!",
					`Pedido #${payload.id} recebido!`,
					"success"
				);
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao fazer o seu pedido",
						"error"
					);
			});
	};
};
export { addPedido, setEndereco, fazerPedido };
