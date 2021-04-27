import criarPizza from "../../images/criar-pizza.jpg";
import "../../css/criar-pizza.css";
import { useState } from "react";

interface IProps {}

interface IState {
	qtdPizza: number;
}

const INITIAL_SATATE: IState = {
	qtdPizza: 1,
};

const CriarPizza = (props: IProps) => {
	const [qtdPizza, setQtdPizza] = useState(INITIAL_SATATE.qtdPizza);

	const arrayMassa = [
		{
			id: "1",
			nome: "tradicional",
		},
		{
			id: "2",
			nome: "crocante",
		},
		{
			id: "3",
			nome: "integral",
		},
	];

	const arrayMolho = [
		{
			id: "1",
			nome: "tomate",
		},
		{
			id: "2",
			nome: "branco com limão e vinho branco",
		},
	];

	const arrayToppings = [
		{
			id: "1",
			nome: "alho",
		},
		{
			id: "2",
			nome: "alho frito",
		},
		{
			id: "3",
			nome: "azeite de trufas",
		},
		{
			id: "4",
			nome: "azeitona preta",
		},
		{
			id: "5",
			nome: "bacon",
		},
		{
			id: "6",
			nome: "cebola roxa",
		},
		{
			id: "7",
			nome: "cream cheese",
		},
		{
			id: "8",
			nome: "gorgonzola",
		},
		{
			id: "9",
			nome: "linguiça",
		},
		{
			id: "10",
			nome: "manjericão",
		},
		{
			id: "11",
			nome: "mozzarela",
		},
		{
			id: "12",
			nome: "pepperoni",
		},
	];

	const handleQtdMenos = () => {
		if (qtdPizza > 0) setQtdPizza(qtdPizza - 1);
	};

	const handleQtdMais = () => {
		if (qtdPizza < 10) setQtdPizza(qtdPizza + 1);
	};
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
											{arrayMassa.map((massa, index) => (
												<label
													key={index}
													className="criar-pizza-radio"
												>
													<input
														type="radio"
														className="mr-2"
														value={massa.id}
														name="massa"
													/>
													{massa.nome}
												</label>
											))}
										</div>
									</div>
									<div className="row mt-3 pt-1 pb-1">
										<div className="col-sm-12 col-md-4 col-lg-3">
											<label className="criar-pizza-escolha">
												Molhos
											</label>
										</div>
										<div className="col-sm-12 col-md-8 col-lg-9">
											{arrayMolho.map((molho, index) => (
												<label
													key={index}
													className="criar-pizza-radio radio"
												>
													<input
														type="radio"
														className="mr-2"
														value={molho.id}
														name="molho"
													/>
													<span>{molho.nome}</span>
												</label>
											))}
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
																	className="mr-2"
																	value={
																		top.id
																	}
																/>

																<span>
																	{top.nome}
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
											<button onClick={handleQtdMenos}>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { CriarPizza };
