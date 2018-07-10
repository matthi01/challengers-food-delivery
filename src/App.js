import React, { Component } from "react";
import "./App.css";

import Layout from "./Components/Layout/Layout";

import MenuBuilder from "./Containers/MenuBuilder/MenuBuilder";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <MenuBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
