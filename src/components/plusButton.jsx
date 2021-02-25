import React from "react"
import { TiPlus } from "react-icons/ti"

import "../assets/css/components/plusButtonStyle.css"

export default props => (
    <button className="country-button" onClick={props.onClick}>
        <TiPlus className="plus-icon" />{props.label}
    </button>
)