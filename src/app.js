import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header"
import Routes from "./config/routes"

import "./assets/css/appStyle.css"

export default props => (
    <BrowserRouter>
        <div className="root">
            <Header />
            {/* <Routes /> */}
        </div>
    </BrowserRouter>
)
