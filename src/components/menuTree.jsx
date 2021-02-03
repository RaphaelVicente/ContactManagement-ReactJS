import React from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

import "../assets/css/components/menuTreeStyle.css"

function MenuTree(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <nav className={menuOpen ? "menuTreeOpen" : "menuTree"} onClick={() => setMenuOpen(!menuOpen)} >
            <p className="label">
                {props.label}
                {menuOpen ? <AiOutlineUp className="menuTreeIcon"/> : <AiOutlineDown className="menuTreeIcon"/>}
            </p>
            {menuOpen ? props.children : null}
        </nav>
    );
}

export default MenuTree;