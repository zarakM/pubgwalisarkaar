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
    render() {
        return (
            <div style={{marginTop:"14%"}}>
                <Navbar />
                <h1>Coming soon</h1>
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
                <Footer />
            </div>
        );
    }
}

export default TopPlayer;
