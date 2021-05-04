import { Menu } from "../../components/menu";
import { FormularioLogin } from "./formulario";
import { loginScripts } from "../../js/scripts";
import { Component, useEffect } from "react";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "./actions";

class Login extends Component {
	componentDidMount() {
		loginScripts();
	}

	render() {
		return (
			<>
				<Menu {...this.props} />
				<FormularioLogin {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
