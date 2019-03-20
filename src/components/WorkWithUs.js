import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

class WorkWithUS extends Component {

    render() {
        return (
            <React.Fragment>
                <br />
                <Navbar />
                <div className="container epage" style={{ minHeight: "350px" }}>
                    <div className="row" >
                        <h3 className="epage-heading"> Work With Us</h3>
                        <p className="epage">Do you want to change the way Pakistan plays?
                Drop us an email @ pubgwalisarkaar@gmail.com
We are small but growing fast and want to change the e-sports landscape in Pakistan.</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )

    }
}
export default WorkWithUS;