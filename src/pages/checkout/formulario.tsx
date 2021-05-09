import React from "react";
import { Link } from "react-router-dom";
import { IBebidas } from "../../interfaces/IBebidas";
import { IEndereco } from "../../interfaces/IEndereco";
import { IItensPedido } from "../../interfaces/IItensPedido";
import { IPizzas } from "../../interfaces/IPizzas";

const FormularioCheckout = (props: any) => {
	const { pedido, pizzaria, usuario } = props.store;

	const setDescricaoPedido = (item: IItensPedido) => {
		let textoPedido = "";

		let itemPedido = pizzaria.listaBebidasGrupo.find((lista: IBebidas[]) =>
			lista.find((bebida: IBebidas) => bebida.id === item.bebida_id)
		);
		if (itemPedido) {
			itemPedido = itemPedido.find(
				(bebida: IBebidas) => bebida.id === item.bebida_id
			);
			textoPedido += `${itemPedido.qtd}x ${itemPedido.nome}`;
		}
		itemPedido = pizzaria.listaPizzas.find(
			(pizza: IPizzas) => pizza.id === item.pizza_id
		);
		if (itemPedido) {
			textoPedido += `${itemPedido.qtd}x pizza ${itemPedido.nome}`;
		}
		return textoPedido;
	};

	const handleChangeEndereco = (endereco?: IEndereco) => {
		if (endereco) {
			props.addPedido(null, endereco);
		} else {
			props.addPedido(null, usuario.endereco);
		}
	};

	const handleChangePagamento = (pagamento: string) => {
		props.addPedido(null, null, null, null, pagamento);
	};

	const handleFazerPedido = () => {
		pedido.valorTotal = pedido.valor + 5;
		props.fazerPedido(pedido);
	};

	return (
		<div className="body">
			<div className="container formulario">
				<div className="row p-4">
					<div className="col-sm-12 col-md-6 col-lg-6 pr-5 separador">
						<div className="row">
							<h1>Fechar pedido</h1>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12">
								<ul
									className="nav nav-pills mb-3"
									id="pills-tab"
									role="tablist"
								>
									<li
										className="nav-item mr-5"
										role="presentation"
									>
										<a
											className="nav-link active"
											id="pills-home-tab"
											data-toggle="pill"
											href="#pills-home"
											role="tab"
											aria-controls="pills-home"
											aria-selected="true"
											onClick={() =>
												handleChangeEndereco(undefined)
											}
										>
											Entrega
										</a>
									</li>
									<li
										className="nav-item"
										role="presentation"
									>
										<a
											className="nav-link"
											id="pills-profile-tab"
											data-toggle="pill"
											href="#pills-profile"
											role="tab"
											aria-controls="pills-profile"
											aria-selected="false"
											onClick={() => {
												const end: IEndereco = {
													id:
														"aee8faa7-703d-456e-9f0d-970829c988a8",
													bairro: "",
													cep: "",
													cidade: "",
													cliente_id: "",
													complemento: "",
													created_at: new Date(),
													estado: "",
													logradouro: "",
													numero: "",
													pais: "",
													updated_at: new Date(),
												};
												handleChangeEndereco(end);
											}}
										>
											Retirada
										</a>
									</li>
								</ul>
								<div
									className="tab-content"
									id="pills-tabContent"
								>
									<div
										className="tab-pane fade show active"
										id="pills-home"
										role="tabpanel"
										aria-labelledby="pills-home-tab"
									>
										<div className="row box-endereco">
											<div className="col-9">
												{usuario.endereco && (
													<>
														<label>
															{
																usuario.endereco
																	.logradouro
															}
															,{" "}
															{
																usuario.endereco
																	.numero
															}
															,{" "}
															{
																usuario.endereco
																	.complemento
															}
															,{" "}
															{
																usuario.endereco
																	.bairro
															}
														</label>
														<br />
														<label>
															{
																usuario.endereco
																	.cidade
															}{" "}
															-{" "}
															{
																usuario.endereco
																	.estado
															}
														</label>
													</>
												)}
											</div>
											<div className="col-3 text-center">
												<button
													className="btn-trocar-endereco"
													data-toggle="modal"
													data-target="#ModalEnderecos"
												>
													Trocar
												</button>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="pills-profile"
										role="tabpanel"
										aria-labelledby="pills-profile-tab"
									>
										<div className="row box-endereco">
											<div className="col-12">
												<label>
													Rua Taufic Salloum, 2255,
													jardim Veneza
												</label>
												<br />
												<label>Franca - SP</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-4">
							<div className="col-sm-12 col-md-12 col-lg-12">
								<ul
									className="nav nav-pills mb-3"
									id="pills-tab"
									role="tablist"
								>
									<li
										className="nav-item nav-item-pagamento"
										role="presentation"
									>
										<a
											className="nav-link active"
											id="pills-home-tab"
											data-toggle="pill"
											href="#pills-home"
											role="tab"
											aria-controls="pills-home"
											aria-selected="true"
										>
											Forma de Pagamento
										</a>
									</li>
								</ul>
								<label className="criar-pizza-radio radio">
									<input
										type="radio"
										className="mr-2"
										value={pedido.metodo_pagamento}
										checked={
											pedido.metodo_pagamento ===
											"CREDITO"
										}
										onChange={() =>
											handleChangePagamento("CREDITO")
										}
										name="pagamento"
									/>
									<span>Cartão de crédito</span>
								</label>
								<label className="criar-pizza-radio radio">
									<input
										type="radio"
										className="mr-2"
										value={pedido.metodo_pagamento}
										checked={
											pedido.metodo_pagamento === "DEBITO"
										}
										onChange={() =>
											handleChangePagamento("DEBITO")
										}
										name="pagamento"
									/>
									<span>Cartão de débito</span>
								</label>
								<label className="criar-pizza-radio radio">
									<input
										type="radio"
										className="mr-2"
										value={pedido.metodo_pagamento}
										checked={
											pedido.metodo_pagamento ===
											"DINHEIRO"
										}
										onChange={() =>
											handleChangePagamento("DINHEIRO")
										}
										name="pagamento"
									/>
									<span>Dinheiro</span>
								</label>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 pl-5">
						<div className="row">
							<h1>seu pedido</h1>
						</div>
						<div className="box-endereco">
							{pedido.itens_pedido &&
								pedido.itens_pedido.map(
									(item: IItensPedido, index: number) => (
										<div className="row" key={index}>
											<div className="col-9">
												{setDescricaoPedido(item)}
											</div>
											<div className="col-3 text-right">
												R${" "}
												{item.valor_item_pedido.toFixed(
													2
												)}
											</div>
										</div>
									)
								)}
						</div>
						<div className="row mt-2">
							<button
								className="btn-secundario btn-trocar-endereco ml-2"
								onClick={() =>
									props.history.push("/fazer-pedido")
								}
							>
								remover
							</button>
							<button
								className="btn-trocar-endereco ml-5"
								onClick={() =>
									props.history.push("/fazer-pedido")
								}
							>
								Adicionar mais itens
							</button>
						</div>
						<div className="row mt-5">
							<div className="col-sm-6 col-md-9">
								<label>subtotal</label>
							</div>
							<div className="col-sm-6 col-md-3">
								R$ {pedido.valor.toFixed(2)}
							</div>
						</div>
						<div className="row subtotal">
							<div className="col-sm-6 col-md-9">
								<label>taxa de entrega</label>
							</div>
							<div className="col-sm-6 col-md-3">R$ 5.00</div>
						</div>
						<div className="row">
							<div className="col-sm-6 col-md-9">
								<label>total</label>
							</div>
							<div className="col-sm-6 col-md-3 pizza-valor">
								R$ {(pedido.valor + 5).toFixed(2)}
							</div>
						</div>
						<div className="row criar-pizza-img-center mt-3">
							<button
								className="btn-criar-pizza btn-add-pizza"
								style={{ width: "55%" }}
								onClick={handleFazerPedido}
							>
								Fazer Pedido
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FormularioCheckout };
