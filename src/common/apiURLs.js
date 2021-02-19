const BASE_URL = "http://localhost:3030";
const UNAUTH_URL = BASE_URL + "/unau";
const AUTH_URL = BASE_URL + "/au";

export const AUTHENTICATE = UNAUTH_URL + "/auth";
export const VALIDATE_TOKEN = UNAUTH_URL + "/validateToken";

export const CREATE_ADDRESS = AUTH_URL + "/address";
export const LIST_ADDRESSES = AUTH_URL + "/addresses";
export const LIST_ADDRESSES_CITY = cityId => { `${AUTH_URL}/city/${cityId}/addresses` };
export const LIST_ADDRESSES_PERSON = personId => { `${AUTH_URL}/person/${personId}/addresses` };

export const CREATE_CITY = AUTH_URL + "/city";
export const LIST_CITIES = AUTH_URL + "/cities";
export const LIST_CITIES_NAME = name => { `${AUTH_URL}/city/${name}` };
export const LIST_CITIES_STATE = stateId => { `${AUTH_URL}/state/${stateId}/cities` };

export const CREATE_CONTACT = AUTH_URL + "/contact";
export const LIST_CONTACTS_PERSON = personId => { `${AUTH_URL}/person/${personId}/contacts` };

export const CREATE_COUNTRY = AUTH_URL + "/country";
export const LIST_COUNTRIES = AUTH_URL + "/countries";
export const LIST_COUNTRY_NAME = name => { `${AUTH_URL}/country/${name}` };

export const CREATE_EMPLOYEE = AUTH_URL + "/employee";
export const LIST_EMPLOYEES = AUTH_URL + "/employees";
export const LIST_EMPLOYEE_USERNAME = username => { `${AUTH_URL}/employee/${username}` };

export const CREATE_PERSON = AUTH_URL + "/person";
export const LIST_PEOPLE = AUTH_URL + "/people";
export const LIST_PEOPLE_NAME = name => { `${AUTH_URL}/people/${name}` };

export const CREATE_STATE = AUTH_URL + "/state";
export const LIST_STATES = AUTH_URL + "/states";
export const LIST_STATES_NAME = name => { `${AUTH_URL}/state/${name}` };
export const LIST_STATES_COUNTRY = countryId => { `${AUTH_URL}/country/${countryId}/states` };
