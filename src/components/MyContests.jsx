import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";

class MyContests extends Component {
    constructor() {
        super()
        this.state = {
            mine:[]
        }
        let com = this;
        firebase
            .database()
            .ref()
            .child("contests")
            .once("value", snap => {
                let items = [];
                snap.forEach(childD => {
                    items.push({
                        id: childD.key,
                    });
                });
                Array.prototype.push.apply(com.state.mine, items);
                com.setState({
                    mine: com.state.mine
                });
            });
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                <h1>sda</h1>
                <br />
                <Footer />
            </div>
        );
    }
}

export default MyContests;