import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <br/>
                <Navbar />
                <div className="container epage"  style={{ minHeight: "350px" }}>
                    <div className="row" >
                        <h3 className="epage-heading"> About Us</h3>
                        <p className="epage">We aim to be India’s biggest e-sports gaming platform with PUBG, CS GO and FIFA games. If you think you have what it takes, then this is the place for you. It is a game of skill that offers gamers a platform to showcase their talent and make a career as a professional gamer.
    
                We help hardcore gamers as well as novice players increase their engagement and connect deeper with their favorite e-sport.
    
Also, you can use your skills to earn handsome rewards and someday you can choose this as a career. We plan to organize mega premere leagues in future, where you will be able to showcase your talent to the world.</p>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default About;