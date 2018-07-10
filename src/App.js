import React, { Component } from "react";
import "./App.css";

import Layout from "./Components/Layout/Layout";

import Header from "./Components/Layout/Header/Header";
import Navigation from "./Components/Layout/Navigation/Navigation";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>this is the main content</Layout>
            </div>
        );
    }
}

export default App;
