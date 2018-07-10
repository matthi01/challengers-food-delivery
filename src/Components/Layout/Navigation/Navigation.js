import React from "react";
import "./Navigation.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = props => {
    return (
        <nav className="Navigation">
            <NavigationItem>Restaurants</NavigationItem>
            <NavigationItem>Orders</NavigationItem>
        </nav>
    );
};

export default Navigation;
