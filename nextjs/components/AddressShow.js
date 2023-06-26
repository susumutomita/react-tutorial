import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Lib from '../static/address_lib';
import Account from './Account';
import { equalTo, getDatabase, orderByKey, ref, onValue, setState, set } from "firebase/database";
import app from '../firebaseConfig';

class AddressShow extends Component {
  style = {
    fontSize: "12pt",
    padding: "5px 15px"
  }


  constructor(props) {
    super(props);
    if (this.props.login === false) {
      if (typeof window !== 'undefined') {
        Router.push('/address');
      }
    }
    this.state = {
      last: -1,
      input: '',
      email: this.props.email,  // use the email prop set in getInitialProps
      address: null,
      message: this.props.email + 'のデータ'
    }
    this.logined = this.logined.bind(this);
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  logined() {
    console.log("logined");
  }

  logouted() {
    if (typeof window !== 'undefined') {
      Router.push('/address');
    }
  }

  getAddress(email) {
    let db = getDatabase(app);
    let ref0 = ref(db, 'address/' + Lib.encodeEmail(this.props.email) + '/' + Lib.encodeEmail(email) + '/check');
    set(ref0, 0);
    onValue(ref(db, 'address/' + Lib.encodeEmail(this.props.email), orderByKey(), equalTo(Lib.encodeEmail(email))), (snapshot) => {
      for (let i in snapshot.val()) {
        let d = Lib.deepcopy(snapshot.val()[i]);
        this.setState({
          address: d,
        });
        break;
      }
    });
  }

  doChange(e) {
    this.setState({
      input: e.target.value
    });
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  doAction(e) {
    let from = Lib.encodeEmail(this.props.email);
    let to = Lib.encodeEmail(this.state.email);
    let db = getDatabase(app);
    let d = new Date().getTime();
    let ref0 = ref(db, 'address/' + from + '/' + to + '/message/' + d);
    ref0.set('to: ' + this.state.input);
    let ref1 = ref(db, 'address/' + to + '/' + from + '/message/' + d);
    ref1.set('from: ' + this.state.input);
    let ref2 = ref(db, 'address/' + from + '/' + to + '/check');
    ref2.set(true);
    this.setState({
      input: '',
    });
  }


  render() {
    if (this.state.email) {
      this.getAddress(this.state.emaill);
    } else {
      console.log('Email is undefined'); // 未定義の場合のデバッグメッセージ
      this.getAddress("test@test.com");
    }
    let items = [];
    if (this.state.address != null) {
      for (let n in this.state.address.message) {
        items.unshift(<li key={n}>{this.state.address.message[n]}</li>);
      }
    }
    return (
      <div>
        <Account onLogined={this.logined} onLogouted={this.logouted} />
        <p>{this.state.message}</p>
        <hr />
        {this.state.address != null
          ?
          <table>
            <tbody>
              <tr>
                <th>NAME</th>
                <td>{this.state.address.name}</td>
              </tr>
              <tr>
                <th>MAIL</th>
                <td>{this.state.address.email}</td>
              </tr>
              <tr>
                <th>TEL</th>
                <td>{this.state.address.tel}</td>
              </tr>
              <tr>
                <th>MEMO</th>
                <td>{this.state.address.memo}</td>
              </tr>
            </tbody>
          </table>
          :
          <p>no address</p>
        }
        <hr />
        <fieldset >
          <p>Message:</p>
          <input type="text" size="40" value={this.state.input} onChange={this.doChange} />
          <button onClick={this.doAction}>send</button>
        </fieldset>
        {this.state.address != null && this.state.address.message != null
          ?
          <div>
            <p>※{this.state.address.name}さんとのメッセージ</p>
            <ul>{items}</ul>
          </div>
          :
          <p>※メッセージはありません</p>
        }
      </div>
    );
  }
}

AddressShow = connect((state) => state)(AddressShow);
AddressShow.getInitialProps = ({ router }) => {
  const email = router.query.email;

  return {
    email: email
  }
}
export default AddressShow;
