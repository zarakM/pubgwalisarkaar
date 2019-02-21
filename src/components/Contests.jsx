import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.png"
import "./css/card.css"
import Board from "./Board"


class Contests extends Component {
    constructor() {
        super()
        this.state = {
            contests: [],
            user_id: null,
            board: false,
            boardKey: null
        }
        let com = this
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                com.setState({ user_id: user.uid })
            }
        })
    }
    componentDidMount() {
        let com = this
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

    Join(entry, id, e) {
        e.preventDefault()
        let joined = false;
        firebase.database().ref().child("contest_players/" + this.state.user_id)
            .orderByChild("id").equalTo(id).once("value", snap => {
                snap.forEach(child => {
                    if (child.val().id === id) {
                        joined = true
                    }
                })
            }).then(() => {
                if (joined) { alert("you already joined this match") }
                else {
                    let com = this
                    firebase.database().ref().child("profiles/" + com.state.user_id).once('value', snap => {
                        let before_coins = snap.val().coins;
                        if (entry > before_coins) {
                            alert("you dont have enough coin please buy some")
                        } else {
                            var answer = window.confirm(entry + " coins will be deduct from " + before_coins + " coins");
                            if (answer) {
                                let after_coins = before_coins - entry
                                var up = {}
                                up["/profiles/" + com.state.user_id + "/coins"] = after_coins
                                firebase.database().ref().update(up).then(() => {
                                    firebase.database().ref().child("contest_players/" + this.state.user_id).push().set({ id })
                                    window.location.reload();
                                }).catch(error => { alert(error) })
                            } else {
                            }
                        }
                    })
                }
            })
    }

    board = (id, e) => {
        e.preventDefault()
        this.setState({ board: true, boardKey: id })
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                {this.state.board ? <Board id={this.state.boardKey} /> :
                    <div>
                        <br />
                        {this.state.contests.reverse()}
                        {this.state.contests.map((items, key) => (
                            <div>
                                <div className="card" key={items.id}>
                                    <div className="carditems"><img src={items.map === "Miramaar" ? Miramar : Erangel} alt="hola" width="110" height="70" /></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Type</p><p>{items.type}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Date</p><p>{items.date}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Time</p><p>{items.time}</p></div>
                                    <div className="carditems"> <p className="itemHead" key={items.id} style={{ marginTop: "5px" }}>Entry</p><p>{items.entry}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Per kill</p><p>{items.per_kill}</p></div>
                                    <div className="carditems"> <p className="itemHead" style={{ marginTop: "5px" }}>Players</p><p>a</p></div>
                                    <div className="carditems"><button className="button btn-info" key={items.id} onClick={this.Join.bind(this, items.entry, items.id)}>Join</button></div>
                                    <div className="carditems"><button className="button btn-info" key={items.id} onClick={this.board.bind(this, items.id)}>LeaderBoard</button></div>
                                </div><br /></div>
                        ))}
                        <br />
                    </div>
                }
                <Footer />
            </div>
        );
    }
}

export default Contests;