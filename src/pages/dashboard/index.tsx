import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SideBar } from "../../components/menu/sidebar";
import "../../css/dashboard.css";
import "../../css/fazer-pedido.css";
import "../../css/home.css";
import * as action from "./actions";
import { sideBar } from "../../js/scripts";
import { Dash } from "./dash";

interface IProps {
	addPedido: Function;
}

interface IState {}

class Dashboard extends Component<IProps, IState> {
	componentDidMount() {
		sideBar();
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
