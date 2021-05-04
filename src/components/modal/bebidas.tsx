import "../../css/modal-bebida.css";
import criarPizza from "../../images/criar-pizza.jpg";
import { IBebidas } from "../../interfaces/IBebidas";

const ModalBebida = (props: any) => {
	const { bebidaSelecionada } = props.store.pizzaria;

	const handleQtdMenos = (bebida: IBebidas) => {
		if (bebida.qtd > 0) {
			let novaBebida = bebida;
			novaBebida.qtd = novaBebida.qtd - 1;

			const index = bebidaSelecionada.indexOf(bebida);
			let novaBebidasSelecionadas = bebidaSelecionada.filter(
				(x: IBebidas) => x.id !== bebida.id
			);
			novaBebidasSelecionadas.splice(index, 0, novaBebida);
			props.setBebidaSelecionada(novaBebidasSelecionadas);
		}
	};

	const handleQtdMais = (bebida: IBebidas) => {
		if (bebida.qtd < 10) {
			let novaBebida = bebida;
			novaBebida.qtd = novaBebida.qtd + 1;

			const index = bebidaSelecionada.indexOf(bebida);
			let novaBebidasSelecionadas = bebidaSelecionada.filter(
				(x: IBebidas) => x.id !== bebida.id
			);
			novaBebidasSelecionadas.splice(index, 0, novaBebida);
			props.setBebidaSelecionada(novaBebidasSelecionadas);
		}
	};

	return (
		<div
			className="modal fade"
			id="modalBebida"
			tabIndex={-1}
			aria-labelledby="modalBebidaLabel"
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
									<div className="row mt-3 mb-3">
										<h2 className="criar-pizza-titulo">
											{bebidaSelecionada.length > 0 &&
												bebidaSelecionada[0].categoria}
										</h2>
									</div>

									{bebidaSelecionada.map(
										(bebida: IBebidas) => (
											<div
												className="row"
												key={bebida.id}
											>
												<div className="col-sm-9 col-md-9 col-lg-9">
													<label className="criar-pizza-escolha">
														{bebida.nome}
													</label>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3">
													<div className="btn-qtd-bebida">
														<button
															onClick={() =>
																handleQtdMenos(
																	bebida
																)
															}
														>
															-
														</button>
														<label>
															{bebida.qtd}
														</label>
														<button
															onClick={() =>
																handleQtdMais(
																	bebida
																)
															}
														>
															+
														</button>
													</div>
												</div>
											</div>
										)
									)}
									<div className="row mt-3">
										<div className="col-sm-9 col-md-9 col-lg-9">
											<label className="pizza-serve">
												<i className="fas fa-user mr-1"></i>
												<strong>serve 1 pessoa</strong>
											</label>
										</div>
										<div className="col-sm-3 col-md-3 col-lg-3 text-left">
											<label className="pizza-valor">
												R${" "}
												{bebidaSelecionada.length > 0 &&
													bebidaSelecionada[0].valor}
											</label>
										</div>
									</div>
									<div className="row mt-3 pt-1 pb-1 criar-pizza-botoes">
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

export { ModalBebida };
