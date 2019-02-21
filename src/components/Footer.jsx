import React, { Component } from 'react';
import "./css/footer.css"
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import fb from "./imgUtils/fb.png";
import ins from "./imgUtils/instagram.png";
import yt from "./imgUtils/youtube.png";

class Footer extends Component {

    render() {
        return (
            <div className="container" style={{backgroundColor:"#054e86",position:"fixed",bottom:"0px"}}>
                <div className="flex-container">
                    <img src={fb} height="60px" style={{ margin: "10px" }} alt="youtube" />
                    
                    <img src={ins} height="60px" style={{ margin: "10px" }} alt="youtube" />
                    
                    <img src={yt} height="60px" style={{ margin: "10px" }} alt="youtube" />
                </div>
            </div>
        )
    }
}
export default Footer;