import { IBebidas } from "../../interfaces/IBebidas";
import { IPizzas } from "../../interfaces/IPizzas";

interface IProps {
	enableFavorito: boolean;
	enableTituloCardapio: boolean;
	listaPizzas: Array<IPizzas>;
	listaBebidas: Array<Array<IBebidas>>;
}

const Cardapio = (props: IProps) => {
	const { listaPizzas, listaBebidas } = props;

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
		return listaBebidas.map((bebida, index) => (
			<div className="row mt-2" key={index}>
				<div className="cardapio-pizza">
					<label className="cardapio-pizzas-nome mr-3">
						{bebida[0].categoria}
					</label>
					<span className="cardapio-pizzas-preco">
						R$ {bebida[0].valor}
					</span>
				</div>
				<div className="cardapio-pizza">
					<label className="cardapio-pizzas-descricao">
						{setDescricaoBebidas(bebida)}
					</label>
				</div>
			</div>
		));
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
			{props.enableTituloCardapio && (
				<div className="row cardapio mr-5">
					<h1>Cardápio</h1>
				</div>
			)}
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-6 ">
					<div className="row cardapio-pizzas mb-4">
						<label>Pizzas</label>
					</div>
					{listaPizzas.length > 0 &&
						listaPizzas.map((pizza) => (
							<div className="row mt-2" key={pizza.id}>
								<div className="cardapio-pizza">
									<label className="cardapio-pizzas-nome mr-3">
										{pizza.nome}
									</label>
									<span className="cardapio-pizzas-preco">
										R$ {pizza.valor}
									</span>
								</div>
								<div className="cardapio-pizza">
									<label className="cardapio-pizzas-descricao">
										{setDescricaoCardapio(pizza)}
									</label>
								</div>
							</div>
						))}
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6">
					<div className="row cardapio-bebidas mb-4">
						<label>Bebidas</label>
					</div>
					{setBebidas()}
				</div>
			</div>
			<div className="row mt-2 cardapio-botoes">
				{props.enableFavorito && (
					<button className="cardapio-botao">Favoritos</button>
				)}
				<button
					className="cardapio-botao"
					data-toggle="modal"
					data-target="#modalCriarPizza"
				>
					criar meu sabor
				</button>
				<button className="cardapio-botao">fazer meu pedido</button>
			</div>
		</div>
	);
};

export { Cardapio };
