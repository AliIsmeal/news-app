import React, { Component } from "react";
import logo from "./logo.svg";
import Container from "./components/container";
import "./App.css";
import newsApi from "./app-api";

class App extends Component {
  state = { data: "" };

  componentDidMount() {
    newsApi()
      .then(res => res)
      .then(data => {
        const dData = data.map(m => m.articles[0]);
        this.setState({ data: dData });
        console.log(this.state.data, "im state");
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Container mydata={data} />
      </div>
    );
  }
}

export default App;
