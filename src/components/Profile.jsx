import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/Profile.css'

class Profile extends Component {

    render(){
        return(
            <div className="container">
                <img className="avatar" src={avatar}  />
            </div>
        )
    }
}

export default Profile;