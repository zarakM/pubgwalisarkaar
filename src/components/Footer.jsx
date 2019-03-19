import React, { Component } from 'react';
import "./css/footer.css"
import { Link } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import fb from "./imgUtils/fb.png";
import ins from "./imgUtils/instagram.png";
import yt from "./imgUtils/youtube.png";
import about from "./About";
class Footer extends Component {

    render() {
        return (
            <div className="footer-container">
                
                <div className="page-box container">
                    <div className="box-1">
                        <Link to="/about_us"><p className="textColor"> about us</p></Link>
                        <Link to="/about_us"><p className="textColor"> aout us</p></Link>
                    </div>
                    <div className="box-2">
                        <Link to="/about_us"><p className="textColor"> about us</p></Link>
                        <Link to="/about_us" style={{marginTop:"-10px"}}><p className="textColor"> about us</p></Link>
                    </div>
                    <div className="box-3">
                        <Link to="/about_us"><p className="textColor"> about us</p></Link>
                        <Link to="/about_us"><p className="textColor"> about us</p></Link>
                    </div>

                    </div>
                    <h4> Follow Us:</h4>

                <div className="flex-container">
                <br/>
                    <img src={fb} height="40px" style={{ margin: "10px" }} alt="youtube" />
                    <img src={ins} height="40px" style={{ margin: "10px" }} alt="youtube" />
                    <img src={yt} height="40px" style={{ margin: "10px" }} alt="youtube" />
                </div>

            </div>
        )
    }
}
export default Footer;