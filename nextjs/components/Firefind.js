import React, { Component } from 'react';
import { getDatabase, ref, onValue, orderByKey, equalTo, query } from "firebase/database";
import app from '../firebaseConfig';

class Firefind extends Component {
  style = {
    borderBottom: "1px solid gray",
  }

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: []
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  doAction(e) {
    this.findFireData(this.state.input);
  }

  findFireData(s) {
    const db = getDatabase(app);
    onValue(query(ref(db, 'sample/'), orderByKey(), equalTo(s)), (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
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
    return (
      <div>
        <input type="text" onChange={this.doChange} style={this.style} value={this.state.input} />
        <button onClick={this.doAction}>Find</button>
        <table><tbody>
          {this.getTableData()}
        </tbody></table>
      </div>
    );
  }

}

export default Firefind;
