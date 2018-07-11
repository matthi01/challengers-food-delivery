import React from "react";
import "./Order.css";

const Order = props => {
    console.log("orderData: ", props.orderData);

    let orderItems = props.orderData.map(item => {
        if (item.quantity > 0) {
            return (
                <div className="OrderItem" key={props.orderNumber + item.item}>
                    <strong>Item:</strong> {item.item} -{" "}
                    <strong>Quantity:</strong> {item.quantity}
                </div>
            );
        }
    });

    return (
        <div className="Order">
            <strong>Order:</strong> {props.orderNumber}
            <br />
            {orderItems}
        </div>
    );
};

export default Order;
