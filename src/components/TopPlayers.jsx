import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"


class TopPlayer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount(){
        // firebase.database().ref().child("profiles").once('value',snap=>{
        //     snap.forEach(child=>{
        //         let up={}
        //         up["profiles/"+child.key+"/update"]=false
        //         console.log("profiles/"+child.key+"/update")
        //         firebase.database().ref().update(up)
        //     })
        // })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container" style={{ minHeight: "350px" }}>

                    <h1>No player ranked yet</h1>
                    {/* <div className="container">
                    <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Pubg Name</th>
                                <th scope="col">Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>189</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}


                </div>
                <Footer />
            </div>
        );
    }
}

export default TopPlayer;
