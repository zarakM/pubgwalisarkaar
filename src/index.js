import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
//import Navbar from "./components/Navbar"



var config = {
  apiKey: "AIzaSyAf3aGt3IBC7TBQqQ7dnA9xjEI2oczpRho",
  authDomain: "pubgwalisarkaar.firebaseapp.com",
  databaseURL: "https://pubgwalisarkaar.firebaseio.com",
  projectId: "pubgwalisarkaar",
  storageBucket: "gs://pubgwalisarkaar.appspot.com",
  messagingSenderId: "145673301743"
};

firebase.initializeApp(config);

ReactDOM.render((
 <App />
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
