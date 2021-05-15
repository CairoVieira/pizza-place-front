import "../../css/criar-pizza.css";
import { IPizzas } from "../../interfaces/IPizzas";

const ModalPizzas = (props: any) => {
	const { pizzaSelecionada } = props.store.pizzaria;

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

	const handleQtdMenos = () => {
		if (pizzaSelecionada.quantidade > 1) {
			const novaPizza = pizzaSelecionada;
			novaPizza.valorTotal = novaPizza.valorTotal - novaPizza.valor;
			novaPizza.quantidade = novaPizza.quantidade - 1;
			props.setPizzaSelecionada(novaPizza);
		}
	};

	const handleQtdMais = () => {
		if (pizzaSelecionada.quantidade < 10) {
			const novaPizza = pizzaSelecionada;
			novaPizza.valorTotal = novaPizza.valorTotal + novaPizza.valor;
			novaPizza.quantidade = novaPizza.quantidade + 1;
			props.setPizzaSelecionada(novaPizza);
		}
	};

	const handleAddPedido = () => {
		props.addPedido(null, null, pizzaSelecionada);
	};

	return (
		<div
			className="modal fade"
			id="ModalPizzas"
			tabIndex={-1}
			aria-labelledby="modalPizzaLabel"
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
									{pizzaSelecionada.imagem && (
										<img
											className="criar-pizza-img"
											src={
												require(`../../images/${pizzaSelecionada.imagem}.jpg`)
													.default
											}
											alt="pizza"
										/>
									)}
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<div className="row mt-3 mb-3">
										<h2 className="criar-pizza-titulo">
											{pizzaSelecionada.nome}
										</h2>
									</div>

									<div className="row">
										<div className="col-sm-12 col-md-12 col-lg-12">
											<label className="criar-pizza-escolha">
												{pizzaSelecionada.nome &&
													setDescricaoCardapio(
														pizzaSelecionada
													)}
											</label>
										</div>
									</div>

									<div className="row mt-5">
										<div className="col-sm-12 col-md-8 col-lg-8">
											<label className="pizza-serve">
												<i className="fas fa-user mr-1"></i>
												<strong>serve 1 pessoa</strong>
											</label>
										</div>
										<div className="col-sm-12 col-md-4 col-lg-4 text-left">
											<label className="pizza-valor">
												R${" "}
												{pizzaSelecionada.valorTotal &&
													pizzaSelecionada.valorTotal.toFixed(
														2
													)}
											</label>
										</div>
									</div>

									<div className="row">
										<div className="col-sm-12 col-md-12 col-lg-12">
											<textarea
												className="text-comentario"
												maxLength={100}
												placeholder="Algum comentário? Ex: tirar cebola, tirar alho, etc."
											></textarea>
										</div>
									</div>

									<div className="row mt-3 pt-1 pb-1 criar-pizza-botoes">
										<div className="btn-criar-pizza btn-qtd">
											<button onClick={handleQtdMenos}>
												-
											</button>
											<label>
												{pizzaSelecionada.quantidade}
											</label>
											<button onClick={handleQtdMais}>
												+
											</button>
										</div>
										<button
											className="btn-criar-pizza btn-add-pizza"
											onClick={handleAddPedido}
										>
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

export { ModalPizzas };
