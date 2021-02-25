import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toastr } from "react-redux-toastr";

import { signin } from "../store/signin/signinActions";
import Messages from "../components/messages";

import "../assets/css/pages/signinStyle.css";

class SignIn extends Component {

    forgotPassword(event) {
        event.preventDefault();
        toastr.warning("Info", "It is not finished yet...");
    }

    render() {
        const handleSubmit = (e) => {
            e.preventDefault();

            const values = {};
            values[e.target[0].name] = e.target[0].value;
            values[e.target[1].name] = e.target[1].value;
            
            this.props.signin(values);
        }

        return (
            <div className="background">
                <div className="signin">
                    <form onSubmit={handleSubmit}>
                        <div className="signin-box">
                            <label>Sign In</label>
                            <input type="text" name="username" placeholder="Username" />
                            <input type="password" name="password" placeholder="Password" />
                            <button type='submit'>Login</button>
                            <a href="" onClick={this.forgotPassword}>Forgot password</a>
                        </div>
                    </form> 
                </div>
                <Messages/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch)

export default connect(null, mapDispatchToProps)(SignIn);