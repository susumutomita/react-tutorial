import React, { Component } from 'react';
import { getDatabase, ref, onValue, orderByKey, limitToFirst, query } from "firebase/database";
import app from './firebaseConfig';

class Sampledata extends Component {

  style = {
    fontSize: "12pt",
    padding: "5px 15px"
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.getFireData();
  }

  getFireData() {
    let db = getDatabase(app);
    let self = this;
    const topUserPostsRef = query(ref(db, 'sample'), orderByKey(), limitToFirst(1));
    onValue(topUserPostsRef, (snapshot) => {
      console.log(snapshot.val());
      self.setState({
        data: snapshot.val()
      });
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  getTableData() {
    let result = [];
    if (this.state.data === null || this.state.data.length === 0) {
      return [<tr key="0"><th>NO DATA.</th></tr>];
    }
    for (let i in this.state.data) {
      result.push(<tr key={i}>
        <th>{this.state.data[i].ID}</th>
        <td>{this.state.data[i].name}</td>
        <td>{this.state.data[i].message}</td>
      </tr>);
    }
    return result;
  }

  render() {
    if (this.state.data.length === 0) {
      this.getFireData();
    }
    console.log(this.getTableData());
    return (
      <table><tbody>
        {this.getTableData()}
      </tbody></table>
    );
  }
}

export default Sampledata;
