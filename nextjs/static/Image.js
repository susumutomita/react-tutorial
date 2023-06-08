import { Component } from "react";

class Image extends Component {

  constructor(props) {
    super(props);
    this.fname = './static/' + props.fname;
    this.size = props.size + 'px';
  }
  
    render() {
      return (
        <img width = {this.size} boorder="1" src={this.fname} alt="This is sample"/>
      );
    }
  }
  
  export default Image;
  