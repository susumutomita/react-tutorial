import React, { Copmponent } from 'react';
import { connect } from 'react-redux';
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
    let provider = new firebase.auth.GoogleAuthProvider();
    var self = this;
    firebase.auth().signInWithPopup(provider)
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
        this.propos.onLogined();
      });
  }

  logout() {
    console.log('logout');
    firebase.auth().signOut();
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



}
