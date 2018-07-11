import React from "react";
import "./Header.css";

const Header = props => {
    return (
        <div className="Header">
            <div className="Header_title">Challenger's Food Delivery</div>
            <div className="Header_logo">
                <img src={require("../../../Assets/Logo2.png")} alt="" />
            </div>
        </div>
    );
};

export default Header;
