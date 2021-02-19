import { actions } from "./signinActions";

const userToken = "CMToken";
const INITIAL_STATE = JSON.parse(localStorage.getItem(userToken));

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.TOKEN_VALIDATED:
            if (action.payload.valid)
                return { ...state, validToken: true, authUser: action.payload.authUser };
            
            localStorage.removeItem(userToken);
            return { ...state, token: null, validToken: false, authUser: null };
        case actions.USER_AUTHENTICATED:
            const { token, authUser } = action.payload;
            
            localStorage.setItem(userToken, JSON.stringify({ token: token }));
            return { ...state, token: token, validToken: true, authUser: authUser };
        default:
            return state;
    }
}