import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.jpg"
import "./css/card.css"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class Contests extends Component {
    constructor() {
        super()
        this.state = {
            contests: [],
            user_id: null,
            boardKey: null,
            loggedIn: false,
            openSolo: false,
            openSquad: false,
            openDuo: false,
            contest_id: null
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
                        players: childD.val().players,
                        button
                    });
                });
                Array.prototype.push.apply(com.state.contests, items);
                com.setState({
                    contests: com.state.contests
                });
            });
    }

    Join(entry, id, type, e) {
        e.preventDefault()
        console.log(entry)
        var type = type
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
                    if (joined) { this.props.history.push("/aboutcontest/" + id); }
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
                                        firebase.database().ref().child("contest_players/" + this.state.user_id).push().set({ id }).then(() => {
                                            firebase.database().ref().child("contests/" + id + "/players").once('value', snap => {
                                                let rating = snap.val()
                                                if (type === "Squad") {
                                                    rating = rating + 1
                                                } else if (type === "Duo") {
                                                    rating = rating + 2
                                                } else if (type === "Solo") {
                                                    rating = rating + 4
                                                }
                                                let up = {}
                                                up["contests/" + id + "/players"] = rating
                                                firebase.database().ref().update(up).then(() => {
                                                    if (type === "Squad") {
                                                        com.setState({ openSquad: true, contest_id: id })
                                                    } else if (type === "Duo") {
                                                        com.setState({ openDuo: true, contest_id: id })
                                                    } else if (type === "Solo") {
                                                        com.setState({ openSolo: true, contest_id: id })
                                                    }
                                                })
                                            })
                                        })
                                    }).catch(error => { alert(error) })
                                } else {

                                }
                            }
                        })
                    }
                })
        }
        else {
            if (this.state.loggedIn === true) {
                alert("please logged in first")
            }
            else {
                alert("please logged in first")
            }
        }
    }

    board = (id, e) => {
        e.preventDefault()
        this.props.history.push("/aboutcontest/" + id);
    }

    handleClose = e => {
        this.setState({ openDuo: false, openSolo: false, openSquad: false })
    }

    handleRegisterSolo = e => {
        e.preventDefault()
        let com = this
        let id = this.state.contest_id
        if (id === null) {
            alert("something went wrong")
        }
        else {
            firebase.database().ref().child("players_check/" + id).push().set({
                player_one: com.solo.value
            }).then(() => {
                com.solo.value = ""
                com.setState({ openDuo: false, openSolo: false, openSquad: false })
            })
        }
    }

    handleRegisterDuo = e => {
        e.preventDefault()
        let com = this
        let id = this.state.contest_id
        if (id === null) {
            alert("something went wrong")
        }
        else {
            firebase.database().ref().child("players_check/" + id).push().set({
                player_one: com.duoOne.value,
                player_two: com.duoTwo.value
            }).then(() => {
                com.duoOne.value = ""
                com.duoTwo.value = ""
                com.setState({ openDuo: false, openSolo: false, openSquad: false })
            })
        }
    }

    handleRegisterSquad = e => {
        e.preventDefault()
        let com = this
        let id = this.state.contest_id
        if (id === null) {
            alert("something went wrong")
        }
        else {
            firebase.database().ref().child("players_check/" + id).push().set({
                player_one: com.squadOne.value,
                player_two: com.squadTwo.value,
                player_three: com.squadThree.value,
                player_four: com.squadFour.value
            }).then(() => {
                com.squadFour.value = ""
                com.squadThree.value = ""
                com.squadTwo.value = ""
                com.squadOne.value = ""
                com.setState({ openDuo: false, openSolo: false, openSquad: false })
            })
        }
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.openSolo}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    {/* Sign in */}
                    <DialogTitle id="form-dialog-title">Register Your Team</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            inputRef={ec => (this.solo = ec)}
                            label="Mobile number of player like 03152672725"
                            type="number"
                            fullWidth />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleRegisterSolo} color="primary">Register</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.openDuo}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    {/* Sign in */}
                    <DialogTitle id="form-dialog-title">Register Your Team</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            inputRef={ec => (this.duoOne = ec)}
                            label="Mobile number of player like 03152672725"
                            type="number"
                            fullWidth />
                        <TextField
                            autoFocus
                            margin="dense"
                            inputRef={ec => (this.duoTwo = ec)}
                            label="Mobile number of player like 03152672725"
                            type="number"
                            fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRegisterDuo} color="primary">Register</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.openSquad}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    {/* Sign in */}
                    <DialogTitle id="form-dialog-title">Register Your Team</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            inputRef={ec => (this.squadOne = ec)}
                            label="Mobile number of player like 03152672725"
                            type="number"
                            fullWidth />
                        <TextField
                            autoFocus
                            margin="dense"
                            inputRef={ec => (this.squadTwo = ec)}
                            label="Mobile number of player like 03152672725"
                            type="number"
                            fullWidth />
                        <TextField
                            autoFocus
                            margin="dense"
                            inputRef={ec => (this.squadThree = ec)}
                            label="Mobile number of player like 03152672725"
                            type="number"
                            fullWidth />
                        <TextField
                            autoFocus
                            margin="dense"
                            inputRef={ec => (this.squadFour = ec)}
                            label="Mobile number of player like 03152672725"
                            type="number"
                            fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRegisterSquad} color="primary">Register</Button>
                    </DialogActions>
                </Dialog>
                <Navbar />
                {this.state.contests.reverse()}
                <div style={{ minHeight: "350px" }}>
                    {this.state.contests.map((items, key) => (
                        <div key={key} className="ro">
                            <img className="images c-image" src={Erangel} alt="image" width="150px" height="150px" style={{ float: "left" }} />
                            <div className="card">
                                <div className="container-0 ">
                                    <div className="box"> <p className="c-heading">Per kill</p><p>{items.per_kill}</p></div>
                                    <div className="box1"><p className="c-heading">Chicken Dinner</p><p>{items.winner}</p></div>
                                    <div className="box2"> <p className="c-heading" >Entry</p><p key={items.id}>{items.entry}</p></div>
                                    <div className="box3"> <p className="c-heading">Players</p><p>{items.players}</p></div>
                                </div>
                                <div className="container-1">
                                    <div className="box4"> <p style={{ color: "orange" }}>Erangel</p></div>
                                    <div className="box5"><p style={{ color: "red" }}>{items.date} - {items.time} </p><p></p></div>
                                    <div className="box6"> <button type="button" className="btn btn-secondary btn-sm">{items.type}</button></div>
                                    <div className="box7" key={items.id}>{items.button ? <button key={items.id} onClick={this.Join.bind(this, items.entry, items.id, items.type)} className="btn btn-sm btn-outline-success">Join</button>
                                        : <button className="btn btn-sm btn-outline-danger" key={items.id} onClick={this.board.bind(this, items.id)}>Closed</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <br />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contests;