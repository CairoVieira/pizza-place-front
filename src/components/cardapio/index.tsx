interface IProps {
	enableFavorito: boolean;
	enableTituloCardapio: boolean;
}
const Cardapio = (props: IProps) => {
	const listaPizzas = [
		{
			nome: "Zapata",
			preco: 25,
			descricao:
				"molho de tomate, linguiça fresca, cebola roxa, alho, manjericão, picles de jalapeno, parmesão",
		},
		{
			nome: "Zapata",
			preco: 25,
			descricao:
				"molho de tomate, linguiça fresca, cebola roxa, alho, manjericão, picles de jalapeno, parmesão",
		},
		{
			nome: "Zapata",
			preco: 25,
			descricao:
				"molho de tomate, linguiça fresca, cebola roxa, alho, manjericão, picles de jalapeno, parmesão",
		},
		{
			nome: "Zapata",
			preco: 25,
			descricao:
				"molho de tomate, linguiça fresca, cebola roxa, alho, manjericão, picles de jalapeno, parmesão",
		},
		{
			nome: "Zapata",
			preco: 25,
			descricao:
				"molho de tomate, linguiça fresca, cebola roxa, alho, manjericão, picles de jalapeno, parmesão",
		},
	];

	const listaBebidas = [
		{
			nome: "Cerveja",
			preco: 12,
			descricao:
				"larger, session ipa, witbeer, stout, pale ale, golden floral ale",
		},
		{
			nome: "Cerveja",
			preco: 12,
			descricao:
				"larger, session ipa, witbeer, stout, pale ale, golden floral ale",
		},
		{
			nome: "Cerveja",
			preco: 12,
			descricao:
				"larger, session ipa, witbeer, stout, pale ale, golden floral ale",
		},
		{
			nome: "Cerveja",
			preco: 12,
			descricao:
				"larger, session ipa, witbeer, stout, pale ale, golden floral ale",
		},
		{
			nome: "Cerveja",
			preco: 12,
			descricao:
				"larger, session ipa, witbeer, stout, pale ale, golden floral ale",
		},
	];

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
					{listaPizzas.map((pizza) => (
						<div className="row mt-2">
							<div className="cardapio-pizza">
								<label className="cardapio-pizzas-nome mr-3">
									{pizza.nome}
								</label>
								<span className="cardapio-pizzas-preco">
									R$ {pizza.preco}
								</span>
							</div>
							<div className="cardapio-pizza">
								<label className="cardapio-pizzas-descricao">
									{pizza.descricao}
								</label>
							</div>
						</div>
					))}
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6">
					<div className="row cardapio-bebidas mb-4">
						<label>Bebidas</label>
					</div>
					{listaBebidas.map((pizza) => (
						<div className="row mt-2">
							<div className="cardapio-pizza">
								<label className="cardapio-pizzas-nome mr-3">
									{pizza.nome}
								</label>
								<span className="cardapio-pizzas-preco">
									R$ {pizza.preco}
								</span>
							</div>
							<div className="cardapio-pizza">
								<label className="cardapio-pizzas-descricao">
									{pizza.descricao}
								</label>
							</div>
						</div>
					))}
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
