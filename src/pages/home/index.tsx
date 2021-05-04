import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Cardapio } from "../../components/cardapio";
import { Menu } from "../../components/menu";
import { Pizza } from "../../components/pizza";
import { Rodape } from "../../components/rodape";
import "../../css/home.css";
import { IUsuario } from "../../interfaces/IUsuario";
import * as action from "./actions";
import { PassoPasso } from "./passo-passo";
import { QuemSomos } from "./quem-somos";

interface IProps {
	getPizzas: Function;
	getBebidasGrupo: Function;
	store: {
		pizzaria: any;
		usuario: IUsuario;
	};
}

interface IState {}
class Home extends Component<IProps, IState> {
	componentDidMount() {
		const { getPizzas, getBebidasGrupo } = this.props;
		getPizzas();
		getBebidasGrupo();
	}

	render() {
		return (
			<>
				<Menu {...this.props} />
				<Pizza />
				<QuemSomos />
				<PassoPasso />
				<Cardapio {...this.props} habilitarPedido={false} />
				<Rodape />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
