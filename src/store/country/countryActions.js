import axios from "axios";
import { toastr } from "react-redux-toastr";

import { LIST_COUNTRIES } from "../../common/apiURLs";
import errorHandler from "../../common/errorHandler";

export const actions = {
    LIST_COUNTRIES: "LIST_COUNTRIES"
};

export function getAllCountries() {
    axios.get(LIST_COUNTRIES)
        .then(resp => {
            dispatch({ type: actions.LIST_COUNTRIES, payload: resp.data });
        })
        .catch(e => {
            errorHandler(e).forEach(error => toastr.error("Erro", error));
        });
}