import React from "react";

import "../assets/css/components/panelStyle.css"

export default props => (
    <div className="panel">
        {props.children}
    </div>
);