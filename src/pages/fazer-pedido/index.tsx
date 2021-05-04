import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Cardapio } from "../../components/cardapio";
import history from "../../components/history";
import { Menu } from "../../components/menu";
import { ModalBebida } from "../../components/modal/bebidas";
import { ModalCriarPizza } from "../../components/modal/criar-pizza";
import { ModalPizzas } from "../../components/modal/pizzas";
import { Pizza } from "../../components/pizza";
import { Rodape } from "../../components/rodape";
import "../../css/fazer-pedido.css";
import "../../css/home.css";
import { IUsuario } from "../../interfaces/IUsuario";
import { usuarioAutenticado } from "../../js/scripts";
import * as action from "./actions";
import { FazerBusca } from "./fazer-busca";

interface IProps {
	getIngredientes: Function;
	getBebidasGrupo: Function;
	getPizzas: Function;
	getUsuario: Function;
	store: {
		pizzaria: any;
		usuario: {
			usuario: IUsuario;
		};
	};
}

interface IState {}

class FazerPedido extends Component<IProps, IState> {
	componentDidMount() {
		const {
			getIngredientes,
			getBebidasGrupo,
			getPizzas,
			getUsuario,
		} = this.props;

		if (!usuarioAutenticado()) return history.push("/login");

		getIngredientes();

		if (this.props.store.pizzaria.listaBebidasGrupoFiltro.length === 0)
			getBebidasGrupo();
		if (this.props.store.pizzaria.listaPizzasFiltro.length === 0)
			getPizzas();
		if (!this.props.store.usuario.usuario.nome) getUsuario();
	}

	render() {
		return (
			<>
				<Menu {...this.props} />
				<Pizza />
				<FazerBusca {...this.props} />
				<Cardapio {...this.props} habilitarPedido={true} />
				<Rodape />
				<ModalCriarPizza {...this.props} />
				<ModalBebida {...this.props} />
				<ModalPizzas {...this.props} />
			</>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { store: state };
};

const mapDispatchToProps = (dispatch: any) => {
	return bindActionCreators(action, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FazerPedido);
