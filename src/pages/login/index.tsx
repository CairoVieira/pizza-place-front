import { Menu } from "../../components/menu";
import { FormularioLogin } from "./formulario";
import { loginScripts } from "../../js/scripts";
import { useEffect } from "react";

const Login = () => {
	useEffect(() => {
		loginScripts();
	}, []);

	return (
		<>
			<Menu />
			<FormularioLogin />
		</>
	);
};

export { Login };
