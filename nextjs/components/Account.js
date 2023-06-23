import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, onValue, orderByKey, equalTo, query } from "firebase/database";
import app from '../firebaseConfig';

class Account extends Component {
  style = {
    fontSize: "12pt",
    padding: "5px 15px"
  }
  constructor(props) {
    super(props);
    this.login_check = this.login_check.bind(this);
  }

  login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        this.props.dispatch({
          type: 'UPDATE_USER',
          value: {
            login: true,
            username: result.user.displayName,
            email: result.user.email,
            data: this.props.data,
            items: this.props.items
          }
        });
        this.props.onLogined();
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth);
    this.props.dispatch({
      type: 'UPDATE_USER',
      value: {
        login: false,
        username: '(click here!)',
        email: '',
        data: [],
        items: []
      }
    });
    this.props.onLogouted();
  }

  login_check() {
    if (this.props.login == false) {
      this.login();
    } else {
      this.logout();
    }
  }

  render() {
    return (
      <p className="login">
        <span className="account" onClick={this.login_check}>
          LOGINED: {this.props.username}
        </span>
      </p>
    );
  }
}

Account = connect((state) => state)(Account);
export default Account;
