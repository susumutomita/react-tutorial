import React, { Component } from "react";
import "./App.css";

class App extends Component {
  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello Component.",
    };
    let timer = setInterval(() => {
      this.setState((state) => ({
        msg: state.msg + "!"
      }));
    },1000);
  }

  render() {
    return (
      <div >
        <h1>React</h1>
        <p style={this.msgStyle}>{this.state.msg}</p>
        <p style={this.msgStyle}>{this.props.msg}</p>
      </div>
    );
  }
}

export default App;
