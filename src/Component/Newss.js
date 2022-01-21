import React, { Component } from "react";
import Newsitems from "./Newsitem";
import spinner from "./spinner";
import Spinning from "./Spinning";

export class news extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4e25af622dc34bb2a9abab4c8528bf3e&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4e25af622dc34bb2a9abab4c8528bf3e&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    //  console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };

  handleNxtClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4e25af622dc34bb2a9abab4c8528bf3e&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <h1 className="text-center mb-5">News Monk - Top Headlines</h1>

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title ? element.title : ""}
                  des={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlPrevClick}
          >
            &#8592;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNxtClick}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default news;
