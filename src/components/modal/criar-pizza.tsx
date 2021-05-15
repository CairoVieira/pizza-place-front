import "../../css/criar-pizza.css";
import criarPizza from "../../images/criar-pizza.jpg";
import { IIngredientes } from "../../interfaces/IIngredientes";

const ModalCriarPizza = (props: any) => {
	const { pedido, pizzaria } = props.store;

	let arrayMassa: Array<IIngredientes> = [];
	let arrayMolho: Array<IIngredientes> = [];
	let arrayToppings: Array<IIngredientes> = [];

	const init = () => {
		if (pizzaria.listaIngredientes.length > 0) {
			arrayMassa = pizzaria.listaIngredientes.filter(
				(ingrediente: IIngredientes) =>
					ingrediente.categoria === "MASSA"
			);
			arrayMolho = pizzaria.listaIngredientes.filter(
				(ingrediente: IIngredientes) =>
					ingrediente.categoria === "MOLHOS"
			);
			arrayToppings = pizzaria.listaIngredientes.filter(
				(ingrediente: IIngredientes) =>
					ingrediente.categoria === "TOPPINGS"
			);
		}
	};

	const handleChange = (e: any) => {
		let itens = pedido.criar_pizza.itens_pizza;
		if (e.target.name === "nomePizza")
			props.setCriarPizzaNome(e.target.value);
		if (e.target.name === "massa") {
			arrayMassa.forEach((massa) => {
				const item = itens.find((m: string) => m === massa.id);
				if (item) props.setCriarPizzaValor(-massa.valor);

				itens = itens.splice(itens.indexOf(massa.id), 1);
				props.setCriarPizzaItens(itens);
			});
			const massa = arrayMassa.find(
				(m: IIngredientes) => m.id === e.target.value
			);

			if (massa) {
				props.setCriarPizzaItensAdd(massa.id);
				props.setCriarPizzaValor(massa.valor);
			}
		}
		if (e.target.name === "molho") {
			arrayMolho.forEach((molho) => {
				const item = itens.find((m: string) => m === molho.id);
				if (item) props.setCriarPizzaValor(-molho.valor);

				itens = itens.splice(itens.indexOf(molho.id), 1);
				props.setCriarPizzaItens(itens);
			});
			const molho = arrayMolho.find(
				(m: IIngredientes) => m.id === e.target.value
			);

			if (molho) {
				props.setCriarPizzaItensAdd(molho.id);
				props.setCriarPizzaValor(molho.valor);
			}
		}
		if (e.target.name === "toppings") {
			const top = arrayToppings.find(
				(t: IIngredientes) => t.id === e.target.value
			);
			if (top) {
				if (e.target.checked) {
					props.setCriarPizzaItensAdd(top.id);
					props.setCriarPizzaValor(top.valor);
				} else {
					const novosItens = itens.filter(
						(item: string) => item !== e.target.value
					);
					props.setCriarPizzaItens(novosItens);
					props.setCriarPizzaValor(-top.valor);
				}
			}
		}
		if (e.target.name === "qtdMenos") {
			if (pedido.criar_pizza.quantidade > 1) {
				props.setCriarPizzaValor(
					-(
						pedido.criar_pizza.valorTotal /
						pedido.criar_pizza.quantidade
					)
				);
				props.setCriarPizzaQtd(pedido.criar_pizza.quantidade - 1);
			}
		}
		if (e.target.name === "qtdMais") {
			if (pedido.criar_pizza.quantidade < 10) {
				props.setCriarPizzaValor(
					pedido.criar_pizza.valorTotal /
						pedido.criar_pizza.quantidade
				);
				props.setCriarPizzaQtd(pedido.criar_pizza.quantidade + 1);
			}
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const pizzaCriada = pedido.criar_pizza;
		pizzaCriada.is_menu = false;
		pizzaCriada.valor = pizzaCriada.valorTotal;
		props.addPizza(pizzaCriada);
	};

	init();

	return (
		<div
			className="modal fade"
			id="modalCriarPizza"
			tabIndex={-1}
			aria-labelledby="modalCriarPizzaLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-xl modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-12 col-md-6 col-lg-6 criar-pizza-img-center">
									<img
										className="criar-pizza-img"
										src={criarPizza}
										alt="pizza"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<form onSubmit={(e) => handleSubmit(e)}>
										<div className="row mt-3">
											<h2 className="criar-pizza-titulo">
												Criar Pizza
											</h2>
										</div>
										<div className="row mt-3 pt-1 pb-1">
											<div className="col-sm-12 col-md-4 col-lg-3">
												<label className="criar-pizza-escolha">
													Nome
												</label>
											</div>
											<div className="col-sm-12 col-md-8 col-lg-9">
												<input
													type="text"
													required
													maxLength={15}
													name="nomePizza"
													onChange={handleChange}
													value={
														pedido.criar_pizza.nome
													}
													className="criar-pizza-input"
													placeholder="Dê um nome para sua pizza"
												/>
											</div>
										</div>
										<div className="row mt-3">
											<div className="col-sm-12 col-md-4 col-lg-3">
												<label className="criar-pizza-escolha">
													Massa
												</label>
											</div>
											<div className="col-sm-12 col-md-8 col-lg-9">
												{arrayMassa.map(
													(massa, index) => (
														<label
															key={index}
															className="criar-pizza-radio"
														>
															<input
																required
																type="radio"
																className="mr-2"
																value={massa.id}
																name="massa"
																onChange={
																	handleChange
																}
															/>
															{massa.nome}
														</label>
													)
												)}
											</div>
										</div>
										<div className="row mt-3 pt-1 pb-1">
											<div className="col-sm-12 col-md-4 col-lg-3">
												<label className="criar-pizza-escolha">
													Molhos
												</label>
											</div>
											<div className="col-sm-12 col-md-8 col-lg-9">
												{arrayMolho.map(
													(molho, index) => (
														<label
															key={index}
															className="criar-pizza-radio radio"
														>
															<input
																type="radio"
																required
																className="mr-2"
																value={molho.id}
																name="molho"
																onChange={
																	handleChange
																}
															/>
															<span>
																{molho.nome}
															</span>
														</label>
													)
												)}
											</div>
										</div>
										<div className="row mt-3 pt-1 pb-1">
											<div className="col-sm-12 col-md-4 col-lg-3">
												<label className="criar-pizza-escolha">
													Toppings
												</label>
											</div>
											<div className="col-sm-12 col-md-8 col-lg-9">
												<div className="row">
													{arrayToppings.map(
														(top, index) => (
															<div
																key={index}
																className="col-sm-12 col-md-12 col-lg-6"
															>
																<label className="criar-pizza-check checkbox">
																	<input
																		type="checkbox"
																		name="toppings"
																		className="mr-2"
																		value={
																			top.id
																		}
																		onChange={
																			handleChange
																		}
																	/>

																	<span>
																		{
																			top.nome
																		}
																	</span>
																</label>
															</div>
														)
													)}
												</div>
											</div>
										</div>
										<div className="row mt-3">
											<div className="col-sm-12 col-md-8 col-lg-8">
												<label className="pizza-serve">
													<i className="fas fa-user mr-1"></i>
													<strong>
														serve 1 pessoa
													</strong>
												</label>
											</div>
											<div className="col-sm-12 col-md-4 col-lg-4 text-left">
												<label className="pizza-valor">
													R${" "}
													{pedido.criar_pizza
														.valorTotal &&
														pedido.criar_pizza.valorTotal.toFixed(
															2
														)}
												</label>
											</div>
										</div>
										<div className="row mt-3 pt-1 pb-1 criar-pizza-botoes">
											<div className="btn-criar-pizza btn-qtd">
												<button
													name="qtdMenos"
													type="button"
													onClick={handleChange}
												>
													-
												</button>
												<label>
													{
														pedido.criar_pizza
															.quantidade
													}
												</label>
												<button
													type="button"
													name="qtdMais"
													onClick={handleChange}
												>
													+
												</button>
											</div>
											<button
												type="submit"
												className="btn-criar-pizza btn-add-pizza"
											>
												Adicionar
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { ModalCriarPizza };
