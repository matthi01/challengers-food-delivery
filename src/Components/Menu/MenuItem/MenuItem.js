import React from "react";
import "./MenuItem.css";

const MenuItem = props => {
    return (
        <div className="MenuItem">
            {props.itemName} - ${props.itemPrice.toFixed(2)}
        </div>
    );
};

export default MenuItem;
