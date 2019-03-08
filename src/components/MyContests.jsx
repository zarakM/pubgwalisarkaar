import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Board from "./Board"

import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.jpg"

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
                                per_kill: snaps.val().per_kill,
                                winner: childD.val().winner
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
            <div>
                <Navbar />
                {this.state.board ? <Board id={this.state.boardKey} /> :
                    <div>
                        <br />
                        {this.state.mine.map((items, key) => (
                                <div key={key} className="ro">
                                    <img className="images c-image" src={Erangel} alt="image" width="150px" height="150px" style={{ float: "left" }} />
                                    <div className="card">
                                        <div className="container-0 ">
                                            <div className="box"> <p className="c-heading">Per kill</p><p>{items.per_kill}</p></div>
                                            <div className="box1"><p className="c-heading">Chicken Dinner</p><p>{items.winner}</p></div>
                                            <div className="box2"> <p className="c-heading" >Entry</p><p>{items.entry}</p></div>
                                            <div className="box3"> <p className="c-heading">Players</p><p>{items.entry}</p></div>
                                        </div>
                                        <div className="container-1">
                                            <div className="box4"> <p style={{ color: "orange" }}>Erangel</p></div>
                                            <div className="box5"><p style={{ color: "red" }}>{items.date} - {items.time} </p><p></p></div>
                                            <div className="box6"> <button type="button" className="btn btn-secondary btn-sm">{items.type}</button></div>
                                            <div className="box6"> <button type="button" className="btn btn-info btn-sm">Leaderboard</button></div>
                                        </div>
                                    </div>
                                </div>
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