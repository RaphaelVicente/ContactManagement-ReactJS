import axios from "axios";
import { toastr } from "react-redux-toastr";

import { LIST_COUNTRIES, CREATE_COUNTRY } from "../../common/apiURLs";
import errorHandler from "../../common/errorHandler";

export const actions = {
    LIST_COUNTRIES: "LIST_COUNTRIES"
};

export function getAllCountries() {
    return dispatch => {
        axios.get(LIST_COUNTRIES)
            .then(resp => {
                dispatch({ type: actions.LIST_COUNTRIES, payload: resp.data });
            })
            .catch(e => {
                errorHandler(e).forEach(error => toastr.error("Erro", error));
            });
    };
}

export function createCountry(values) {
    return dispatch => {
        axios.post(CREATE_COUNTRY, values)
            .then(resp => {
                toastr.success("Success", "New country created with success.");
                dispatch(getAllCountries());
            })
            .catch(e => {
                errorHandler(e).forEach(error => toastr.error("Erro", error));
            });
    };
}