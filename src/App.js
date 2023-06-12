// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "./App.css";
// import Memo from "./memo/Memo";
// import AddForm from "./memo/AddForm";
// import FindForm from "./memo/FindForm";
// import DelForm from "./memo/DelForm";
// import PersistForm from "./memo/PersistForm";

// class App extends Component {

//   td = {
//     width: "250px",
//   }

//   render() {
//     return (
//       <div>
//         <h1>Memo</h1>
//         <AddForm />
//         <hr />
//         <table>
//           <tbody>
//             <tr>
//               <td style={this.td}>
//                 <FindForm />
//               </td>
//               <td style={this.td}>
//                 <DelForm />
//               </td>
//               <td style={this.td}>
//                 <PersistForm />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <Memo />
//       </div>
//     );
//   }
// }

// export default connect()(App);


import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/Sampledata';
import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyA_wg1JHHDD-xSQ7Fe-soSbzxqyulmzP5w",
  authDomain: "react-a4633.firebaseapp.com",
  databaseURL: "https://react-a4633-default-rtdb.firebaseio.com",
  projectId: "react-a4633",
  storageBucket: "react-a4633.appspot.com",
  messagingSenderId: "475293368411",
  appId: "1:475293368411:web:483e3a5667b04d0d847f7e",
  measurementId: "G-X1R861JLV6"
};

// Initialize Firebase
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Fire</h1>
        <Sampledata />
      </div>
    );
  }
}
export default App;
