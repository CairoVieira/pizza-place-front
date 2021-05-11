import axios from "axios";
import Swal from "sweetalert2";
import { IUsuario } from "../../interfaces/IUsuario";
import { SET_ULTIMO_PEDIDO, SET_USUARIO } from "../../store/reducersTypes";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const getUsuario = () => {
	return (dispatch: any) => {
		const usuario = sessionStorage.getItem("user");
		if (usuario) {
			const payload: IUsuario = JSON.parse(usuario);
			dispatch({ type: SET_USUARIO, payload });
			dispatch(getUltimoPedido(payload));
		}
	};
};

const getUltimoPedido = (usuario: IUsuario) => {
	return (dispatch: any) => {
		console.log("here", usuario.id);
		return axios
			.get(`${API_URL}/pedidos/ultimo/${usuario.id}`)
			.then((response) => {
				const payload = response.data;
				dispatch({ type: SET_ULTIMO_PEDIDO, payload });
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao buscar último pedido",
						"error"
					);
			});
	};
};

export { getUsuario, getUltimoPedido };
