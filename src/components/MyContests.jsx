import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Board from "./Board"

import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.png"

class MyContests extends Component {
    constructor() {
        super()
        this.state = {
            mine: [],
            user_id: null,
            board: false,
            boardKey: null
        }
        let com = this
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                com.setState({ user_id: user.uid })
            }
            else {
                console.log("hoala")
                com.props.history.push("/starter")
            }
        })
    }

    componentDidMount() {
        let com = this
        setTimeout(() =>
            firebase
                .database()
                .ref()
                .child("contest_players/" + com.state.user_id)
                .once("value", snap => {
                    snap.forEach(childD => {
                        let items = []
                        let contest_id = childD.val().id
                        firebase.database().ref().child("contests/" + contest_id).once("value", snaps => {
                            items.push({
                                id: snaps.key,
                                date: snaps.val().date,
                                time: snaps.val().time,
                                type: snaps.val().type,
                                entry: snaps.val().entry,
                                map: snaps.val().map,
                                per_kill: snaps.val().per_kill
                            });
                            Array.prototype.push.apply(com.state.mine, items);
                            com.setState({
                                mine: com.state.mine
                            });
                        })

                    });
                })
            , 1000)
    }

    board = (id, e) => {
        e.preventDefault()
        this.setState({ board: true, boardKey: id })
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                {this.state.board ?<Board id={this.state.boardKey} />:
                    <div>
                        <br />
                        {this.state.mine.map((items, key) => (
                            <div>
                                <div className="card" key={items.id}>
                                    <div className="carditems"><img src={items.map === "Miramaar" ? Miramar : Erangel} alt="hola" width="110" height="70" /></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Type</p><p>{items.type}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Date</p><p>{items.date}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Time</p><p>{items.time}</p></div>
                                    <div className="carditems"> <p className="itemHead" key={items.id} style={{ marginTop: "5px" }}>Entry</p><p>{items.entry}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Per kill</p><p>{items.per_kill}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Players</p><p>a</p></div>
                                    <div className="carditems"><button className="button btn-info" key={items.id} onClick={this.board.bind(this, items.id)}>LeaderBoard</button></div>
                                </div><br /></div>
                        ))}
                        <br />
                    </div>
                }
                <br />
                <Footer />
            </div>
        );
    }
}

export default MyContests;