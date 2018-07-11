import React from "react";
import "./Menu.css";

import MenuItem from "./MenuItem/MenuItem";

const Menu = props => {
    let menuItems = null;
    if (props.menuData) {
        menuItems = props.menuData.map(item => {
            return (
                <MenuItem
                    key={item.name}
                    restaurantId={props.restaurantId}
                    itemName={item.name}
                    itemPrice={item.price}
                    onIncrementClick={props.onIncrementClick}
                    onDecrementClick={props.onDecrementClick}
                    orderData={props.orderData}
                />
            );
        });
    }

    return <div className="Menu">{menuItems}</div>;
};

export default Menu;
