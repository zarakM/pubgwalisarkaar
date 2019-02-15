import React, { Component } from 'react';
import Navbar from "./Navbar"
import * as firebase from "firebase";

class CreateVideos extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    addVideo=e=>{
        e.preventDefault();
        firebase.database().ref().child("videos").push().set({
            link: this.link.value
        }).then(()=>{
            alert("Entered")
            this.link.value = ""
        }).catch(error=>{
            alert("Error occured check your internet or refresh your page")
        })
    }
    
    render() { 
        return ( 
            <div className="container">
                <Navbar />
                <br />
                <h3>Create Videos</h3>
                <br />
                <form onSubmit={this.addVideo}>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Video Link
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Link"
                                ref={ec => (this.link = ec)}
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