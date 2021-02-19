import { combineReducers } from "redux";

import SignInReducer from "./signin/signinReducer";

const rootReducer = combineReducers({
    signin: SignInReducer
});

export default rootReducer;