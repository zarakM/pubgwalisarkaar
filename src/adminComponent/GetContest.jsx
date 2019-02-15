import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar";

class GetContest extends Component {
    constructor(){
        super()
        this.state = {
            contests: []
        };
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
                        map: childD.val().map,
                        type: childD.val().type,
                        entry: childD.val().entry,
                        per_kill: childD.val().per_kill,
                        date: childD.val().date,
                        time: childD.val().time
                    });
                });
                Array.prototype.push.apply(com.state.contests, items);
                com.setState({
                    contests: com.state.contests
                });
            });
    }

    handleDelete=(id,e)=>{
        e.preventDefault()
        firebase.database().ref().child("contests/"+id).remove().then(()=>{
            alert("contest deleted")
        e.preventDefault()
            this.props.history.push("/create_contest")
        }).catch(error=>{
            alert("error occured")
        })
    }

    handleEdit=(id,e)=>{
        e.preventDefault()
    }

    openLeaderboard=(id,e)=>{
        e.preventDefault()
    }
    render() { 
        return ( 
            <div className="container">
                <Navbar />
                <br />
                <h3>Contests</h3>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Map</th>
                            <th scope="col">Type</th>
                            <th scope="col">Entry</th>
                            <th scope="col">Per Kill</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Open Leaderboard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contests.map((value, key) => (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.map}</td>
                                <td>{value.type}</td>
                                <td>{value.entry}</td>
                                <td>{value.per_kill}</td>
                                <td>{value.date}</td>
                                <td>{value.time}</td>
                                <td>
                                    <button
                                        className="btn btn-info"
                                        onClick={this.handleEdit.bind(this, value.id)}>
                                        Edit
                                        </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.handleDelete.bind(this, value.id)}>
                                        Delete
                                        </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.openLeaderboard.bind(this, value.id)}>
                                        Open
                                        </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

         );
    }
}
 
export default GetContest;