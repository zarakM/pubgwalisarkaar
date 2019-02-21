import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import LOgo from "./imgUtils/logonew.png"

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
      else{
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
      <div id='root' className="container">
        <nav className="navbar navbar-expand-lg navbar-light text-white" style={{ backgroundColor: "#054e86" }} width="100px" height="50px">
          <Link className="nav-link" to="/starter">
            <img src={LOgo} alt="zarsh.co" height="50px" width="100px" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link  text-white" to="/">Contests</Link>
              <Link className="nav-link  text-white" to="/mine">My Contests</Link>
              <Link className="nav-link  text-white" to="/videos">Videos</Link>
              <Link className="nav-link  text-white" to="/policies">Policies</Link>
            </div>
          </div>
          <div class="form-inline my-2 my-lg-0">
            <p style={{ margin: "20px" }}>Coins: {this.state.coins}</p>
            <button class="btn btn-outline-light my-2 my-sm-0" onClick={this.logout}>Logout</button>
          </div >
        </nav>
      </div>
    );
  }
}

export default Navbar;