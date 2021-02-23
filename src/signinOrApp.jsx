import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "./app";
import SignIn from "./pages/signin";
import { validateToken } from "./store/signin/signinActions";

class SignInOrApp extends Component {

    componentDidMount() {
        if (this.props.signin)
            this.props.validateToken(this.props.signin.token)
    }

    render() {
        const validToken = this.props.signin || false;

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

const mapStateToProps = state => ({signin: state.signin});
const mapDispatchToProps = dispatch => bindActionCreators({validateToken}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignInOrApp);