import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Board from "./Board"
import Miramar from "./imgUtils/miramaar.png"
import Erangel from "./imgUtils/erangel.jpg"
import SimpleTabs from "./ContestDetails";
class AboutContest extends Component {

    render(){
        return ( 
            <div>
                <Navbar/>
                <div className="ro">
                                    <img className="images c-image" src={Erangel} alt="image" width="150px" height="150px" style={{ float: "left" }} />
                                    <div className="card">
                                        <div className="container-0 ">
                                            <div className="box"> <p className="c-heading">Per kill</p><p>{}</p></div>
                                            <div className="box1"><p className="c-heading">Chicken Dinner</p><p>{}</p></div>
                                            <div className="box2"> <p className="c-heading" >Entry</p><p>{}</p></div>
                                            <div className="box3"> <p className="c-heading">Players</p><p>{}</p></div>
                                        </div>
                                        <div className="container-1">
                                            <div className="box4"> <p style={{ color: "orange" }}>Erangel</p></div>
                                            <div className="box5"><p style={{ color: "red" }}>{} - {} </p><p></p></div>
                                            <div className="box6"> <button type="button" className="btn btn-secondary btn-sm">{}</button></div>
                                            <div className="box6"> <button type="button" className="btn btn-info btn-sm">Leaderboard</button></div>
                                        </div>
                                    </div>
                                </div>
                        <SimpleTabs/>
                    <Footer/>
            </div>
        )
    }

}

export default AboutContest;