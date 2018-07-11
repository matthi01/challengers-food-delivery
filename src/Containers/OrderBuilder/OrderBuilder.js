import React, { Component } from "react";
import "./OrderBuilder.css";

import { connect } from "react-redux";
import { removeOrder } from "../../store/actions";

import Orders from "../../Components/Orders/Orders";

class orderBuilder extends Component {
    render() {
        // running out of time - state is not in an ideal format.
        // translating the orders into an object, with one key per restaurant id (order), each key has a value of an array of menu item objects
        // if I had more time I would make sure the state was set up properly in the reducer instead
        let ordersObj = {};
        this.props.orderData.forEach(order => {
            let newOrder = { item: order.item, quantity: order.quantity };

            if (ordersObj[order.restaurantId]) {
                ordersObj[order.restaurantId].push(newOrder);
            } else {
                ordersObj[order.restaurantId] = [newOrder];
            }
        });

        return (
            <div>
                <Orders ordersData={ordersObj} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalPrice: state.totalPrice,
        orderData: state.orderData,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveOrder: restaurantId => dispatch(removeOrder(restaurantId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(orderBuilder);
