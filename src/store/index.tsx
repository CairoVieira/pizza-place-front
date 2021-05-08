import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import pizzaria from "./pizzaria";
import usuario from "./usuario";
import pedido from "./pedido";

const reducers = combineReducers({ pizzaria, usuario, pedido });
export const middleware = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(reducers);
