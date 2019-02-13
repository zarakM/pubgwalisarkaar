import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

class Navbar extends Component {
  state = {}
  render() {
    return (
      <div id='root' className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Zarsh.co</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link" to="/create_contest">Create Contest</Link>
            <Link className="nav-link" to="/get_contest">Get Contest</Link>
            <Link className="nav-link" to="/create_videos">Create Videos</Link>
            <Link className="nav-link" to="/get_videos">Get Videos</Link>
            <Link className="nav-link" to="/create_leaderboard">Update LeaderBoard</Link>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;