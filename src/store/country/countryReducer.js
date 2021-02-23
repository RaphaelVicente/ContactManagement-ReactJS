import { actions } from "./countryActions";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.LIST_COUNTRIES:
            return { ...state, list: action.payload }
        default:
            return state;
    }
}