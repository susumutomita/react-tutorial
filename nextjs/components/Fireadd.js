import React, { Component } from 'react';
import { getDatabase, ref, onValue, orderByKey, set, query, limitToLast } from "firebase/database";
import app from '../firebaseConfig';
import Router from 'next/router';

class Fireadd extends Component {
  style = {
    fontSize: "12pt",
    padding: "5px 15px"
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name_str: '',
      msg_str: '',
      lastID: -1
    }
    this.getLastID();
    this.doChangeName = this.doChangeName.bind(this);
    this.doChangeMsg = this.doChangeMsg.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChangeName(e) {
    this.setState({
      name_str: e.target.value
    });
  }
  doChangeMsg(e) {
    this.setState({
      msg_str: e.target.value
    });
  }
  doAction(e) {
    this.addFireData();
    Router.push('/fire');
  }

  getLastID() {
    const db = getDatabase(app);
    onValue(query(ref(db, 'sample/'), orderByKey(), limitToLast(1)), (snapshot) => {
      let res = snapshot.val();
      for (let i in res) {
        this.setState({
          lastID: i
        });
        return;
      }
    });
  }

  addFireData() {
    if (this.state.lastID === -1) {
      return;
    }
    let id = this.state.lastID * 1 + 1;
    let db = getDatabase(app);
    let newData = {
      ID: id,
      name: this.state.name_str,
      message: this.state.msg_str
    };
    let newRef = ref(db, 'sample/' + id);
    set(newRef, newData);
  }

  render() {
    if (this.state.lastID == -1) {
      this.getLastID();
    }
    return (
      <div>
        {(this.state.lastID == -1)
          ?
          <p>please wait...</p>
          :
          <table><tbody>
            <tr>
              <th className="label">name</th>
              <td><input type="text" placeholder="your name." onChange={this.doChangeName} value={this.state.name_str} /></td>
            </tr>
            <tr>
              <th className="label">message</th>
              <td><input type="text" size="40" placeholder="type message..." onChange={this.doChangeMsg} value={this.state.msg_str} /></td>
            </tr>
            <tr><th></th><td><button onClick={this.doAction}>Add</button></td></tr>
          </tbody></table>
        }
      </div>
    );
  }
}

export default Fireadd;
