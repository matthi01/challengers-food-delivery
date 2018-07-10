import React, { Component } from "react";

import axios from "../../Axios/Axios-restaurants";

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

export default OrderBuilder;
