import React, { Component } from 'react';
import Navbar from "./components/Navbar"


class Dashboard extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    
    render() { 
        return ( 
            <div>
                <Navbar/>
            </div>
         );
    }
}
 
export default Dashboard;
