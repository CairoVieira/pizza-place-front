import { Router, Redirect, Route, Switch } from "react-router-dom";
import FazerPedido from "../pages/fazer-pedido";
import Home from "../pages/home";
import Login from "../pages/login";
import history from "../components/history";
import { Provider } from "react-redux";

import store from "../store";

const Routes = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/fazer-pedido" component={FazerPedido} />
					<Redirect path="*" to="/" />
				</Switch>
			</Router>
		</Provider>
	);
};

export { Routes };
