import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

class WorkWithUS extends Component{

    render(){
        return(
        <div className="container epage" style={{overflowY: "scroll",height:"60vh"}}>
        <div className="row" >
        <h3 className="epage-heading"> Work With Us</h3>
        <p className="epage">Do you want to change the way India plays? 

Drop us an email @ career@pubkhelo.com

We are small but growing fast and want to change the e-sports landscape in Pakistan.</p>
        </div>
        </div>
        )

    }
}
export default WorkWithUS;