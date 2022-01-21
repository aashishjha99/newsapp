import React, { Component } from "react";
import Loader from "./loading.gif";

export class Spinning extends Component {
  render() {
    return (
      <div>
        <img src={Loader} alt="" />
      </div>
    );
  }
}

export default Spinning;
