import React, { Component } from 'react';
import Navbar from "./Navbar"
import * as firebase from "firebase";

class CreateLeaderboard extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            hasId: false,
            contest_id: 0
        }
    }

    addBoard = e => {
        e.preventDefault();
        this.setState({ contest_id: this.id.value, hasId: true })
        this.id.value = ""
    }

    addUser = e => {
        e.preventDefault();
        let com = this
        let dbRef= firebase.database().ref()
        let ref = dbRef.child("leaderboard/" + this.state.contest_id).push()
        let key = ref.key
        ref.set({
            user_name: this.user.value,
            kills: this.kills.value,
            rank: this.rank.value,
            prize: this.prize.value
        }).then(() => {
            alert("Updated")
            com.state.data.push({
                row_key: key,
                user: com.user.value,
                kills: com.kills.value,
                rank: com.rank.value,
                prize: com.prize.value
            })
            com.user.value = ""
            com.kills.value = ""
            com.rank.value = ""
            com.prize.value = ""
            com.setState({ data: com.state.data })
        }).catch(error => {
            alert("Error occured check your internet or refresh your page" + error)
        })
    }

    handleDelete = (id,e)=>{
        e.preventDefault()
        let com = this
        firebase.database().ref().child("leaderboard/" + this.state.contest_id).child(id)
        .remove().then(()=>{
            com.state.data.forEach((snap,i)=>{
                if(snap.row_key === id){
                    com.state.data.splice(i,1)
                }
            })
            com.setState({data:com.state.data})
        }).catch(error=>{
            alert("error occured "+error);
        })
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <br />
                <h3>Create Leaderboard</h3>
                <br />
                {this.state.hasId ?
                    <div>
                        <h5>Contest ID : {this.state.contest_id} </h5>
                        <br />{console.log(this.state.data)}
                        <form onSubmit={this.addUser}>

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

                        <br />
                <h3>Contests Members</h3>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Kills</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Prize</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value, key) => (
                            <tr key={key}>
                                <td>{value.user}</td>
                                <td>{value.kills}</td>
                                <td>{value.rank}</td>
                                <td>{value.prize}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.handleDelete.bind(this, value.row_key)}>
                                        Delete
                                        </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                    </div> :
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
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">
                                    Add
    </button>
                            </div>
                        </div>
                    </form>}

            </div>
        );
    }
}

export default CreateLeaderboard;