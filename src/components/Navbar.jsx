import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import { faTrophy,faVideo,faFistRaised,faCrosshairs,faMedal,faStarAndCrescent,faUserCircle,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: 0,
      open: false,
      loggedIn: false
    }
  }

  componentDidMount() {
    let com = this
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref().child("profiles/" + user.uid).once("value", snap => {
          com.setState({ coins: snap.val().coins ,loggedIn: true})
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
      com.setState({ loggedIn: true, open: true })
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogin = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.name.value, this.password.value).catch(function (error) {
      var errorMessage = error.message;
      alert(errorMessage)
    })
    this.setState({ open: false });
  }

  buycoins = e => {
    e.preventDefault()
    alert("please paytm money to +9769769")
  }

  render() {
    return (
      <div id='root'>
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title">
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
              <Button onClick={this.handleClose} color="primary">Cancel</Button>
              <Button onClick={this.handleLogin} color="primary">Sign In</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="top-head">
        <div style={{display:"flex",}}>
          <div style={{flex:""}}>
            <h1 className=" "><img src={logo} width="160px" height="40px"/></h1>
          </div> 
          <div classname="btn-top" style={{flex:"wrap"}}>          
            <button className="logout" onClick={this.logout}>{this.state.loggedIn ? "LOGOUT" : "LOGIN"}</button>
            <button className="logouts" onClick={this.buycoins}><FontAwesomeIcon icon={faMoneyBillAlt}/> {this.state.coins}</button>
          </div>         
        </div>
        </div>
        <div className="navbar nav-web">          
        <Link to="/videos" className="items"><FontAwesomeIcon icon={faStarAndCrescent}/> SPECIAL EVENT</Link >
          <Link to="/contests" className="items"><FontAwesomeIcon icon={faTrophy}/> BATTLE GROUNDS</Link>
          <Link to="/mine" className="items"><FontAwesomeIcon icon={faCrosshairs}/> MY BATTLES</Link>  
          <Link to="/videos" className="items"><FontAwesomeIcon icon={faMedal}/> TOP PLAYERS</Link >
          <Link to="/videos" className="items"><FontAwesomeIcon icon={faVideo}/> VIDEOS</Link >
          <Link to="/profile" className="items"><FontAwesomeIcon icon={faUserCircle}/> PROFILE</Link >
        </div>
        <div className="navbar nav-mobile ">          
        <Link to="/videos" className="items"><FontAwesomeIcon icon={faStarAndCrescent}/></Link >
          <Link to="/contests" className="items"><FontAwesomeIcon icon={faTrophy}/></Link>
          <Link to="/mine" className="items"><FontAwesomeIcon icon={faCrosshairs}/></Link>  
          <Link to="/videos" className="items"><FontAwesomeIcon icon={faMedal}/></Link >
          <Link to="/videos" className="items"><FontAwesomeIcon icon={faVideo}/></Link >
          <Link to="/profile" className="items"><FontAwesomeIcon icon={faUserCircle}/></Link >
        </div>         
      </div>
    );
  }
}

export default Navbar;