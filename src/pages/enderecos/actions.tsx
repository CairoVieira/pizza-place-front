import axios from "axios";
import Swal from "sweetalert2";
import { IEndereco } from "../../interfaces/IEndereco";
import { IUsuario } from "../../interfaces/IUsuario";
import {
	SET_ENDERECO_EDIT,
	SET_ENDERECO_NEW,
	SET_LISTA_ENDERECOS,
	SET_NOVO_ENDERECO_BAIRRO,
	SET_NOVO_ENDERECO_CEP,
	SET_NOVO_ENDERECO_CIDADE,
	SET_NOVO_ENDERECO_CLIENTE,
	SET_NOVO_ENDERECO_COMPLEMENTO,
	SET_NOVO_ENDERECO_ESTADO,
	SET_NOVO_ENDERECO_LOGRADOURO,
	SET_NOVO_ENDERECO_NUMERO,
	SET_USUARIO,
} from "../../store/reducersTypes";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const getUsuario = () => {
	return (dispatch: any) => {
		const usuario = sessionStorage.getItem("user");
		if (usuario) {
			const payload: IUsuario = JSON.parse(usuario);
			dispatch({ type: SET_USUARIO, payload });
			dispatch(getEnderecos(payload));
		}
	};
};

const getEnderecos = (usuario: IUsuario) => {
	return (dispatch: any) => {
		return axios
			.get(`${API_URL}/enderecos/cliente/${usuario.id}`)
			.then((response: any) => {
				const payload = response.data;
				dispatch({ type: SET_LISTA_ENDERECOS, payload });
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao buscar os endereços",
						"error"
					);
			});
	};
};

const setEnderecoPrincipal = (endereco: IEndereco) => {
	return (dispatch: any) => {
		return axios
			.get(`${API_URL}/enderecos/principal/${endereco.id}`)
			.then((response: any) => {
				const payload = response.data;
				dispatch({ type: SET_LISTA_ENDERECOS, payload });
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao salvar o endereço principal",
						"error"
					);
			});
	};
};

const setNovoEnderecoLogradouro = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_LOGRADOURO, payload: value });
	};
};

const setNovoEnderecoComplemento = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_COMPLEMENTO, payload: value });
	};
};

const setNovoEnderecoBairro = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_BAIRRO, payload: value });
	};
};

const setNovoEnderecoCep = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_CEP, payload: value });
	};
};

const setNovoEnderecoCidade = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_CIDADE, payload: value });
	};
};

const setNovoEnderecoEstado = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_ESTADO, payload: value });
	};
};

const setNovoEnderecoNumero = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_NUMERO, payload: value });
	};
};

const setNovoEnderecoCliente = (value: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_NOVO_ENDERECO_CLIENTE, payload: value });
	};
};

const salvarEndereco = (endereco: IEndereco) => {
	return (dispatch: any) => {
		Swal.fire({
			text: "Deseja salvar este endereço?",
			title: "Atenção",
			icon: "info",
			showDenyButton: true,
			confirmButtonText: `Sim`,
			denyButtonText: `Não`,
		}).then((result) => {
			if (result.isConfirmed) {
				if (endereco.id) {
					axios
						.put(`${API_URL}/enderecos`, endereco)
						.then((res) => {
							Swal.fire(
								"Atenção",
								"Endereço salvo com sucesso!",
								"success"
							);
							dispatch(getUsuario());
						})
						.catch((err) => {
							if (err.response && err.response.status === 500)
								Swal.fire(
									"Atenção",
									`${err.response.data.error}`,
									"error"
								);
							else
								Swal.fire(
									"Atenção",
									"Ocorreu um erro ao salvar o endereço principal",
									"error"
								);
						});
				} else {
					axios
						.post(`${API_URL}/enderecos`, endereco)
						.then((res) => {
							Swal.fire(
								"Atenção",
								"Endereço salvo com sucesso!",
								"success"
							);
							dispatch(getUsuario());
						})
						.catch((err) => {
							if (err.response && err.response.status === 500)
								Swal.fire(
									"Atenção",
									`${err.response.data.error}`,
									"error"
								);
							else
								Swal.fire(
									"Atenção",
									"Ocorreu um erro ao salvar o endereço principal",
									"error"
								);
						});
				}
			} else if (result.isDenied) {
				Swal.fire("Changes are not saved", "", "info");
			}
		});
	};
};

const deleteEndereco = (endereco: IEndereco) => {
	return (dispatch: any) => {
		Swal.fire({
			text: "Deseja excluir este endereço?",
			title: "Atenção",
			icon: "info",
			showDenyButton: true,
			confirmButtonText: `Sim`,
			denyButtonText: `Não`,
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`${API_URL}/enderecos/${endereco.id}`)
					.then((res) => {
						Swal.fire(
							"Atenção",
							"Endereço excluído com sucesso!",
							"success"
						);
						dispatch(getUsuario());
					})
					.catch((err) => {
						if (err.response && err.response.status === 500)
							Swal.fire(
								"Atenção",
								`${err.response.data.error}`,
								"error"
							);
						else
							Swal.fire(
								"Atenção",
								"Ocorreu um erro ao deletar o endereço",
								"error"
							);
					});
			} else if (result.isDenied) {
				Swal.fire("Changes are not saved", "", "info");
			}
		});
	};
};

const setEnderecoEdit = (endereco: IEndereco) => {
	return (dispatch: any) => {
		dispatch({ type: SET_ENDERECO_EDIT, payload: endereco });
	};
};

const setNovoEndereco = () => {
	return (dispatch: any) => {
		dispatch({ type: SET_ENDERECO_NEW, payload: {} });
	};
};

export {
	getUsuario,
	getEnderecos,
	setEnderecoPrincipal,
	setNovoEnderecoLogradouro,
	setNovoEnderecoNumero,
	setNovoEnderecoComplemento,
	setNovoEnderecoBairro,
	setNovoEnderecoCep,
	setNovoEnderecoCidade,
	setNovoEnderecoEstado,
	setNovoEnderecoCliente,
	salvarEndereco,
	deleteEndereco,
	setEnderecoEdit,
	setNovoEndereco,
};
