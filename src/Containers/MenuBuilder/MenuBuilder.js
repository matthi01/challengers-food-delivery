import React, { Component } from "react";
import { connect } from "react-redux";

import "./MenuBuilder.css";

import { addItem, removeItem, fetchRestaurantData } from "../../store/actions";

import Restaurants from "../../Components/Restaurants/Restaurants";
import Menu from "../../Components/Menu/Menu";

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

    onMenuItemIncrement = (restaurantId, item) => {
        this.props.onItemAdded(restaurantId, item);
    };

    onMenuItemDecrement = (restaurantId, item) => {
        this.props.onItemRemoved(restaurantId, item);
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
                This is the Menu Builder Container
                {restaurants}
                {menu}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurantData: state.restaurantData,
        orderData: state.orderData,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (restaurantId, item) =>
            dispatch(addItem(restaurantId, item)),
        onItemRemoved: (restaurantId, item) =>
            dispatch(removeItem(restaurantId, item)),
        onFetchRestaurantData: () => dispatch(fetchRestaurantData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuBuilder);
