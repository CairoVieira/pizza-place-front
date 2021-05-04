import React, { Component, useEffect, useState } from "react";
import { Cardapio } from "../../components/cardapio";
import { ModalCriarPizza } from "../../components/modal/criar-pizza";
import { ModalBebida } from "../../components/modal/bebidas";
import history from "../../components/history";
import { Menu } from "../../components/menu";
import { Pizza } from "../../components/pizza";
import { Rodape } from "../../components/rodape";
import "../../css/fazer-pedido.css";
import "../../css/home.css";
import { IBebidas } from "../../interfaces/IBebidas";
import { IPizzas } from "../../interfaces/IPizzas";
import { usuarioAutenticado } from "../../js/scripts";
import * as action from "./actions";
import { FazerBusca } from "./fazer-busca";
import { IIngredientes } from "../../interfaces/IIngredientes";
import { IUsuario } from "../../interfaces/IUsuario";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

	handlePedirBebida = (categoria: string) => {
		// let novaListaBebidas = listaBebidas.find(
		// 	(b) => b[0].categoria === categoria
		// );
		// console.log("1.0", novaListaBebidas);
		// if (novaListaBebidas) {
		// 	novaListaBebidas.forEach((bebida) => {
		// 		bebida.qtd = 0;
		// 	});
		// 	setListaPedirBebida([...novaListaBebidas]);
		// }
	};

	render() {
		return (
			<>
				<Menu {...this.props} />
				<Pizza />
				<FazerBusca {...this.props} />
				<Cardapio {...this.props} habilitarPedido={true} />
				<Rodape />
				{this.props.store.pizzaria.ingredientes &&
					this.props.store.pizzaria.ingredientes.length > 0 && (
						<ModalCriarPizza {...this.props} />
					)}
				{this.props.store.pizzaria.listaBebidasGrupoFiltro.length >
					0 && (
					<ModalBebida
						{...this.props}
						// handleQtdMenos={handleQtdMenos}
						// handleQtdMais={handleQtdMais}
					/>
				)}
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
