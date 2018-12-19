import React, { Component } from "react";
class Container extends Component {
  render() {
    // const source = [];
    const { mydata } = this.props;

    const style = {
      width: "400px",
      margin: "10px"
    };
    const imgStyle = {
      width: "90%",
      margin: "10px"
    };
    return (
      <div>
        {mydata &&
          mydata.map(m => (
            <div className="card" style={style}>
              <span>Source:{m.source.name}</span>
              <img
                className="card-img-top"
                src={m.urlToImage}
                alt="Card image cap"
                style={imgStyle}
              />
              <div className="card-body">
                <h5 className="card-title">{m.title}</h5>
                <p className="card-text">{m.description}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Container;
