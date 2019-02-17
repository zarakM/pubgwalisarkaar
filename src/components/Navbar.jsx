import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import LOgo from "./imgUtils/logo1.png"

class Navbar extends Component {
  state = {}
  render() {
    return (
      <div id='root' className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" width="100px" height="50px">
          <Link className="nav-link" to="/">
            <img src={LOgo} alt="zarsh.co" height="50px" width="100px" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/i_products">Contests</Link>
              <Link className="nav-link" to="/i_products">My Contests</Link>
              <Link className="nav-link" to="/i_products">Videos</Link>
              <Link className="nav-link" to="/i_products"></Link>
              <button class="btn btn-outline-danger my-2 my-sm-0" onClick={this.logout}>Logout</button>
              <Link class="btn btn-outline-info my-2 my-sm-0" to="/login">LogIn</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;