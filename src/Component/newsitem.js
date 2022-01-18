import React, { Component } from "react";

export class newsitem extends Component {
  render() {
    let { title, des, imageUrl, url } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: " 18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://error404.fun/img/full-preview/1x/13.png"
                : imageUrl
            }
            className="card-img-top"
            alt="/"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{des}...</p>
            <a href={url} target="_blank" className="btn  btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default newsitem;
