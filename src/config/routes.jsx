import React from "react";
import { Route, Redirect } from "react-router-dom";

import Main from "../pages/main";
import Contacts from "../pages/contacts";
import Country from "../pages/country";

export default props => (
    <div className="body">
        <Route component={Main} path="/main" />
        <Route component={Contacts} path="/contacts" />
        <Route component={Country} path="/country" />
        <Redirect from="*" to="/main" />
    </div>
);