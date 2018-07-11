import React from "react";
import "./Layout.css";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

const Layout = props => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
