import criarPizza from "../../images/criar-pizza.jpg";
import "../../css/criar-pizza.css";
import { useState } from "react";
import { IIngredientes } from "../../interfaces/IIngredientes";

interface IState {
	qtdPizza: number;
}

const INITIAL_STATE: IState = {
	qtdPizza: 1,
};

const ModalCriarPizza = (props: any) => {
	const { pedido, pizzaria } = props.store;
	const [qtdPizza, setQtdPizza] = useState(INITIAL_STATE.qtdPizza);

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

	const handleQtdMenos = () => {
		if (qtdPizza > 0) setQtdPizza(qtdPizza - 1);
	};

	const handleQtdMais = () => {
		if (qtdPizza < 10) setQtdPizza(qtdPizza + 1);
	};

	const handleChange = (e: any) => {
		if (e.target.name === "nomePizza")
			props.setCriarPizzaNome(e.target.value);
		if (e.target.name === "massa") {
			let itens = pedido.criar_pizza.itens_pizza;
			arrayMassa.forEach((massa) => {
				itens.splice(itens.indexOf(massa.id), 1);
				props.setCriarPizzaItens(itens);
			});
			props.setCriarPizzaItensAdd(e.target.value);
		}
		if (e.target.name === "molho") {
			let itens = pedido.criar_pizza.itens_pizza;
			arrayMolho.forEach((molho) => {
				itens.splice(itens.indexOf(molho.id), 1);
				props.setCriarPizzaItens(itens);
			});
			props.setCriarPizzaItensAdd(e.target.value);
		}
		if (e.target.name === "toppings") {
			let itens = pedido.criar_pizza.itens_pizza;
			let item = itens.find((i: string) => i === e.target.value);
			if (!item) props.setCriarPizzaItensAdd(e.target.value);
			else {
				itens.splice(itens.indexOf(item), 1);
				props.setCriarPizzaItens(itens);
			}
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
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
										<div className="row mt-3 pt-1 pb-1 criar-pizza-botoes">
											<div className="btn-criar-pizza btn-qtd">
												<button
													onClick={handleQtdMenos}
												>
													-
												</button>
												<label>{qtdPizza}</label>
												<button onClick={handleQtdMais}>
													+
												</button>
											</div>
											<button className="btn-criar-pizza btn-add-pizza">
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
