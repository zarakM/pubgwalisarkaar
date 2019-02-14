import React, { Component } from 'react';
import Navbar from "./Navbar"
import * as firebase from "firebase";
import { isUndefined } from 'util';

class CreateContest extends Component {
    constructor() {
        super()
        this.state = {
            bill: 0
        }
    }

    addContest = e => {
        e.preventDefault();
        let com = this;
        var ref = firebase.database().ref();
        ref.child("contests").once('value', snap => {
            snap.forEach(childSnap => {
                if (isUndefined(childSnap.key)) {
                    com.setState({ bill: 1 })
                }
                else {
                    if (childSnap.key > com.state.bill) {
                        com.setState({ bill: childSnap.key })
                    }
                }
            })
        }).then(() => {
            let contest_id = parseInt(com.state.bill) + 1
            ref.child("contests/" + contest_id).set({
                map: this.map.value,
                type: this.type.value,
                entry: this.entry.value,
                per_kill: this.per_kill.value,
                date: this.date.value,
                time: this.time.value
            })
            this.map.value = "";
            this.type.value = "";
            this.entry.value = "";
            this.per_kill.value = "";
            this.date.value = "";
            this.time.value = "";
        }).catch(error=>{
            alert("Error occured check your internet or refresh your page")
        })
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                <br />
                <h3>Create Contest</h3>
                <br />
                <form onSubmit={this.addContest}>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Map
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Map"
                                ref={ec => (this.map = ec)}
                                list="Map"
                                required
                            />
                            <datalist id="Map">
                                <option value="Miramaar" />
                                <option value="Erangel" />
                            </datalist>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            Type
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type"
                                ref={eb => (this.type = eb)}
                                list="type"
                                required
                            />
                            <datalist id="type">
                                <option value="Squad" />
                                <option value="Duo" />
                                <option value="Solo" />
                            </datalist>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            Entry
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Entry"
                                ref={eb => (this.entry = eb)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            Per kill
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Per kill"
                                ref={eb => (this.per_kill = eb)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            Date
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Date"
                                ref={ekw => (this.date = ekw)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                            Time
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="time"
                                className="form-control"
                                placeholder="Time"
                                ref={eb => (this.time = eb)}
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

export default CreateContest;