import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.jpg"
import SimpleTabs from "./ContestDetails";
class AboutContest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contest_id: this.props.match.params.id,
            contests: {
                id: "",
                date: "00-00-0000",
                time: "00-00",
                type: "---",
                entry:"---",
                map: "---",
                per_kill: "0",
                winner: "0",
                players: "0"
            }
        }
    }
    componentDidMount() {
        let com = this
        firebase
            .database()
            .ref()
            .child("contests/" + this.state.contest_id)
            .once("value", childD => {
                com.setState({
                    contests: {
                        id: childD.key,
                        date: childD.val().date,
                        time: childD.val().time,
                        type: childD.val().type,
                        entry: childD.val().entry,
                        map: childD.val().map,
                        per_kill: childD.val().per_kill,
                        winner: childD.val().winner,
                        players: childD.val().players,
                    }
                });
            });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="ro">
                    <img className="images c-image" src={Erangel} alt="pubg img" width="150px" height="150px" style={{ float: "left" }} />
                    <div className="card">
                        <div className="container-0 ">
                            <div className="box"> <p className="c-heading">Per kill</p><p>{this.state.contests.per_kill}</p></div>
                            <div className="box1"><p className="c-heading">Chicken Dinner</p><p>{this.state.contests.winner}</p></div>
                            <div className="box2"> <p className="c-heading" >Entry</p><p>{this.state.contests.entry}</p></div>
                            <div className="box3"> <p className="c-heading">Players</p><p>{this.state.contests.players}</p></div>
                        </div>
                        <div className="container-1">
                            <div className="box4"> <p style={{ color: "orange" }}>Erangel</p></div>
                            <div className="box5"><p style={{ color: "red" }}>{this.state.contests.date} - {this.state.contests.time} </p><p></p></div>
                            <div className="box6"> <button type="button" className="btn btn-secondary btn-sm">{this.state.contests.type}</button></div>
                            <div className="box6"> <button type="button" className="btn btn-info btn-sm">JOINED</button></div>
                        </div>
                    </div>
                </div>
                <br />
                <SimpleTabs id={this.state.contest_id} />
                <Footer />
            </div>
        )
    }

}

export default AboutContest;