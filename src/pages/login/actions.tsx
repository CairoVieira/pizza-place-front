import axios from "axios";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const login = (email: string, senha: string) => {
	const senhaCriptografada = btoa("Zap_" + senha + "_ata");
	axios
		.post(`${API_URL}/login`, { email, senha: senhaCriptografada })
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err));
};

export { login };
