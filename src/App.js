import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";

import MenuBuilder from "./Containers/MenuBuilder/MenuBuilder";
import OrderBuilder from "./Containers/OrderBuilder/OrderBuilder";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/" exact component={MenuBuilder} />
                        <Route path="/myOrders" component={OrderBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
