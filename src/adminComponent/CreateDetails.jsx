import React, { Component } from 'react';
import Navbar from "./Navbar"
import * as firebase from "firebase";

class CreateVideos extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    addDetail = e => {
        e.preventDefault();
        firebase.database().ref().child("details/"+this.id.value).set({
            room: this.room.value,
            pass: this.pass.value
        }).then(() => {
            alert("Entered")
            this.id.value= ""
            this.room.value= ""
            this.pass.value= ""

        }).catch(error => {
            alert("Error occured check your internet or refresh your page")
        })
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <br />
                <h3>Create Details</h3>
                <br />
                <form onSubmit={this.addDetail}>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Contest ID
                       </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Link"
                                ref={ec => (this.id = ec)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Room number
                       </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Link"
                                ref={ec => (this.room = ec)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Password
                       </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Link"
                                ref={ec => (this.pass = ec)}
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

export default CreateVideos;