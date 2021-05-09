import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu } from "../../components/menu";
import "../../css/fazer-pedido.css";
import "../../css/home.css";
import * as action from "./actions";
import { FormularioCheckout } from "./formulario";
import "../../css/checkout.css";
import { ModalEnderecos } from "../../components/modal/endereco";

interface IProps {
	addPedido: Function;
}

interface IState {}

class Checkout extends Component<IProps, IState> {
	componentDidMount() {
		const { addPedido } = this.props;
		addPedido(null, null, null, null, "CREDITO");
	}

	render() {
		return (
			<>
				<Menu {...this.props} />
				<FormularioCheckout {...this.props} />
				<ModalEnderecos {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
