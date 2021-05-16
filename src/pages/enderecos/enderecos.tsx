import { IEndereco } from "../../interfaces/IEndereco";

const Enderecos = (props: any) => {
	const { usuario } = props.store;

	const handleChangePrincipal = (endereco: IEndereco) => {
		if (!endereco.is_principal) props.setEnderecoPrincipal(endereco);
	};

	const handleDelete = (endereco: IEndereco) => {
		props.deleteEndereco(endereco);
	};

	const handleEdit = (endereco: IEndereco) => {
		props.setEnderecoEdit(endereco);
	};

	const handleNovoEndereco = () => {
		props.setNovoEndereco();
	};

	return (
		<div className="dashboard-background">
			<div className="container">
				<div className="row">
					<h1 className="dash-titulos">ENDEREÇOS</h1>
				</div>
				<div className="row ">
					<button
						className="btn-secundario btn-trocar-endereco add-endereco"
						data-toggle="modal"
						data-target="#ModalNovoEnderecos"
						onClick={handleNovoEndereco}
					>
						Adicionar Endereço
					</button>
				</div>
				{usuario.listaEndereco.length > 0 &&
					usuario.listaEndereco.map((endereco: IEndereco) => (
						<div className="row mt-3 box-endereco">
							<div className="col-sm-8 col-md-10 col-lg-10">
								{usuario.endereco && (
									<>
										<label>
											{endereco.logradouro},{" "}
											{endereco.numero},{" "}
											{endereco.complemento},{" "}
											{endereco.bairro}
										</label>
										<br />
										<label>
											{endereco.cidade} -{" "}
											{endereco.estado}
										</label>
									</>
								)}
							</div>
							<div className="col-sm-4 col-md-2 col-lg-2 text-right">
								<button
									className={
										endereco.is_principal
											? "btn-trocar-endereco seagreen"
											: "btn-trocar-endereco"
									}
									onClick={() =>
										handleChangePrincipal(endereco)
									}
									title="Endereço Principal"
								>
									<i className="fas fa-check-circle"></i>
								</button>
								<button
									className="btn-trocar-endereco"
									title="Editar"
									data-toggle="modal"
									data-target="#ModalNovoEnderecos"
									onClick={() => handleEdit(endereco)}
								>
									<i className="fas fa-edit"></i>
								</button>
								<button
									className="btn-trocar-endereco"
									title="Remover"
									onClick={() => handleDelete(endereco)}
								>
									<i className="fas fa-trash-alt"></i>
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export { Enderecos };
