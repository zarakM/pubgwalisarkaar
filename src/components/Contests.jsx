import React, { Component } from 'react';
import * as firebase from "firebase";


class Contests extends Component {
    constructor(){
        super()
        this.state={
            contests:[]
        }
    }
    componentDidMount(){
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
                Array.prototype.push.apply(com.state.products, items);
                com.setState({
                    products: com.state.products
                });
            });
    }
    render() { 
        return ( 
            <div></div>
         );
    }
}
 
export default Contests;