import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"

class Board extends Component {
    constructor(props){
        super(props)
        this.state={
            leaders:[]
        }

        console.log(props.match.params.value)
        let com = this;
        this.setState({leaders:[]})
        firebase
            .database()
            .ref()
            .child("leaderboard/"+this.props.match.params.value)
            .once("value", snap => {
                let items = [];
                snap.forEach(childD => {
                    items.push({
                        user_name: childD.val().user_name,
                        kills: childD.val().kills,
                        prize: childD.val().prize,
                        rank: childD.val().rank,
                    });
                });
                Array.prototype.push.apply(com.state.leaders, items);
                com.setState({
                    leaders: com.state.leaders
                });
            });
    }
    render() { 
        return ( 
            <div className="container">
            <Navbar />
                <br />
                <h3> Contests</h3>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Kills</th>
                            <th scope="col">Prize</th>
                            <th scope="col">Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.leaders.map((value, key) => (
                            <tr key={key}>
                                <td>{value.user_name}</td>
                                <td>{value.kills}</td>
                                <td>{value.prize}</td>
                                <td>{value.rank}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
<br/> <Footer/>
            </div>
         );
    }
}
 
export default Board;