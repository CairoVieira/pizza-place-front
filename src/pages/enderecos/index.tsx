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
import { Enderecos } from "./enderecos";
import { ModalNovoEnderecos } from "../../components/modal/novoEndereco";

interface IProps {
	getUsuario: Function;
	store: {
		usuario: any;
	};
}

interface IState {}

class Endereco extends Component<IProps, IState> {
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
				<Enderecos {...this.props} />
				<ModalNovoEnderecos {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Endereco);
