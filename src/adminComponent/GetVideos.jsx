import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"

class GetVideos extends Component {
    constructor(){
        super()
        this.state = {
            videos: []
        };
        var ref = firebase.database().ref()
        let com = this;
        ref.child("videos")
            .once("value", snap => {
                let items = [];
                snap.forEach(childD => {
                    items.push({
                        id: childD.key,
                        link: childD.val().link
                    });
                });
                Array.prototype.push.apply(com.state.videos, items);
                com.setState({
                    videos: com.state.videos
                });
            });
    }

    handleDelete=(id,e)=>{
        e.preventDefault();
        var ref = firebase.database().ref()
        ref.child("videos/"+id).remove().then(()=>{
            alert("videos deleted")
            this.props.history.push("/create_contest");
        }).catch(error=>{
            alert("an error occured")
        })
    }
    render() { 
        return ( 
            <div className="container">
            <Navbar />
            <br />
            <h3>Videos</h3>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Link</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {this.state.videos}
                <tbody>
                    {this.state.videos.map((value, key) => (
                        <tr key={key}>
                            <td>{value.link}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={this.handleDelete.bind(this, value.id)}>
                                    Delete
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
 
export default GetVideos;