import { Component } from "react";
import newsApi from "../app-api";

class Container extends Component {
  state = { data: null };

  getInfow() {
    const apiUrls = newsApi();
    console.log(apiUrls, "did");
  }
  componentDidMount() {
    this.setState({ data: this.getInfow() });
    console.log(this.state.data);
    // const cnnUrl =
    //   "https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-16&sortBy=publishedAt&apiKey=89be24d8bdda4582ba470753cd519fa8";
    // fetch(cnnUrl)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // // const myapi = newsApi();
    // console.log(this.state.data);
  }
  render() {
    return "news";
  }
}

export default Container;
