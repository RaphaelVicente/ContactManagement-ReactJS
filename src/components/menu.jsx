import React from "react"

import "../assets/css/components/menuStyle.css"

export default props => (
    <nav className="menu">
        {props.children}
    </nav>
)