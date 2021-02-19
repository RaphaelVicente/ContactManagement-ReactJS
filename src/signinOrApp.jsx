import React, { Component } from "react";

import App from "./app";
import SignIn from "./pages/signin";

class SignInOrApp extends Component {

    render() {
        const { token, validToken } = this.props.login || { token: null, validToken: false };

        if (validToken) {
            return <App />;
        }
        else if (!validToken) {
            return <SignIn />;
        }
        else {
            return false;
        }
    }
}

export default SignInOrApp;