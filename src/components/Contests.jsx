import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"


class Contests extends Component {
    constructor() {
        super()
        this.state = {
            contests: []
        }
    }
    componentDidMount() {
        let com = this;
        firebase
            .database()
            .ref()
            .child("contests")
            .once("value", snap => {
                let items = [];
                snap.forEach(childD => {
                    items.push({
                        code: childD.key,
                        model: childD.val().model,
                        name: childD.val().name,
                        volt: childD.val().volt,
                        kw: childD.val().kw,
                        quantity: childD.val().quantity
                    });
                });
                Array.prototype.push.apply(com.state.contests, items);
                com.setState({
                    contests: com.state.contests
                });
            });
    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>sda</h1>
            </div>
        );
    }
}

export default Contests;