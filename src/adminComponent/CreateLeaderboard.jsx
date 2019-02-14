import React, { Component } from 'react';
import Navbar from "./Navbar"
import * as firebase from "firebase";

class CreateLeaderboard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    addBoard = e => {
        e.preventDefault();
        firebase.database().ref().child("leaderboard/"+this.id.value).set({
            user_name: this.user.value,
            kills: this.kills.value,
            rank: this.rank.value,
            prize: this.prize.value
        }).then(()=>{
            alert("Updated")
            this.id.value= ""
            this.user.value= ""
            this.kills.value= ""
            this.rank.value= ""
            this.prize.value= ""
        }).catch(error=>{
            alert("Error occured check your internet or refresh your page")
        })
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <br />
                <h3>Create Leaderboard</h3>
                <br />
                <form onSubmit={this.addBoard}>
                <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Contest Id
                </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Contest Id"
                                ref={ec => (this.id = ec)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            User name
                </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                ref={ec => (this.user = ec)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            kills
                </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="kills"
                                ref={ec => (this.kills = ec)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Rank
                </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Rank"
                                ref={ec => (this.rank = ec)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Prize
                </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Prize"
                                ref={ec => (this.prize = ec)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">
                                Add
                    </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateLeaderboard;