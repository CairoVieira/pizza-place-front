import React, { useEffect, useState } from "react";
import { Cardapio } from "../../components/cardapio";
import { CriarPizza } from "../../components/criar-pizza";
import { Menu } from "../../components/menu";
import { Pizza } from "../../components/pizza";
import { Rodape } from "../../components/rodape";
import "../../css/fazer-pedido.css";
import "../../css/home.css";
import { usuarioAutenticado } from "../../js/scripts";
import { FazerBusca } from "./fazer-busca";
import history from "../../components/history";

const FazerPedido = () => {
	const [usuario, setUsuario] = useState();

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const user = usuarioAutenticado();
		setUsuario(user);
		if (!user) return history.push("/login");
	};

	return (
		<>
			<Menu usuario={usuario} />
			<Pizza />
			<FazerBusca />
			<Cardapio
				enableFavorito={true}
				enableTituloCardapio={false}
				listaPizzas={[]}
				listaBebidas={[]}
			/>
			<Rodape />
			<CriarPizza />
		</>
	);
};

export { FazerPedido };
