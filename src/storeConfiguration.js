import { createStore, combineReducers } from 'redux'
import thunk from "redux-thunk"

import basicReducer from "./reducers/basicReducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers(
        {
            basic: basicReducer
        }
    ));
    return store;
}