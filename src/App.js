import "./App.css";

import React, { Component } from "react";
import Nav from "./Component/Nav";
import Newss from "./Component/Newss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Newss pageSize={5} />
      </div>
    );
  }
}
