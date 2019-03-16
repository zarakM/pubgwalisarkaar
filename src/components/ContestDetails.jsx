import React from 'react';
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
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="container abt-header">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} className="appbar1">
            <Tab label="About" />
            <Tab label="Prize" />
            <Tab label="Leader Board" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
         <div className="container  ad"> <p>In the game, up to one hundred players parachute
            onto an island and scavenge for weapons and equipment to kill others while 
            avoiding getting killed themselves. The available safe area of the game's 
            map decreases in size over time, directing surviving players into tighter 
            areas to force encounters. The last player or team standing wins the round.</p>
            <h3> How to Play</h3>
              <ul>
              <li>Click on "Join Now" button and pay the entry fee to register in the contest</li>
              <li>To join the contest, open PUBG in your mobile (at the specified time) and click on Room/Home Icon on the left side (just below map) and enter Room ID & Password</li>
              <li>Room ID and Password will be shared on our website</li>
              <li>Room ID and Password will also appear on top of this page 15 mins before contest start time. If it doesn't appear, make sure that you have logged in and refresh the page.</li>
              <li>If you face any difficulty in joining the contest, write to us at pubgwalisarkaar@gmail.com  </li>
              </ul>
            <h3> Terms & Conditions</h3>
            <li>You abide by our terms of use ( pubgwalisarkaar/termsofuse) by joining this term</li>	
            <li>	Teaming with other players or unregistered players entering room will result in permanent ban from further contests</li>
            <li>	Only mobile phones are allowed, no Emulators or Tablets.</li>
            <li>	PUBGwalisarkar has right to remove any participant at its sole discretion to ensure fairplay</li>
            <li>	PUBGwalisarkar has right to remove any participant whose linked PUBGwalisarkar username is incorrect</li>
            <li>	You are requested to join the room before match start time</li>
            <li>	Prize money can only be transfered to linked easypaisa and jazzcash account</li>
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
        {value === 2 && <TabContainer><Board/></TabContainer>}
      </div>
    );
  }
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleTabs);