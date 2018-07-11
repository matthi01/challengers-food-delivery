import React, { Component } from "react";
import { connect } from "react-redux";

import "./MenuBuilder.css";

import { addItem, removeItem, fetchRestaurantData } from "../../store/actions";

import Restaurants from "../../Components/Restaurants/Restaurants";
import Menu from "../../Components/Menu/Menu";
import SubmitOrder from "../../Components/SubmitOrder/SubmitOrder";

class MenuBuilder extends Component {
    state = {
        selectedRestaurant: null
    };

    componentDidMount() {
        this.props.onFetchRestaurantData();
    }

    onRestaurantClickHandler = restaurantId => {
        this.setState({ selectedRestaurant: restaurantId });
    };

    onMenuItemIncrement = (restaurantId, item, price) => {
        this.props.onItemAdded(restaurantId, item, price);
    };

    onMenuItemDecrement = (restaurantId, item, price) => {
        this.props.onItemRemoved(restaurantId, item, price);
    };

    onSubmitOrderHandler = () => {
        this.props.history.push("/myOrders");
    };

    render() {
        // set up the restaurant list once retrieved
        let restaurants = null;
        if (this.props.restaurantData) {
            restaurants = (
                <Restaurants
                    restaurants={this.props.restaurantData}
                    onClick={this.onRestaurantClickHandler}
                />
            );
        }

        // set up menu if a restaurant has been selected
        let menu = null;
        if (this.state.selectedRestaurant) {
            let menuData = this.props.restaurantData.find(restaurant => {
                return restaurant.id === this.state.selectedRestaurant;
            }).menu;
            menu = (
                <Menu
                    restaurantId={this.state.selectedRestaurant}
                    menuData={menuData}
                    orderData={this.props.orderData}
                    onIncrementClick={this.onMenuItemIncrement}
                    onDecrementClick={this.onMenuItemDecrement}
                />
            );
        }

        return (
            <div className="MenuBuilder">
                Please make your selection by clicking on a restaurant
                {restaurants}
                {menu}
                {this.state.selectedRestaurant ? (
                    <SubmitOrder
                        onSubmitOrder={this.onSubmitOrderHandler}
                        totalPrice={this.props.totalPrice}
                    />
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurantData: state.restaurantData,
        orderData: state.orderData,
        totalPrice: state.totalPrice,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (restaurantId, item, price) =>
            dispatch(addItem(restaurantId, item, price)),
        onItemRemoved: (restaurantId, item, price) =>
            dispatch(removeItem(restaurantId, item, price)),
        onFetchRestaurantData: () => dispatch(fetchRestaurantData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuBuilder);
