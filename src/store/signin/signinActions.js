import axios from "axios";
import { toastr } from "react-redux-toastr";

import { AUTHENTICATE, VALIDATE_TOKEN } from "../../common/apiURLs";
import errorHandler from "../../common/errorHandler";

export const actions = {
    TOKEN_VALIDATED: "TOKEN_VALIDATED",
    USER_AUTHENTICATED: "USER_AUTHENTICATED"
};

export function signin(values) {
    return dispatch => {
        axios.post(AUTHENTICATE, getUser(values))
            .then(resp => {
                if (resp.status === 200) {
                    dispatch({ type: actions.USER_AUTHENTICATED, payload: resp.data });
                    axios.defaults.headers.common["Authorization"] = JSON.stringify(resp.data.token);
                } else
                    toastr.error("Erro", resp.data.error);
            })
            .catch(e => {
                errorHandler(e).forEach(error => toastr.error("Erro", error));
            });
    };
}

export function signout() {
    return {
        type: actions.TOKEN_VALIDATED,
        payload: {valid: false}
    };
}

export function validateToken(token) {
    return dispatch => {
        verifyToken(dispatch, token);
    };
}

export function verifyToken(dispatch, token) {
    if (token) {
        axios.post(VALIDATE_TOKEN, { token: token })
            .then(resp => {
                dispatch({ type: actions.TOKEN_VALIDATED, payload: resp.data });
            })
            .catch(e => {
                dispatch({ type: actions.TOKEN_VALIDATED, payload: {valid: false} });
            });
    }
    else
        dispatch({ type: actions.TOKEN_VALIDATED, payload: {valid: false} });
}

function getUser(values) {
    return {
        username: values.username,
        password: values.password
    };
}