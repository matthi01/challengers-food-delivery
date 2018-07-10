import React from "react";
import "./Layout.css";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import RestaurantHeader from "./RestaurantHeader/RestaurantHeader";

const Layout = props => {
    return (
        <div>
            <Header />
            <Navigation />
            <RestaurantHeader />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
