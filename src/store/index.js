import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';

//components
import reducer from "../reducers/productsReducer";

const store = createStore(
    reducer,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;