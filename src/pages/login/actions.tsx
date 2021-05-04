import axios from "axios";
import Swal from "sweetalert2";
import { SET_USUARIO } from "../../app/reducersTypes";
import history from "../../components/history";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const login = (email: string, senha: string) => {
	return (dispatch: any) => {
		const senhaCriptografada = btoa("Zap_" + senha + "_ata");
		axios
			.post(`${API_URL}/login`, { email, senha: senhaCriptografada })
			.then((res) => {
				const usuario = JSON.stringify(res.data);
				const payload = res.data;
				sessionStorage.setItem("user", usuario);
				dispatch({ type: SET_USUARIO, payload });
				history.go(-1);
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao fazer login",
						"error"
					);
			});
	};
};

export { login };
