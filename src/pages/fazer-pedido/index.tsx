import React, { useEffect } from "react";
import { Cardapio } from "../../components/cardapio";
import { CriarPizza } from "../../components/criar-pizza";
import { Menu } from "../../components/menu";
import { Pizza } from "../../components/pizza";
import { Rodape } from "../../components/rodape";
import "../../css/fazer-pedido.css";
import "../../css/home.css";
import { FazerBusca } from "./fazer-busca";

const FazerPedido = () => {
	useEffect(() => {}, []);
	return (
		<>
			<Menu />
			<Pizza />
			<FazerBusca />
			<Cardapio enableFavorito={true} enableTituloCardapio={false} />
			<Rodape />
			<CriarPizza />
		</>
	);
};

export { FazerPedido };
