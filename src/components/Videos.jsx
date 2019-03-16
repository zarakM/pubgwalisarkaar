import React, { Component } from 'react';
import YouTube from 'react-youtube';
import * as firebase from "firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./css/videos.css"
const getVideoId = require('get-video-id');


class Videos extends Component {
    constructor() {
        super()
        this.state = {
            link: []
        }
        let com = this;
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            }
            else {
                com.props.history.push("/")
                console.log("hoala")
            }
        })

        firebase
            .database()
            .ref()
            .child("videos")
            .once("value", snap => {
                let items = [];
                snap.forEach(childD => {
                    const { id, services } = getVideoId(childD.val().link)
                    items.push({
                        id: childD.key,
                        link: id
                    });
                });
                Array.prototype.push.apply(com.state.link, items);
                com.setState({
                    link: com.state.link
                });
            });
    }

    render() {
        const opts = {
            height: '300px',
            width: '100%',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div>
                <Navbar />
                <br />
                <div className="videos">
                    {this.state.link.map(items => (
                        <YouTube videoId={items.link} opts={opts} />
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Videos;