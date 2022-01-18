import React, { Component } from "react";
import Newsitems from "./Newsitem";

export class news extends Component {
  constructor() {
    super();
    console.log("Hello I am a Constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=4e25af622dc34bb2a9abab4c8528bf3e";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <h1>News Monk _ Top Headlines</h1>
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title ? element.title.slice(0, 60) : ""}
                  des={
                    element.description ? element.description.slice(0, 90) : ""
                  }
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default news;
