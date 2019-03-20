import React, { Component } from 'react';
import "./css/footer.css"
import { Link, withRouter } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import fb from "./imgUtils/fb.png";
import ins from "./imgUtils/instagram.png";
import yt from "./imgUtils/youtube.png";

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">

                <div className="page-box container">
                    <div className="box-1">
                        <Link to="/about_us" className="textColor"> About Us</Link>
                        <br />
                        <Link to="/contact_us" className="textColor"> Contact Us</Link>
                    </div>
                    <div className="box-2">
                        <Link to="/termofuse" className="textColor"> Term Of Use</Link>
                        <br />
                        <Link to="/workwithus" className="textColor"> Work With Us </Link>
                    </div>
                    <div className="box-3">
                        <Link to="/faq" className="textColor"> FAQ</Link>
                        <br />
                        <Link to="/privacy" className="textColor"> Privacy Policy </Link>
                    </div>

                </div>
                <br />
                <h4> Follow Us:</h4>

                <div className="flex-container">
                    <br />
                    <a href="https://www.facebook.com/pubgwalisarkar1"><img src={fb} height="40px" style={{ margin: "10px" }} alt="youtube" /></a>
                    <a href="https://www.instagram.com/pubgwalisarkar"><img src={ins} height="40px" style={{ margin: "10px" }} alt="youtube" /></a>
                    <a href="https://www.youtube.com/channel/UChAx1ZyV4sULQb8OMD6yVmw"><img src={yt} height="40px" style={{ margin: "10px" }} alt="youtube" /></a>
                </div>

            </div>
        )
    }
}
export default withRouter(Footer);  