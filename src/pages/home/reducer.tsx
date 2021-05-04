import {
	FILTRAR_BEBIDAS_GRUPO,
	FILTRAR_PIZZAS,
	LISTA_BEBIDAS_GRUPO,
	LISTA_PIZZAS,
} from "../../app/reducersTypes";

const INITIAL_STATE = {
	listaPizzas: [],
	listaPizzasFiltro: [],
	listaBebidasGrupo: [],
	listaBebidasGrupoFiltro: [],
	pizzaSelecionada: undefined,
	bebidaSelecionada: undefined,
};

const reducer = (state = INITIAL_STATE, action: any = {}) => {
	switch (action.type) {
		case LISTA_PIZZAS:
			return {
				...state,
				listaPizzas: action.payload,
				listaPizzasFiltro: action.payload,
			};
		case LISTA_BEBIDAS_GRUPO:
			return {
				...state,
				listaBebidasGrupo: action.payload,
				listaBebidasGrupoFiltro: action.payload,
			};
		case FILTRAR_PIZZAS:
			console.log("1.1", action);
			return {
				...state,
				listaPizzasFiltro: action.payload,
			};
		case FILTRAR_BEBIDAS_GRUPO:
			return {
				...state,
				listaBebidasGrupoFiltro: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
