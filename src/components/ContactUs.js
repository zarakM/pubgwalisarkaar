import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"

class ContactUs extends Component {

    render() {
        return (
            <React.Fragment>
                <br />
                <Navbar />
                <div className="container epage"  style={{ minHeight: "350px" }}>
                    <div className="row" >
                        <h3 className="epage-heading"> Contact Us</h3>

                        <input type="text" />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )

    }
}
export default ContactUs;