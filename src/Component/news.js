import React, { Component } from "react";
import newsitem from "./newsitem";

export class news extends Component {
  render() {
    return (
      <div>
        this is a news component
        <newsitem />
      </div>
    );
  }
}

export default news;
