import {
	FILTRAR_BEBIDAS_GRUPO,
	FILTRAR_PIZZAS,
	LISTA_BEBIDAS_GRUPO,
	LISTA_INGREDIENTES,
	LISTA_PIZZAS,
	SET_BEBIDA_SELECIONADA,
	SET_PIZZA_SELECIONADA,
} from "../../app/reducersTypes";

const INITIAL_STATE = {
	listaPizzas: [],
	listaPizzasFiltro: [],
	listaBebidasGrupo: [],
	listaBebidasGrupoFiltro: [],
	listaIngredientes: [],
	pizzaSelecionada: {},
	bebidaSelecionada: [],
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
		case LISTA_INGREDIENTES:
			return {
				...state,
				listaIngredientes: action.payload,
			};
		case FILTRAR_PIZZAS:
			return {
				...state,
				listaPizzasFiltro: action.payload,
			};
		case FILTRAR_BEBIDAS_GRUPO:
			return {
				...state,
				listaBebidasGrupoFiltro: action.payload,
			};
		case SET_BEBIDA_SELECIONADA:
			return {
				...state,
				bebidaSelecionada: action.payload,
			};
		case SET_PIZZA_SELECIONADA:
			return {
				...state,
				pizzaSelecionada: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
