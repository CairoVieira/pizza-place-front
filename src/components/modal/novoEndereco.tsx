import "../../css/criar-pizza.css";

const ModalNovoEnderecos = (props: any) => {
	const { novoEndereco } = props.store.usuario;

	const handleChange = (event: any) => {
		if (event.target.name === "logradouro")
			props.setNovoEnderecoLogradouro(event.target.value);
		if (event.target.name === "numero")
			props.setNovoEnderecoNumero(event.target.value);
		if (event.target.name === "complemento")
			props.setNovoEnderecoComplemento(event.target.value);
		if (event.target.name === "bairro")
			props.setNovoEnderecoBairro(event.target.value);
		if (event.target.name === "cep")
			props.setNovoEnderecoCep(event.target.value);
		if (event.target.name === "cidade")
			props.setNovoEnderecoCidade(event.target.value);
		if (event.target.name === "estado")
			props.setNovoEnderecoEstado(event.target.value);
		if (novoEndereco.cliente_id === "") {
			console.log("props.store.usuario.id", props.store.usuario);
			props.setNovoEnderecoCliente(props.store.usuario.id);
		}
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		props.salvarEndereco(novoEndereco);
	};

	return (
		<div
			className="modal fade"
			id="ModalNovoEnderecos"
			tabIndex={-1}
			aria-labelledby="modalPizzaLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-lg modal-dialog-centered">
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
						<form className="container" onSubmit={handleSubmit}>
							<div className="row mb-1">
								<h1 className="endereco-titulo">Endereço</h1>
							</div>
							<div className="row mt-4 enderecos-campo">
								<div className="col-sm-12 col-md-9">
									<input
										type="text"
										maxLength={25}
										required
										placeholder="Logradouro"
										name="logradouro"
										value={novoEndereco.logradouro}
										onChange={handleChange}
									/>
								</div>
								<div className="col-sm-12 col-md-3">
									<input
										type="text"
										maxLength={5}
										required
										placeholder="Número"
										name="numero"
										value={novoEndereco.numero}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="row mt-4 enderecos-campo">
								<div className="col-sm-12 col-md-6">
									<input
										type="text"
										maxLength={15}
										placeholder="Complemento"
										name="complemento"
										value={novoEndereco.complemento}
										onChange={handleChange}
									/>
								</div>
								<div className="col-sm-12 col-md-6">
									<input
										type="text"
										maxLength={20}
										required
										placeholder="Bairro"
										name="bairro"
										value={novoEndereco.bairro}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="row mt-4 enderecos-campo">
								<div className="col-sm-12 col-md-3">
									<input
										type="text"
										maxLength={8}
										placeholder="CEP"
										name="cep"
										value={novoEndereco.cep}
										onChange={handleChange}
									/>
								</div>
								<div className="col-sm-12 col-md-4">
									<input
										type="text"
										maxLength={20}
										required
										placeholder="Cidade"
										name="cidade"
										value={novoEndereco.cidade}
										onChange={handleChange}
									/>
								</div>
								<div className="col-sm-12 col-md-2">
									<select
										name="estado"
										value={novoEndereco.estado}
										onChange={handleChange}
									>
										<option value="AC">AC</option>
										<option value="AL">AL</option>
										<option value="AP">AP</option>
										<option value="AM">AM</option>
										<option value="BA">BA</option>
										<option value="CE">CE</option>
										<option value="DF">DF</option>
										<option value="ES">ES</option>
										<option value="GO">GO</option>
										<option value="MA">MA</option>
										<option value="MT">MT</option>
										<option value="MS">MS</option>
										<option value="MG">MG</option>
										<option value="PA">PA</option>
										<option value="PB">PB</option>
										<option value="PR">PR</option>
										<option value="PE">PE</option>
										<option value="PI">PI</option>
										<option value="RJ">RJ</option>
										<option value="RN">RN</option>
										<option value="RS">RS</option>
										<option value="RO">RO</option>
										<option value="RR">RR</option>
										<option value="SC">SC</option>
										<option value="SP">SP</option>
										<option value="SE">SE</option>
										<option value="TO">TO</option>
									</select>
								</div>
								<div className="col-sm-12 col-md-3">
									<input
										type="text"
										maxLength={20}
										required
										readOnly
										placeholder="Pais"
										value={novoEndereco.pais}
									/>
								</div>
							</div>

							<div className="row mt-4">
								<div className="col-sm-12 col-md-12 col-lg-12 text-right">
									<button
										type="submit"
										className="btn-add-pizza"
									>
										Confirmar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export { ModalNovoEnderecos };
