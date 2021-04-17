import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { FazerPedido } from "../pages/fazer-pedido";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/fazer-pedido" component={FazerPedido} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
};

export { Routes };
