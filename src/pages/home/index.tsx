import React, { useEffect, useState } from "react";
import { Menu } from "../../components/menu";
import { Rodape } from "../../components/rodape";
import "../../css/home.css";
import { Cardapio } from "../../components/cardapio";
import { PassoPasso } from "./passo-passo";
import { Pizza } from "../../components/pizza";
import { QuemSomos } from "./quem-somos";
import * as action from "./actions";
import { IPizzas } from "../../interfaces/IPizzas";
import { IBebidas } from "../../interfaces/IBebidas";
import { usuarioAutenticado } from "../../js/scripts";

const Home = () => {
	const [listaPizzas, setListaPizzas] = useState<IPizzas[]>([]);
	const [listaBebidas, setListaBebidas] = useState<Array<IBebidas[]>>([]);
	const [usuario, setUsuario] = useState();

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const user = usuarioAutenticado();
		setUsuario(user);
		const pizzas = await action.getPizzas();
		const bebidas = await action.getBebidasGrupo();
		if (pizzas) setListaPizzas(pizzas);
		if (bebidas) setListaBebidas(bebidas);
	};

	return (
		<>
			<Menu usuario={usuario} />
			<Pizza />
			<QuemSomos />
			<PassoPasso />
			<Cardapio
				listaPizzas={listaPizzas}
				listaBebidas={listaBebidas}
				enableFavorito={false}
				enableTituloCardapio={true}
			/>
			<Rodape />
		</>
	);
};

export { Home };
