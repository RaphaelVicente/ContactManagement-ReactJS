import React, { Component } from "react";

import App from "./app";
import Login from "./pages/login";

class LoginOrApp extends Component {

    componentWillMount() {
        //Validate token
    }

    render() {
        const { token, validToken } = this.props.login || { token: null, validToken: false };

        if (validToken) {
            return <App />;
        }
        else if (!validToken) {
            return <Login />;
        }
        else {
            return false;
        }
    }
}

export default LoginOrApp;