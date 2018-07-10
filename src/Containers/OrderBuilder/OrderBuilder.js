import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../Axios/Axios-restaurants";
import * as actionTypes from "../../store/actions";

class OrderBuilder extends Component {
    state = {
        restaurantsData: null
    };

    componentDidMount() {
        axios
            .get("/challenge")
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div>This is the Order Builder</div>;
    }
}

const mapStateToProps = state => {
    return {
        restaurantsData: state.restaurantsData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: () => dispatch({ type: actionTypes.ADD_ITEM }),
        onItemRemoved: () => dispatch({ type: actionTypes.REMOVE_ITEM })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderBuilder);
