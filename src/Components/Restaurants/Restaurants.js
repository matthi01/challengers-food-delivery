import React from "react";
import "./Restaurants.css";

import Restaurant from "./Restaurant/Restaurant";

const Restaurants = props => {
    let restaurants = null;
    if (props.restaurants) {
        restaurants = props.restaurants.map(restaurant => {
            return (
                <Restaurant
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    onClick={props.onClick}
                />
            );
        });
    }

    return <div className="Restaurants">{restaurants}</div>;
};

export default Restaurants;
