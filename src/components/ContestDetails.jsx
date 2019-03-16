import React from 'react';
import * as firebase from "firebase";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Board from "./Board"
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "./css/aboutcontest.css"
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            contest_id: this.props.id,
            room_no:0,
            password:""
        }

        let com = this
        firebase.database().ref().child("details/"+this.props.id).once('value',snap=>{
            if(snap.exists()){
                com.setState({ room_no:snap.val().room, password:snap.val().pass })
            }
            else{
                com.setState({ room_no:"Please come later or before 15 mins of match timing"})
            }
        })
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div className="container abt-header">
                <AppBar position="static" style={{ backgroundColor: "#424242" }}>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="About" />
                        <Tab label="Prize" />
                        <Tab label="Leader Board" />
                        <Tab label="Joining Details" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <div className="ad"> <p>In the game, up to one hundred players parachute
                       onto an island and scavenge for weapons and equipment to kill others while
                       avoiding getting killed themselves. The available safe area of the game's
                       map decreases in size over time, directing surviving players into tighter
            areas to force encounters. The last player or team standing wins the round.</p>
                        <h3> How to Play</h3>
                        <ul>
                            <li>Click on "Join Now" button and pay the entry fee to register in the contest</li>
                            <li>To join the contest, open PUBG in your mobile (at the specified time) and click on Room/Home Icon on the left side (just below map) and enter Room ID & Password</li>
                            <li>Room ID and Password will be shared on our website via clicking from My contest Detail button</li>
                            <li>If you face any difficulty in joining the contest, write to us at pubgwalisarkaar@gmail.com  </li>
                        </ul>
                        <h3> Terms & Conditions</h3><ul>
                            <li>	Teaming with other players or unregistered players entering room will result in permanent ban from further contests</li>
                            <li>	Only mobile phones are allowed, no Emulators or Tablets.</li>
                            <li>	PUBGwalisarkar has right to remove any participant at its sole discretion to ensure fairplay</li>
                            <li>	PUBGwalisarkar has right to remove any participant whose linked PUBGwalisarkar username is incorrect</li>
                            <li>	You are requested to join the room before match start time</li>
                            <li>	Prize money can only be transfered to linked easypaisa and jazzcash account</li>
                        </ul>
                    </div>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Prize</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>500-pkr</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>300-pkr</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>200-pkr</td>
                            </tr>
                            <tr>
                                <th scope="row">Per-kill</th>
                                <td>25-pkr</td>
                            </tr>

                        </tbody>
                    </table>
                </TabContainer>}
                {value === 2 && <TabContainer><Board contest_id={this.state.contest_id} /></TabContainer>}
                {value === 3 && <TabContainer>{this.state.room_no}<br/>{this.state.password}</TabContainer>}
            </div>
        );
    }
}
SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleTabs);