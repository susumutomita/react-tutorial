import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Style from "../static/Style";

class Layout extends Component {

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {Style}
        <Header header={this.props.header} title={this.props.title} />
        {this.props.children}
        <Footer footer={this.props.footer} />
      </div>
    )
  }
}

export default Layout;
