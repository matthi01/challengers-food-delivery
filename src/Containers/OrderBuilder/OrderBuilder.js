import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../Axios/Axios-restaurants";
// import * as actionTypes from "../../store/actions"; // need action creators instead
import { addItem, removeItem, fetchRestaurantData } from "../../store/actions";

class OrderBuilder extends Component {
    state = {
        restaurantsData: null,
        error: false
    };

    componentDidMount() {
        // axios
        //     .get("/challenge")
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

        this.props.onFetchRestaurantData();
        // console.log(this.state.restaurantsData);
    }

    render() {
        return <div>This is the Order Builder</div>;
    }
}

const mapStateToProps = state => {
    return {
        restaurantsData: state.restaurantsData,
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
)(OrderBuilder);
