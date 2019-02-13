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
              <Link className="nav-link" to="/i_products">Insert Products</Link>
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