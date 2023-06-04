import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import sryle from "../static/Style";

class Layout extends Component {

  render() {
    return (
      <div>
        {sryle}
        <Header header={this.props.header} title={this.props.title} />
        {this.props.children}
        <Footer footer="copyright bull" />
      </div>
    )
  }
}

export default Layout;
