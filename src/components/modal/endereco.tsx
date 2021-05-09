import "../../css/criar-pizza.css";
import { IEndereco } from "../../interfaces/IEndereco";

const ModalEnderecos = (props: any) => {
	const { usuario } = props.store;

	const handleChangeEndereco = (endereco: IEndereco) => {
		props.addPedido(null, endereco);
		props.setEndereco(endereco);
	};

	return (
		<div
			className="modal fade"
			id="ModalEnderecos"
			tabIndex={-1}
			aria-labelledby="modalPizzaLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-md modal-dialog-centered">
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
								<h1>Selecione um endereço para entrega</h1>
							</div>

							{usuario.listaEndereco.length > 0 &&
								usuario.listaEndereco.map(
									(endereco: IEndereco, index: number) => (
										<div className="row mt-1" key={index}>
											<label className="criar-pizza-radio">
												<input
													type="radio"
													className="mr-2"
													value={endereco.id}
													name="endereco"
													onChange={() =>
														handleChangeEndereco(
															endereco
														)
													}
													checked={
														endereco.id ===
														usuario.endereco.id
													}
												/>
												{endereco.logradouro},{" "}
												{endereco.numero},{" "}
												{endereco.complemento
													? endereco.complemento +
													  ", "
													: " "}
												{endereco.bairro},{" "}
												{endereco.cidade} -{" "}
												{endereco.estado}
											</label>
										</div>
									)
								)}
						</div>
					</div>
					<div className="text-right">
						<button
							type="button"
							className="btn-criar-pizza btn-add-pizza"
							data-dismiss="modal"
						>
							Confirmar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { ModalEnderecos };
