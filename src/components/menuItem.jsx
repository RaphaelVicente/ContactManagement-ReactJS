import React from "react"
import { NavLink } from "react-router-dom";

import "../assets/css/components/menuItemStyle.css"

export default props => (
    <NavLink to={props.path} className="item">
        {props.label}
    </NavLink>
)