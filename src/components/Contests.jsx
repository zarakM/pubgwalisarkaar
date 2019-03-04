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
            } else {
                console.log("hoala")
                com.props.history.push("/starter")
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
                        per_kill: childD.val().per_kill,
                        winner: childD.val().winner
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
            <div>
                <Navbar />
                <div className="card">
                    <img className="images" src={Miramar} alt="hola" />
                    <div className="rows">
                        <div className=""> <p className="items">Per kill</p><p>sad</p></div>
                        <div className=""><p>Chicken Dinner</p><p>asd</p></div>
                        <div className=""> <p >Entry</p><p>asdsad</p></div>
                    </div>
                    <div className="rows">
                        <div className=""> <p >Type</p><p>asdsd</p></div>
                        <div className=""> <p style={{ color: "red" }}>asdasdas</p></div>
                        <div className=""> <p style={{ color: "red" }}>asdasda</p></div>
                        <div className=""><button className="button btn-info" onClick={this.Join.bind(this, "", "")}>Join</button></div>
                    </div>
                    <br />
                </div>
                {/* {this.state.board ? <Board id={this.state.boardKey} /> :
                    <div>
                        <br />
                        {this.state.contests.reverse()}
                        <div>
                            {this.state.contests.map((items, key) => (
                                <div>
                                    <div><img className="images col" src={items.map === "Miramaar" ? Miramar : Erangel} alt="hola" /></div>
                                    <div className="row" key={items.id}>
                                        <div className="col"> <p>Per kill</p><p>{items.per_kill}</p></div>
                                        <div className="col"><p>Chicken Dinner</p><p>{items.winner}</p></div>
                                        <div className="col"> <p key={items.id} >Entry</p><p>{items.entry}</p></div>
                                        <div class="w-100"></div>
                                        <div className="col"> <p >Type</p><p>{items.type}</p></div>
                                        <div className="col"> <p>{items.date}</p></div>
                                        <div className="col"> <p>{items.time}</p></div>
                                        <div className="col"><button className="button btn-info" key={items.id} onClick={this.Join.bind(this, items.entry, items.id)}>Join</button></div>
                                        <div className="col"><button className="button btn-info" key={items.id} onClick={this.board.bind(this, items.id)}>LeaderBoard</button></div>
                                        <br />
                                    </div></div>
                            ))}
                            <br />
                        </div>
                    </div>
                } */}
                <Footer />
            </div>
        );
    }
}

export default Contests;