import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as firebase from "firebase";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./css/navbar.css";
import logo from './imgUtils/pws-logo.png'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faVideo, faCrosshairs, faMedal, faStarAndCrescent, faUserCircle, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: 0,
      open: false,
      openR: false,
      loggedIn: false,
      openChangeName: false,
      user_id: ""
    }
  }

  componentDidMount() {
    let com = this
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref().child("profiles/" + user.uid).once("value", snap => {
          com.setState({ coins: snap.val().coins, loggedIn: true, open: false, openR: false })
          if (snap.val().update) {
          } else {
            com.setState({ openChangeName: true, user_id: user.uid })
          }
        })
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
    this.setState({ open: true, openR: false });
  };

  handleClose = () => {
    this.setState({ open: false, openR: false });
  };

  handleLogin = e => {
    e.preventDefault();
    var email = this.name.value
    email = email.replace(/\s/g, '');
    firebase.auth().signInWithEmailAndPassword(email, this.password.value).catch(error => {
      if (error) {
        var errorMessage = error.message;
        alert(errorMessage)
      }
    })
  }

  buycoins = e => {
    e.preventDefault()
    if (window.location.href === "http://localhost:3000/profile") {
      alert("On Profile page please click buy coins")
    } else {
      this.props.history.push("/profile")
    }
  }

  handleRegister = es => {
    es.preventDefault();
    let com = this
    let e = true
    firebase.auth().createUserWithEmailAndPassword(this.email.value, this.passwords.value).catch(function (error) {
      var errorMessage = error.message;
      e = false
      alert(errorMessage)
    }).then(() => {
      if (e) {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            firebase.database().ref().child("profiles/" + user.uid).set({
              email: this.email.value,
              name: this.names.value,
              clan: this.clan.value,
              pubg_id: this.pubg_id.value,
              number: this.number.value,
              rating: 0,
              coins: 0,
              url: ""
            }).then(() => {
              alert("Successfully registered and Logged in")
              com.setState({ openR: false, loggedIn: true })
            })
          }
          else {

          }
        })
      }
    })
  }

  handleChangeName = e => {
    e.preventDefault()
    let com = this
    let id = this.state.user_id
    let up = {}
    up["profiles/" + id + "/pubg_id"] = this.changeName.value
    firebase.database().ref().update(up, error => {
      if (error) {
        alert("something fishy occured :P Please reload")
      } else {
        let ups = {}
        ups["profiles/" + id + "/update"] = true
        firebase.database().ref().update(ups, error => {
          if(!error){
            alert("updated")
            com.setState({ openChangeName:false })
          }        
        })
      }
    })
  }

  handleRegisters = e => {
    e.preventDefault()
    this.setState({ openR: true })
  }

  render() {
    return (
      <div id='root'>
        <div>
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
                  inputRef={ec => (this.email = ec)}
                  label="Email"
                  type="email"
                  fullWidth />
                <TextField
                  margin="dense"
                  inputRef={ec => (this.clan = ec)}
                  label="Clan"
                  type="name"
                  fullWidth />
                <TextField
                  margin="dense"
                  inputRef={ec => (this.pubg_id = ec)}
                  label="Enter your name on pubg"
                  type="name"
                  fullWidth />
                <TextField
                  margin="dense"
                  inputRef={ec => (this.number = ec)}
                  label="Number"
                  type="number"
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
                  label="Email"
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
                <Button onClick={this.handleRegisters} color="primary">Register</Button>
                <Button onClick={this.handleClose} color="primary">Cancel</Button>
                <Button onClick={this.handleLogin} color="primary">Sign In</Button>
              </DialogActions>
            </Dialog>


            <Dialog
              open={this.state.openChangeName}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title">
              {/* Sign in */}
              <DialogTitle id="form-dialog-title">Update PUBG Name</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  inputRef={ec => (this.changeName = ec)}
                  label="your pubg name"
                  type="name"
                  fullWidth />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleChangeName} color="success">Change Name</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>

        <div className="top-head ">
          <div className="container-1">
            <div className="box-0">  <button className="coins" onClick={this.buycoins}><FontAwesomeIcon icon={faMoneyBillAlt} /> {this.state.coins}</button></div>
            <div className="box-1"><img className="logo" src={logo} width="220px" height="60px" alt="images" /></div>
            <div className="box-2"> <button className="logout" onClick={this.logout}>{this.state.loggedIn ? "LOGOUT" : "LOGIN"}</button> </div>
          </div>
          <div>
            <div className="navbar nav-web">
              <Link to="/events" className="items">
                <FontAwesomeIcon icon={faStarAndCrescent} /> SPECIAL EVENT
              </Link>
              <Link to="/contests" className="items">
                <FontAwesomeIcon icon={faTrophy} /> BATTLE GROUNDS
              </Link>
              <Link to="/mycontests" className="items">
                <FontAwesomeIcon icon={faCrosshairs} /> MY BATTLES
              </Link>
              <Link to="/top_players" className="items">
                <FontAwesomeIcon icon={faMedal} /> TOP PLAYERS
              </Link>
              <Link to="/videos" className="items">
                <FontAwesomeIcon icon={faVideo} /> VIDEOS
                </Link>
              <Link to="/profile" className="items">
                <FontAwesomeIcon icon={faUserCircle} /> PROFILE
                </Link>
            </div>

            <div className="navbar nav-mobile" id="mob-nav">
              <Link to="/events" className="items">
                <FontAwesomeIcon icon={faStarAndCrescent} />
              </Link>
              <Link to="/contests" className="items">
                <FontAwesomeIcon icon={faTrophy} />
              </Link>
              <Link to="/mycontests" className="items">
                <FontAwesomeIcon icon={faCrosshairs} />
              </Link>
              <Link to="/top_players" className="items">
                <FontAwesomeIcon icon={faMedal} />
              </Link>
              <Link to="/videos" className="items">
                <FontAwesomeIcon icon={faVideo} />
              </Link>
              <Link to="/profile" className="items">
                <FontAwesomeIcon icon={faUserCircle} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(Navbar);