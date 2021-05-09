import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Cardapio } from "../../components/cardapio";
import history from "../../components/history";
import { Menu } from "../../components/menu/navbar";
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
	addPedido: Function;
	getEnderecosUsuario: Function;
	store: {
		pedido: any;
		pizzaria: any;
		usuario: IUsuario;
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
			addPedido,
			getEnderecosUsuario,
		} = this.props;

		if (!usuarioAutenticado()) return history.push("/login");

		getIngredientes();

		if (this.props.store.pizzaria.listaBebidasGrupoFiltro.length === 0)
			getBebidasGrupo();
		if (this.props.store.pizzaria.listaPizzasFiltro.length === 0)
			getPizzas();
		console.log("1.0", this.props.store);
		if (!this.props.store.usuario.nome) getUsuario();
		else {
			addPedido(this.props.store.usuario);
			addPedido(null, this.props.store.usuario.endereco);
			getEnderecosUsuario(this.props.store.usuario);
		}
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
