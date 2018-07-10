import React from "react";
import "./Restaurant.css";

const Restaurant = props => {
    return (
        <div className="Restaurant" onClick={() => props.onClick(props.id)}>
            {props.name}
        </div>
    );
};

export default Restaurant;
