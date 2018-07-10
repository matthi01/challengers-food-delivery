import React from "react";
import "./Menu.css";

import MenuItem from "./MenuItem/MenuItem";

const Menu = props => {
    let menuItems = null;
    if (props.menuData) {
        menuItems = props.menuData.map(item => {
            return <MenuItem itemName={item.name} itemPrice={item.price} />;
        });
    }

    return <div className="Menu">{menuItems}</div>;
};

export default Menu;
