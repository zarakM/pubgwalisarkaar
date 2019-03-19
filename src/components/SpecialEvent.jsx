import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"

class SpecialEvent extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container"><h1>Coming soon</h1></div>
                <Footer />
            </div>
        );
    }
}

export default SpecialEvent;