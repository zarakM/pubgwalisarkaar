import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./css/navbar.css"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: 0,
      open: false,
      openR: false,
      loggedIn: false
    }

  }

  componentDidMount() {
    let com = this
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref().child("profiles/" + user.uid).once("value", snap => {
          com.setState({ coins: snap.val().coins, loggedIn: true })
        })
        com.setState({ loggedIn: true })
      }
      else {
        com.setState({ loggedIn: false })
      }
    })
  }

  logout = e => {
    e.preventDefault()
    let com = this
    if (com.state.loggedIn === true) {
      firebase.auth().signOut().then(() => { com.setState({ loggedIn: false }) })
    } else {
      com.setState({ open: true })
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true,openR:false });
  };

  handleClose = () => {
    this.setState({ open: false, openR:false});
  };

  handleLogin = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.name.value, this.password.value).then(() => {
      this.setState({ open: false, loggedIn: true });
    }).catch(function (error) {
      var errorMessage = error.message;
      alert(errorMessage)
    })
  }

  buycoins = e => {
    e.preventDefault()
    alert("please paytm money to +9769769")
  }

  handleRegister = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.names.value, this.passwords.value).catch(function (error) {
      var errorMessage = error.message;
      alert(errorMessage)
    }).then(() => {
      let user = firebase.auth().currentUser
      let id = user.uid
      if (id !== null) {
        firebase.database().ref().child("profiles/" + id).set({
          email: user.email,
          coins: 0
        }).then(() => {
          alert("Successfully registered and Logged in")
        })
      }
    })
  }

  handleRegister= e =>{
    e.preventDefault()
    this.setState({openR:true})
  }

  render() {
    return (
      <div id='root'>
        <div>
          <Dialog
            open={this.state.openR}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title">
            {/* Register */}

            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                inputRef={ec => (this.names = ec)}
                label="Name"
                type="name"
                fullWidth />
              <TextField
                margin="dense"
                inputRef={ec => (this.passwords = ec)}
                label="password"
                type="password"
                fullWidth />
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClickOpen} color="primary">Sign In</Button>
              <Button onClick={this.handleClose} color="primary">Cancel</Button>
              <Button onClick={this.handleRegister} color="primary">Register</Button>
            </DialogActions>
          </Dialog>

            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title">
            {/* Sign in */}
            <DialogTitle id="form-dialog-title">LOGIN</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                inputRef={ec => (this.name = ec)}
                label="Name"
                type="name"
                fullWidth />
              <TextField
                margin="dense"
                inputRef={ec => (this.password = ec)}
                label="password"
                type="password"
                fullWidth />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRegister} color="primary">Register</Button>
              <Button onClick={this.handleClose} color="primary">Cancel</Button>
              <Button onClick={this.handleLogin} color="primary">Sign In</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div style={{ display: "flex", }}>
          <div style={{ flex: "1" }}>
            <h1 className="heading">PUBG KHELO</h1>
          </div>
          <div style={{ flex: "1", width: "40%" }}>
            <button className="logout" onClick={this.logout}>{this.state.loggedIn ? "Logout" : "Login"}</button>
            <button className="logouts" onClick={this.buycoins}>{"Coins: " + this.state.coins}</button>
          </div>
        </div>
        <div className="navbar">
          <Link to="/mine" className="items">My Battles</Link>
          <Link to="/contests" className="items">Battle Ground</Link>
          <Link to="/videos" className="items">Videos</Link >
        </div>
      </div>
    );
  }
}

export default Navbar;