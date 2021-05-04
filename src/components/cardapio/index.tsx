import { Link } from "react-router-dom";
import { IBebidas } from "../../interfaces/IBebidas";
import { IPizzas } from "../../interfaces/IPizzas";

const Cardapio = (props: any) => {
	const { listaPizzasFiltro, listaBebidasGrupoFiltro } = props.store.pizzaria;

	const setDescricaoCardapio = (pizza: IPizzas) => {
		let descricao = pizza.itens_pizza.find(
			(item) => item.ingrediente.categoria === "MASSA"
		)?.ingrediente.nome;

		descricao += pizza.itens_pizza.find(
			(item) => item.ingrediente.categoria === "MOLHOS"
		)?.ingrediente.nome
			? ", " +
			  pizza.itens_pizza.find(
					(item) => item.ingrediente.categoria === "MOLHOS"
			  )?.ingrediente.nome
			: "";

		pizza.itens_pizza.forEach((item) => {
			if (item.ingrediente.categoria === "TOPPINGS")
				descricao += ", " + item.ingrediente.nome;
		});
		return descricao;
	};

	const setBebidas = () => {
		return listaBebidasGrupoFiltro.map(
			(bebida: IBebidas[], index: number) => (
				<div
					className={
						props.habilitarPedido
							? "row mt-2 ml-1 mr-1 cardapio-bebidas-row btn-pedido-border btn-pedido"
							: "row mt-2 ml-1 mr-1 cardapio-bebidas-row"
					}
					onClick={() =>
						props.setBebidaSelecionada
							? props.setBebidaSelecionada(bebida)
							: ""
					}
					data-toggle={props.habilitarPedido ? "modal" : ""}
					data-target={props.habilitarPedido ? "#modalBebida" : ""}
					key={index}
				>
					<div className="cardapio-pizza">
						<label
							className={
								props.habilitarPedido
									? "cardapio-pizzas-nome mr-3 btn-pedido"
									: "cardapio-pizzas-nome mr-3"
							}
						>
							{bebida[0].categoria}
						</label>
						<span className="cardapio-pizzas-preco">
							R$ {bebida[0].valor}
						</span>
					</div>
					<div className="cardapio-pizza">
						<label
							className={
								props.habilitarPedido
									? "cardapio-pizzas-descricao btn-pedido"
									: "cardapio-pizzas-descricao"
							}
						>
							{setDescricaoBebidas(bebida)}
						</label>
					</div>
				</div>
			)
		);
	};

	const setDescricaoBebidas = (bebidas: Array<IBebidas>) => {
		let descricao = "";

		bebidas.forEach((beb) => {
			descricao += beb.nome;
			if (bebidas.indexOf(beb) < bebidas.length - 1) descricao += ", ";
		});
		return descricao;
	};

	return (
		<div id="cardapio" className="container-fluid mt-4">
			{!props.habilitarPedido && (
				<div className="row cardapio mr-5 mt-4">
					<h1>Cardápio</h1>
				</div>
			)}
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-6 ">
					<div className="row cardapio-pizzas mb-4 ml-1">
						<label>Pizzas</label>
					</div>
					{listaPizzasFiltro.length > 0 &&
						listaPizzasFiltro.map((pizza: IPizzas) => (
							<div
								className={
									props.habilitarPedido
										? "row mt-2 ml-1 mr-1 cardapio-pizzas-row btn-pedido-border btn-pedido"
										: "row mt-2 ml-1 mr-1 cardapio-pizzas-row"
								}
								key={pizza.id}
								data-toggle={
									props.habilitarPedido ? "modal" : ""
								}
								data-target={
									props.habilitarPedido ? "#ModalPizzas" : ""
								}
								onClick={() =>
									props.setPizzaSelecionada
										? props.setPizzaSelecionada(pizza)
										: ""
								}
							>
								<div
									className={
										props.habilitarPedido
											? "btn-pedido"
											: ""
									}
								>
									<div className="cardapio-pizza">
										<label
											className={
												props.habilitarPedido
													? "cardapio-pizzas-nome mr-3 btn-pedido"
													: "cardapio-pizzas-nome mr-3"
											}
										>
											{pizza.nome}
										</label>
										<span className="cardapio-pizzas-preco">
											R$ {pizza.valor}
										</span>
									</div>
									<div className="cardapio-pizza">
										<label
											className={
												props.habilitarPedido
													? "cardapio-pizzas-descricao btn-pedido"
													: "cardapio-pizzas-descricao"
											}
										>
											{setDescricaoCardapio(pizza)}
										</label>
									</div>
								</div>
							</div>
						))}
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6">
					<div className="row cardapio-bebidas mb-4 ml-1">
						<label>Bebidas</label>
					</div>
					{setBebidas()}
				</div>
			</div>
			<div className="row mt-2 cardapio-botoes">
				{props.habilitarPedido && (
					<button className="cardapio-botao">Favoritos</button>
				)}
				<button
					className="cardapio-botao"
					data-toggle="modal"
					data-target="#modalCriarPizza"
				>
					criar meu sabor
				</button>
				{props.habilitarPedido && (
					<button className="cardapio-botao">fazer meu pedido</button>
				)}
				{!props.habilitarPedido && (
					<Link className="cardapio-botao" to="/fazer-pedido">
						fazer meu pedido
					</Link>
				)}
			</div>
		</div>
	);
};

export { Cardapio };
