import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.jpg"
import "./css/card.css"
import Board from "./Board"


class Contests extends Component {
    constructor() {
        super()
        this.state = {
            contests: [],
            user_id: null,
            boardKey: null,
            loggedIn: false,
        }

        let com = this
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                com.setState({ user_id: user.uid, loggedIn: true })
            } else {
                com.setState({ loggedIn: false })
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
                    let button;
                    var datum = new Date(childD.val().date + " " + childD.val().time + ":00");
                    let timestamp = datum.getTime();
                    let date = new Date();
                    let now = date.getTime();
                    console.log(timestamp + " - " + now)
                    if (timestamp > now) {
                        button = true
                    } else {
                        button = false
                    }
                    items.push({
                        id: childD.key,
                        date: childD.val().date,
                        time: childD.val().time,
                        type: childD.val().type,
                        entry: childD.val().entry,
                        map: childD.val().map,
                        per_kill: childD.val().per_kill,
                        winner: childD.val().winner,
                        button
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
        if (this.state.loggedIn === true) {
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
        else {
            alert("please logged in first")
        }
    }

    board = (id, e) => {
        e.preventDefault()
        this.props.history.push("/board/"+id);
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.contests.reverse()}
                <div>
                    <br />
                    <div>
                        {this.state.contests.map((items, key) => (
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
                                        <div className="box7" key={items.id}>{items.button ? <button key={items.id} onClick={this.Join.bind(this, items.entry, items.id)} className="btn btn-sm btn-outline-success">Join</button>
                                            : <button className="btn btn-sm btn-outline-danger" key={items.id} onClick={this.board.bind(this, items.id)}>LeaderBoard</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <br />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contests;