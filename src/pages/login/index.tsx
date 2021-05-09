import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu } from "../../components/menu/navbar";
import { loginScripts } from "../../js/scripts";
import * as action from "./actions";
import { FormularioLogin } from "./formulario";

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
