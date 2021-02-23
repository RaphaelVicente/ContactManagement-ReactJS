import React from "react";

import Menu from "./menu";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

import "../assets/css/components/headerStyle.css";

export default props => (
    <div className="header">
        <h3>Contact Management</h3>
        <Menu>
            <MenuItem label="Main" path="/main"/>
            <MenuItem label="Contacts" path="/contacts"/>
            <MenuItem label="Country" path="/country"/>
            <MenuTree label="Administrator">
                <MenuItem label="Profile" path="/main"/>
            </MenuTree>
        </Menu>
    </div>
);