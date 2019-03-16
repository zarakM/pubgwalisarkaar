import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import * as firebase from "firebase";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
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
      open: false,
      loggedIn: false
    }
  }

  componentDidMount() {
    let com = this
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if(user.email==="admin@a.com"){
          com.setState({ loggedIn: true })
        }
        else{
          com.setState({ loggedIn: false })
          firebase.auth().signOut()
          com.props.history.push("/admin")
        }
      }
      else {
        com.props.history.push("/admin")
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
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogin = e => {
    e.preventDefault();
    let com = this
    firebase.auth().signInWithEmailAndPassword(this.name.value, this.password.value).catch(function (error) {
      var errorMessage = error.message;
      alert(errorMessage)
    })
    this.setState({ open: false });
  }

  render() {
    return (
      <div id='root' className="container">
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">PUBG</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link" to="/create_details">Create Details</Link>
            <Link className="nav-link" to="/create_contest">Create Contest</Link>
            <Link className="nav-link" to="/create_videos">Create Videos</Link>
            <Link className="nav-link" to="/create_leaderboard">Update LeaderBoard</Link>
            <Link className="nav-link" to="/get_videos">Get Videos</Link>
            <Link className="nav-link" to="/get_contest">Get Contest</Link>
            <Link className="nav-link" to="/get_leaderboard">Get LeaderBoard</Link>
            <button className="btn btn-info" onClick={this.logout}>{this.state.loggedIn ? "Logout" : "Login"}</button>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);