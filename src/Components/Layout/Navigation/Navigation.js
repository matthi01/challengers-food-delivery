import React from "react";
import "./Navigation.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = props => {
    return (
        <nav className="Navigation">
            <NavigationItem link="/">Restaurants & Menus</NavigationItem>
            <NavigationItem link="/myOrders">My Orders</NavigationItem>
        </nav>
    );
};

export default Navigation;
