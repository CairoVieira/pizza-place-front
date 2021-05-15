import axios from "axios";
import Swal from "sweetalert2";
import * as actionHome from "../home/actions";
import {
	FILTRAR_BEBIDAS_GRUPO,
	FILTRAR_PIZZAS,
	LISTA_INGREDIENTES,
	SET_BEBIDA_SELECIONADA,
	SET_CRIAR_PIZZA_ITENS,
	SET_CRIAR_PIZZA_ITENS_ADD,
	SET_CRIAR_PIZZA_NOME,
	SET_CRIAR_PIZZA_QUANTIDADE,
	SET_CRIAR_PIZZA_VALOR,
	SET_LISTA_ENDERECOS,
	SET_PEDIDO_BEBIDA,
	SET_PEDIDO_ENDERECO,
	SET_PEDIDO_PAGAMENTO,
	SET_PEDIDO_PIZZA,
	SET_PEDIDO_USUARIO,
	SET_PEDIDO_VALOR,
	SET_PIZZA_SELECIONADA,
	SET_USUARIO,
} from "../../store/reducersTypes";
import { IPizzas } from "../../interfaces/IPizzas";
import { IBebidas } from "../../interfaces/IBebidas";
import { IUsuario } from "../../interfaces/IUsuario";
import { IEndereco } from "../../interfaces/IEndereco";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";

const getPizzas = () => {
	return (dispatch: any) => {
		dispatch(actionHome.getPizzas());
	};
};

const getBebidasGrupo = () => {
	return (dispatch: any) => {
		dispatch(actionHome.getBebidasGrupo());
	};
};

const getIngredientes = () => {
	return (dispatch: any) => {
		return axios
			.get(`${API_URL}/ingredientes`)
			.then((response) => {
				const payload = response.data;
				dispatch({ type: LISTA_INGREDIENTES, payload });
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao buscar bebidas",
						"error"
					);
			});
	};
};

const getUsuario = () => {
	return (dispatch: any) => {
		const usuario = sessionStorage.getItem("user");
		if (usuario) {
			const payload: IUsuario = JSON.parse(usuario);
			dispatch({ type: SET_USUARIO, payload });
			dispatch({ type: SET_PEDIDO_USUARIO, payload: payload.id });
			dispatch({
				type: SET_PEDIDO_ENDERECO,
				payload: payload.endereco.id,
			});
			dispatch(getEnderecosUsuario(payload));
		}
	};
};

const handleFiltrarPedido = (
	listaPizzas: Array<IPizzas>,
	listaBebidas: Array<Array<IBebidas>>
) => {
	return (dispatch: any) => {
		dispatch({ type: FILTRAR_PIZZAS, payload: listaPizzas });
		dispatch({ type: FILTRAR_BEBIDAS_GRUPO, payload: listaBebidas });
	};
};

const setBebidaSelecionada = (bebida: Array<IBebidas>) => {
	return (dispatch: any) => {
		dispatch({ type: SET_BEBIDA_SELECIONADA, payload: bebida });
	};
};

const setPizzaSelecionada = (pizza: IPizzas) => {
	return (dispatch: any) => {
		dispatch({ type: SET_PIZZA_SELECIONADA, payload: pizza });
	};
};

const addPizza = (pizza: IPizzas) => {
	return (dispatch: any) => {
		axios
			.post(`${API_URL}/pizzas`, pizza)
			.then((response: any) => {
				console.log("response==", response);
				const novaPizza = response.data;

				novaPizza.valorTotal = pizza.valorTotal;
				novaPizza.quantidade = pizza.quantidade;
				dispatch(
					addPedido(
						undefined,
						undefined,
						novaPizza,
						undefined,
						undefined
					)
				);
			})
			.catch((err) => {
				Swal.fire(
					"Erro ao criar pizza",
					`Ocorreu um erro ao salvar a pizza ${pizza.nome}. ${err.response.data.error}`,
					"error"
				);
			});
	};
};

const addPedido = (
	usuario?: IUsuario,
	endereco?: IEndereco,
	pizza?: IPizzas,
	bebida?: IBebidas,
	pagamento?: string
) => {
	return (dispatch: any) => {
		if (usuario) {
			dispatch({ type: SET_PEDIDO_USUARIO, payload: usuario.id });
		}

		if (endereco) {
			dispatch({ type: SET_PEDIDO_ENDERECO, payload: endereco.id });
		}
		if (pizza) {
			const pedido_pizza = {
				pizza_id: pizza.id,
				quantidade: pizza.quantidade,
				valor_item_pedido: pizza.valorTotal,
			};
			dispatch({ type: SET_PEDIDO_PIZZA, payload: pedido_pizza });
			dispatch({
				type: SET_PEDIDO_VALOR,
				payload: pedido_pizza.valor_item_pedido,
			});
			Swal.fire(
				"Pizza adicionada",
				`Foi adicionado ${pizza.quantidade} ${
					pizza.quantidade > 1 ? "pizzas" : "pizza"
				} ${pizza.nome} ao seu pedido!`,
				"success"
			);
		}

		if (bebida) {
			const pedido_bebida = {
				bebida_id: bebida.id,
				quantidade: bebida.quantidade,
				valor_item_pedido: bebida.quantidade * bebida.valor,
			};
			dispatch({ type: SET_PEDIDO_BEBIDA, payload: pedido_bebida });
			dispatch({
				type: SET_PEDIDO_VALOR,
				payload: pedido_bebida.valor_item_pedido,
			});
		}

		if (pagamento) {
			dispatch({ type: SET_PEDIDO_PAGAMENTO, payload: pagamento });
		}
	};
};

const getEnderecosUsuario = (usuario: IUsuario) => {
	return (dispatch: any) => {
		return axios
			.get(`${API_URL}/enderecos/cliente/${usuario.id}`)
			.then((response) => {
				const payload = response.data;
				dispatch({ type: SET_LISTA_ENDERECOS, payload });
			})
			.catch((err) => {
				if (err.response && err.response.status === 500)
					Swal.fire("Atenção", `${err.response.data.error}`, "error");
				else
					Swal.fire(
						"Atenção",
						"Ocorreu um erro ao buscar os endereços do usuário",
						"error"
					);
			});
	};
};

const setCriarPizzaNome = (nome: string) => {
	return (dispatch: any) => {
		dispatch({ type: SET_CRIAR_PIZZA_NOME, payload: nome });
	};
};

const setCriarPizzaItens = (itensPizza: string[]) => {
	return (dispatch: any) => {
		dispatch({ type: SET_CRIAR_PIZZA_ITENS, payload: itensPizza });
	};
};

const setCriarPizzaItensAdd = (item: string[]) => {
	return (dispatch: any) => {
		dispatch({ type: SET_CRIAR_PIZZA_ITENS_ADD, payload: item });
	};
};

const setCriarPizzaQtd = (quantidade: number) => {
	return (dispatch: any) => {
		dispatch({ type: SET_CRIAR_PIZZA_QUANTIDADE, payload: quantidade });
	};
};

const setCriarPizzaValor = (valor: number) => {
	return (dispatch: any) => {
		dispatch({ type: SET_CRIAR_PIZZA_VALOR, payload: valor });
	};
};

export {
	getIngredientes,
	getBebidasGrupo,
	getPizzas,
	getUsuario,
	handleFiltrarPedido,
	setBebidaSelecionada,
	setPizzaSelecionada,
	addPizza,
	addPedido,
	getEnderecosUsuario,
	setCriarPizzaNome,
	setCriarPizzaItens,
	setCriarPizzaItensAdd,
	setCriarPizzaQtd,
	setCriarPizzaValor,
};
