import React, { Component } from "react";
import "./OrderBuilder.css";

import { connect } from "react-redux";
import { removeOrder } from "../../store/actions";

import Orders from "../../Components/Orders/Orders";

class orderBuilder extends Component {
    render() {
        console.log(this.props.totalPrice);
        return (
            <div>
                This is the Order Builder
                <Orders orderData={this.props.orderData} />
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
