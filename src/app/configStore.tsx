import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import pizzaria from "../pages/home/reducer";
import usuario from "../pages/fazer-pedido/reducer";

const reducers = combineReducers({ pizzaria, usuario });
export const middleware = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(reducers);
