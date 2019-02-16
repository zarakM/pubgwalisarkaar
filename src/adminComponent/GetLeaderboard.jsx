import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar";


class GetLeaderboard extends Component {
    constructor() {
        super();
        this.state = {
            leaders: []
        }
    }

    searchContest = e =>{
        e.preventDefault()
        let com = this;
        this.setState({leaders:[]})
        firebase
            .database()
            .ref()
            .child("leaderboard/"+this.inputId.value)
            .once("value", snap => {
                let items = [];
                snap.forEach(childD => {
                    items.push({
                        user_name: childD.val().user_name,
                        kills: childD.val().kills,
                        prize: childD.val().prize,
                        rank: childD.val().rank,
                    });
                });
                Array.prototype.push.apply(com.state.leaders, items);
                com.setState({
                    leaders: com.state.leaders
                });
            });
    }

    componentDidMount(){
        if( firebase.auth().currentUser== null ){

        }
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                <br />
                <h3>Contests</h3>
                <br />
                <div className="input-group mb-3">
                    <input
                        type="text"
                        ref={serial => (this.inputId = serial)}
                        className="form-control col-sm-2"
                        placeholder="Contest ID"
                        aria-label="Contest"
                        aria-describedby="basic-addon1"
                    />
                    <div className="input-group-append">
                        <button type="button" onClick={this.searchContest} className="btn btn-outline-info">
                            Search By
                                </button>
                    </div>
                </div>
                <br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Kills</th>
                            <th scope="col">Prize</th>
                            <th scope="col">Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.leaders.map((value, key) => (
                            <tr key={key}>
                                <td>{value.user_name}</td>
                                <td>{value.kills}</td>
                                <td>{value.prize}</td>
                                <td>{value.rank}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GetLeaderboard;