import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.png"
import "./css/card.css"


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
                        id: childD.key,
                        date: childD.val().date,
                        time: childD.val().time,
                        type: childD.val().type,
                        entry: childD.val().entry,
                        map: childD.val().map,
                        per_kill: childD.val().per_kill
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

            <div className="container">
                <Navbar />
                <br/>
                {this.state.contests.reverse()}
                {this.state.contests.map(items=>(
                    <div>
                <div className="card">
                    <div className="carditems"><img src={items.map==="Miramaar"?Miramar:Erangel} alt="hola" width="110" height="70"/></div>
                    <div className="carditems"> <p className="itemHead" style={{marginTop: "5px"}}>Type</p><p>{items.type}</p></div>
                    <div className="carditems"> <p className="itemHead" style={{marginTop: "5px"}}>Date</p><p>{items.date}</p></div>
                    <div className="carditems"> <p className="itemHead" style={{marginTop: "5px"}}>Time</p><p>{items.time}</p></div>
                    <div className="carditems"> <p className="itemHead" style={{marginTop: "5px"}}>Entry</p><p>{items.entry}</p></div>
                    <div className="carditems"> <p className="itemHead" style={{marginTop: "5px"}}>Per kill</p><p>{items.per_kill}</p></div>
                    <div className="carditems"> <p className="itemHead" style={{marginTop: "5px"}}>Players</p><p>a</p></div>
                    <div className="carditems"><button className="button btn-info">Pay Now</button></div>
                </div><br/></div>
))}
<br/>
<Footer/>
            </div>  
        );
    }
}

export default Contests;