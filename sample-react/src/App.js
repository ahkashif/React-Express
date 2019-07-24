import React, { Component } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import Header from "./components/Header";
// import Submit from "./components/Submit";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route
            path="/"
            exact
            render={() => {
              return <DropDown />;
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
