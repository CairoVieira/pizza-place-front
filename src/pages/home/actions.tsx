import axios from "axios";
import Swal from "sweetalert2";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const getPizzas = () => {
	return axios
		.get(`${API_URL}/pizzas`)
		.then((response) => response.data)
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

const getBebidasGrupo = () => {
	return axios
		.get(`${API_URL}/bebidas/grupo`)
		.then((response) => response.data)
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

export { getPizzas, getBebidasGrupo };
