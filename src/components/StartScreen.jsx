import React, { Component } from 'react';
import Logo from "../start.jpg";
import "./css/startbutton.css";
import { Link } from 'react-router-dom';


class StartScreen extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render() { 
        return ( 
            <div id="root">
                <img src={Logo} className="background" alt="pubg khelo" width="100%" height="1000px"/>
                <Link to="login"><button className="transparent_btn orange positioning" >Login</button></Link>
                <Link to="register"><button className="transparent_btn orange positioning1">Register</button></Link>
            </div>
         );
    }
}
 
export default StartScreen;