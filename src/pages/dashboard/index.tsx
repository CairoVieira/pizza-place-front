import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SideBar } from "../../components/menu/sidebar";
import history from "../../components/history";
import "../../css/dashboard.css";
import "../../css/fazer-pedido.css";
import "../../css/home.css";
import * as action from "./actions";
import { sideBar, usuarioAutenticado } from "../../js/scripts";
import { Dash } from "./dash";

interface IProps {
	addPedido: Function;
	getUsuario: Function;
	getUltimoPedido: Function;
	store: {
		usuario: any;
	};
}

interface IState {}

class Dashboard extends Component<IProps, IState> {
	async componentDidMount() {
		const { getUsuario } = this.props;

		if (!usuarioAutenticado()) return history.push("/login");
		sideBar();
		getUsuario();
	}

	render() {
		return (
			<>
				<SideBar {...this.props} />
				<Dash {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
