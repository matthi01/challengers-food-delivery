import React, { Component } from "react";
import "./App.css";

import Layout from "./Components/Layout/Layout";

import OrderBuilder from "./Containers/OrderBuilder/OrderBuilder";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    this is the main content
                    <OrderBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
