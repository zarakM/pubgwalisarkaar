import React, { Component } from 'react';
import * as firebase from "firebase";

class GetContest extends Component {
    constructor(){
        super()
        this.state = {
            contests: []
        };
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
                        map: childD.val().map,
                        type: childD.val().type,
                        entry: childD.val().entry,
                        per_kill: childD.val().per_kill,
                        date: childD.val().date,
                        time: childD.val().time
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
                
            </div>
         );
    }
}
 
export default GetContest;