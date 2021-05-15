import axios from "axios";
import Swal from "sweetalert2";
import { LISTA_BEBIDAS_GRUPO, LISTA_PIZZAS } from "../../store/reducersTypes";
import { IBebidas } from "../../interfaces/IBebidas";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const getPizzas = () => {
	return (dispatch: any) => {
		axios
			.get(`${API_URL}/pizzas/menu`)
			.then((response) => {
				for (let index = 0; index < response.data.length; index++) {
					const element = response.data[index];
					element.imagem = `pizza-${index + 1}`;
					element.quantidade = 1;
					element.valorTotal = element.valor;
				}

				const payload = response.data;
				dispatch({ type: LISTA_PIZZAS, payload });
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao buscar pizzas",
						"error"
					);
			});
	};
};

const getBebidasGrupo = () => {
	return (dispatch: any) => {
		return axios
			.get(`${API_URL}/bebidas/grupo`)
			.then((response) => {
				for (let index = 0; index < response.data.length; index++) {
					const element = response.data[index];
					element.forEach((item: IBebidas) => {
						item.imagem = `bebida-${index + 1}`;
						item.quantidade = 0;
						item.valorTotal = 0;
					});
				}
				const payload = response.data;
				dispatch({ type: LISTA_BEBIDAS_GRUPO, payload });
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

export { getPizzas, getBebidasGrupo };
