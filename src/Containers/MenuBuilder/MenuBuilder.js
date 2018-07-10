import React, { Component } from "react";
import { connect } from "react-redux";

import { addItem, removeItem, fetchRestaurantData } from "../../store/actions";

import Restaurant from "../../Components/Restaurants/Restaurant/Restaurant";

class MenuBuilder extends Component {
    state = {
        // restaurantData: null,
        // loading: false
        // error: false
    };

    async componentDidMount() {
        this.props.onFetchRestaurantData();
    }

    render() {
        // set up the restaurant list once retrieved
        let restaurants = null;
        if (this.props.restaurantData) {
            restaurants = this.props.restaurantData.map(restaurant => {
                // console.log("restaurant", restaurant.id);
                return (
                    <Restaurant key={restaurant.id} name={restaurant.name} />
                );
            });
        }
        console.log("restaurants array: ", restaurants);

        return (
            <div>
                This is the Menu Builder Container
                {restaurants}
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
