import "./App.css";

import React, { Component } from "react";
import Nav from "./Component/Nav";
import news from "./Component/news";

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
