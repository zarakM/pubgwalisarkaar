import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"
import avatar from './imgUtils/me.png';
import "./css/profile.css";
import TextField from '@material-ui/core/TextField';

class MyProfile extends Component {
    constructor() {
        super()
        this.state = {
            profile: []
        }
    }
    render() {
        return (
            <div>
                 <Navbar />
                <div className="container profile">
                <img className="avatar" src={avatar}/>
                <div className="pro-field">
                <TextField
                id="standard-with-placeholder"
                label="NAME"
                placeholder="Placeholder"
                className={"textField pro-text"}
                margin="normal"
                />
                <TextField
                id="standard-with-placeholder"
                label="CLAN"
                placeholder="Placeholder"
                className={"textField pro-text"}
                margin="normal"
                />
                <TextField
                id="standard-with-placeholder"
                label="PUBD ID"
                placeholder="Placeholder"
                className={"textField pro-text"}
                margin="normal"
                />
                <TextField
                id="standard-with-placeholder"
                label="RATING"
                placeholder="Placeholder"
                className={"textField pro-text"}
                margin="normal"
                />
                <TextField
                id="standard-with-placeholder"
                label="EASY PAISA NO"
                placeholder="Placeholder"
                className={"textField pro-text"}
                margin="normal"
                />                
                <button className="btn btn-success "> Update</button>
                </div>
            </div>
        
        <Footer />
            </div>
        );
    }
}

export default MyProfile;