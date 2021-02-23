import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import SignInReducer from "./signin/signinReducer";
import CountryReducer from "./country/countryReducer";

const rootReducer = combineReducers({
    signin: SignInReducer,
    country: CountryReducer,
    toastr: toastrReducer
});

export default rootReducer;