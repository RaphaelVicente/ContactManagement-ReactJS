import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import multi from 'redux-multi'
import thunk from "redux-thunk";
import promise from "redux-promise";

import SignInOrApp from "./signinOrApp";
import reducers from "./store/reducers";

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);
ReactDOM.render(
    <Provider store={store}>
        <SignInOrApp/>
    </Provider>,
    document.getElementById("main")
);