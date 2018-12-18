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
        this.setState({ data });
        console.log(this.state.data, "im state");
      });
  }
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
