import React from "react";
import "./Orders.css";

import Order from "./Order/Order";

const Orders = props => {
    let orderNumbers = Object.keys(props.ordersData);

    let orders = null;
    if (orderNumbers) {
        orders = orderNumbers.map(orderNumber => {
            return (
                <Order
                    key={orderNumber}
                    orderNumber={orderNumber}
                    orderData={props.ordersData[orderNumber]}
                />
            );
        });
    }

    return <div className="Orders">{orders}</div>;
};

export default Orders;
