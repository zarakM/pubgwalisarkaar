import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

class Faq extends Component {

    render() {
        return (
            <React.Fragment>
                <br />
                <Navbar />
                <div className="container epage" style={{ minHeight: "350px" }}>
                    <div className="row" >
                        <h3 className="epage-heading">FAQs</h3>
                        <p className="epage">
                            
                        How do I play on PUBG WALI SARKAR? Follow these simple steps to play on PUBG WALI SARKAR: Register/Log into PUBG WALI SARKAR Join the posted contests of your choice by paying a nominal entry fee, for which we provide multiple payment methods such as Credit Cards, Debit Cards, Net banking and PayTM. You will get room ID and password around 30 minutes before the tournament on contest detail page on our website/app You can join the match by opening PUBG Mobile app and entering the room using above mentioned credentials 5 - Prize money will be released via PayTM on your registered mobile number When does the tournament start on PUBG WALI SARKAR? The tournament starts as soon as the deadline for the match ends. The deadline is mentioned on contest/tournament card on our website/app. Can I join the same contest using multiple teams? You can join only once. Can I get a refund if I dont want to join the tournament? Unfortunately, we dont allow refund at this moment.
                            
                            </p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )

    }
}
export default Faq;