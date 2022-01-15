import "./App.css";

import React, { Component } from "react";
import Nav from "./Component/Nav";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <news />
      </div>
    );
  }
}
