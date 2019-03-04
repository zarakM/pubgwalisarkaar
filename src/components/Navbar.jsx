import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./css/navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: 0
    }
    let com = this
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref().child("profiles/" + user.uid).once("value", snap => {
          com.setState({ coins: snap.val().coins })
        })
      }
      else {
        console.log("hoala")
        this.context.history.push("/starter")
      }
    })
  }

  logout = e => {
    e.preventDefault()
    firebase.auth().signOut()
  }
  render() {
    return (
      <div id='root'>
        <h1 className="heading">PUBG KHELO</h1>
        <div className="navbar">
          <div className="items">My Battles</div>
          <div className="items">Battle Ground</div>
          <div className="items">Videos</div>
        </div>
        <div>
        <button className="logout">Logout</button>
        </div>
      </div>
    );
  }
}

export default Navbar;