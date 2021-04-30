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

const Home = () => {
	const [listaPizzas, setListaPizzas] = useState<IPizzas[]>([]);
	const [listaBebidas, setListaBebidas] = useState<Array<IBebidas[]>>([]);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const pizzas = await action.getPizzas();
		const bebidas = await action.getBebidasGrupo();
		setListaPizzas(pizzas);
		setListaBebidas(bebidas);
	};

	return (
		<>
			<Menu />
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
