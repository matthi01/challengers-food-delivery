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
        console.log("clicked: ", restaurantId); // NOTE - clean this up
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
            console.log(menuData); // NOTE - clean this up
            menu = <Menu menuData={menuData} />;
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
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: () => dispatch(addItem()),
        onItemRemoved: () => dispatch(removeItem()),
        onFetchRestaurantData: () => dispatch(fetchRestaurantData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuBuilder);
