import React, { Component } from 'react';
import * as firebase from "firebase";

class GetVideos extends Component {
    constructor(){
        super()
        this.state = {
            videos: []
        };
        let com = this;
        firebase
            .database()
            .ref()
            .child("product")
            .once("value", snap => {
                let items = [];
                snap.forEach(childD => {
                    items.push({
                        link: childD.val().link
                    });
                });
                Array.prototype.push.apply(com.state.videos, items);
                com.setState({
                    videos: com.state.videos
                });
            });
    }
    render() { 
        return ( 
            <div>
                {/* yahan karo kaam tum */}
                {this.state.videos.map(item=>
                    <youtube link={item} />
                )}
            </div>
         );
    }
}
 
export default GetVideos;