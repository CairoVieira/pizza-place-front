import { IItensPedido } from "../../interfaces/IItensPedido";

const Dash = (props: any) => {
	const { usuario, pedido } = props.store;
	return (
		<div className="dashboard-background">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12 dashboard-welcome">
						<h1>Olá, {usuario.nome.split(" ")[0]}</h1>
						<label>Não deixe para amanhã, a pizza que</label>
						<br />
						<label>você pode comer hoje!</label>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12">
								<h1 className="dash-titulos">último pedido</h1>
								<div className="dash-ultimo-pedido">
									{pedido.ultimo_pedido &&
										pedido.ultimo_pedido.itens_pedido
											.length > 0 &&
										pedido.ultimo_pedido.itens_pedido.map(
											(item: IItensPedido) => (
												<div key={item.id}>
													{item.pizza && (
														<label>
															{item.quantidade}x{" "}
															{item.pizza.nome}
														</label>
													)}
													{item.bebida && (
														<label>
															{item.quantidade}x{" "}
															{item.bebida.nome}
														</label>
													)}
												</div>
											)
										)}
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12">
								<h1 className="dash-titulos">última entrega</h1>
								<div className="dash-ultimo-pedido">
									{pedido.ultimo_pedido &&
										pedido.ultimo_pedido.endereco && (
											<label>
												{
													pedido.ultimo_pedido
														.endereco.logradouro
												}{" "}
												{
													pedido.ultimo_pedido
														.endereco.numero
												}
												,{" "}
												{pedido.ultimo_pedido.endereco
													.complemento !== ""
													? pedido.ultimo_pedido
															.endereco
															.complemento + ", "
													: ""}
												{
													pedido.ultimo_pedido
														.endereco.bairro
												}
												,{" "}
												{
													pedido.ultimo_pedido
														.endereco.cidade
												}
												-{" "}
												{
													pedido.ultimo_pedido
														.endereco.estado
												}
											</label>
										)}
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12">
								<h1 className="dash-titulos">
									últimas criações
								</h1>
								<div className="row">
									<div className="col-sm-4 col-md-4 col-lg-4">
										<button className="dash-ultimas-criacoes">
											Mista
										</button>
									</div>
									<div className="col-sm-4 col-md-4 col-lg-4">
										<button className="dash-ultimas-criacoes">
											Só minha
										</button>
									</div>
									<div className="col-sm-4 col-md-4 col-lg-4">
										<button className="dash-ultimas-criacoes">
											Mozão
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12">
								<h1 className="dash-titulos">favoritos</h1>
								<div className="row">
									<div className="col-sm-4 col-md-4 col-lg-4">
										<button className="dash-ultimas-criacoes">
											Mista
										</button>
									</div>
									<div className="col-sm-4 col-md-4 col-lg-4">
										<button className="dash-ultimas-criacoes">
											Só minha
										</button>
									</div>
									<div className="col-sm-4 col-md-4 col-lg-4">
										<button className="dash-ultimas-criacoes">
											Mozão
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

export { Dash };
