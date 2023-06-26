import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Lib from '../static/address_lib';
import Account from '../components/Account';
import { getDatabase, ref, onValue, orderByKey, equalTo, query } from "firebase/database";
import app from '../firebaseConfig';

class Address extends Component {
  style = {
    fontSize: "12pt",
    padding: "5px 15px"
  }

  constructor(props) {
    super(props);
    this.logined = this.logined.bind(this);
  }

  logined() {
    this.getFireData();
  }

  logouted() {
    Router.push('/address');
  }

  getFireData() {
    if (this.props.email === undefined || this.props.email === '') {
      return;
    }
    let email = Lib.encodeEmail(this.props.email);
    let db = getDatabase(app);
    onValue(query(ref(db, 'address/'), orderByKey(), equalTo(email)), (snapshot) => {
      let d = Lib.deepcopy(snapshot.val());
      this.props.dispatch({
        type: 'UPDATE_USER',
        value: {
          login: this.props.login,
          username: this.props.username,
          email: this.props.email,
          data: d,
          items: this.getItem(d)
        }
      });
    });
  }

  getItem(data) {
    if (data === undefined || data === null) {
      return;
    }
    let res = [];
    for (let i in data) {
      let email = Lib.decodeEmail(i);
      let s = data[i]['name'];
      res.push(<li key={i} data-tag={email}>{data[i]['check'] === true ? <b>X</b> : ''}{s}({email})</li>);
    }
    return res;
  }
  // getItem(data) {
  //   if (data === undefined || data === null) {
  //     return;
  //   }
  //   let res = [];
  //   for (let i in data) {
  //     for (let j in data[i]) {
  //       let email = Lib.decodeEmail(i);
  //       let s = data[i][j]['name'];
  //       res.push(<li key={j} data-tag={email}>{data[i][j]['check'] === true ? <b>X</b> : ''}{s}({email})
  //       </li>);
  //     }
  //     break;
  //   }
  //   return res;
  // }

  go(email) {
    Router.push('/address_show?email=' + email);
  }

  render() {
    return (
      <div>
        <Account onLogined={this.logined} onLogouted={this.logouted} />
        <ul>
          {this.props.items === []
            ?
            <li key="0">NO ITEM.</li>
            :
            this.props.items
          }
        </ul>
      </div>
    );
  }
}

Address = connect((state) => state)(Address);
export default Address;
