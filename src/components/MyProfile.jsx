import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"

class MyProfile extends Component {
    constructor() {
        super()
        this.state = {
            profile: []
        }
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                
                <Footer />
            </div>
        );
    }
}

export default MyProfile;