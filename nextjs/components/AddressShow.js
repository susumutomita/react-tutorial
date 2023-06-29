import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { getDatabase, ref, onValue, set } from "firebase/database";
import Lib from '../static/address_lib';
import Account from './Account';
import app from '../firebaseConfig';

const AddressShow = (props) => {
  const router = useRouter();
  const [state, setState] = useState({
    last: -1,
    input: '',
    email: router.query.email,
    address: null,
    message: router.query.email + 'のデータ'
  });

  const logined = () => {
    console.log('User has logged in');
  };

  const logouted = () => {
    console.log('User has logged out');
  };

  const getAddress = (email) => {
    let db = getDatabase(app);
    let ref0 = ref(db, 'address/' + Lib.encodeEmail(props.email) + '/' + Lib.encodeEmail(email) + '/check');
    set(ref0, 0);
    let refPath = ref(db, 'address/' + Lib.encodeEmail(props.email) + '/' + Lib.encodeEmail(email));
    onValue(refPath, (snapshot) => {
      let d = Lib.deepcopy(snapshot.val());
      d.email = email;
      setState(previousState => ({
        ...previousState,
        address: d,
      }));
    });
  }

  const doChange = (e) => {
    setState(previousState => ({
      ...previousState,
      input: e.target.value
    }));
  }

  const doAction = (e) => {
    let from = Lib.encodeEmail(props.email);
    let to = Lib.encodeEmail(state.email);
    let db = getDatabase(app);
    let d = new Date().getTime();

    let ref0 = ref(db, 'address/' + from + '/' + to + '/message/' + d);
    set(ref0, 'to: ' + state.input);

    let ref1 = ref(db, 'address/' + to + '/' + from + '/message/' + d);
    set(ref1, 'from: ' + state.input);

    let ref2 = ref(db, 'address/' + from + '/' + to + '/check');
    set(ref2, true);

    setState(previousState => ({
      ...previousState,
      input: '',
    }));
  }

  useEffect(() => {
    if (state.email) {
      getAddress(state.email);
    } else {
      console.log('Email is undefined');
    }
  }, []);

  let items = [];
  if (state.address != null) {
    for (let n in state.address.message) {
      items.unshift(<li key={n}>{state.address.message[n]}</li>);
    }
  }
  return (
    <div>
      <Account onLogined={logined} onLogouted={logouted} />
      <p>{state.message}</p>
      <hr />
      {state.address != null
        ?
        <table>
          <tbody>
            <tr>
              <th>NAME</th>
              <td>{state.address.name}</td>
            </tr>
            <tr>
              <th>MAIL</th>
              <td>{state.address.email}</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>{state.address.tel}</td>
            </tr>
            <tr>
              <th>MEMO</th>
              <td>{state.address.memo}</td>
            </tr>
          </tbody>
        </table>
        :
        <p>no address</p>
      }
      <hr />
      <fieldset >
        <p>Message:</p>
        <input type="text" size="40" value={state.input} onChange={doChange} />
        <button onClick={doAction}>send</button>
      </fieldset>
      {state.address != null && state.address.message != null
        ?
        <div>
          <p>※{state.address.name}さんとのメッセージ</p>
          <ul>{items}</ul>
        </div>
        :
        <p>※メッセージはありません</p>
      }
    </div>
  );
}

let AddressShowWithRedux = connect((state) => state)(AddressShow);
export default AddressShowWithRedux;

export async function getServerSideProps(context) {
  const email = context.query.email;

  return {
    props: {
      email: email
    }
  };
}
