import React, { Component } from 'react';
import './App.css';
import Profile from "./components/MyProfile"

import Contests from "./components/Contests"
import MyContests from "./components/MyContests"
import Videos from "./components/Videos"

import Policies from "./components/Policies"
import DashboardAdmin from "./adminComponent/Dashboard"

import CreateContest from "./adminComponent/CreateContest";
import CreateVideos from "./adminComponent/CreateVideos";
import CreateLeaderboard from "./adminComponent/CreateLeaderboard";

import GetVideos from "./adminComponent/GetVideos";
import GetContest from "./adminComponent/GetContest";
import GetLeaderboard from "./adminComponent/GetLeaderboard";

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


class App extends Component { 
  constructor(props){
    super(props)
    this.state={
    }
  }
  render() {
    return (
      <div>

        
        <BrowserRouter>
          <Switch>
            {/* admin route */}
            <Route exact path="/admin" component={DashboardAdmin} />
            
            <Route exact path="/create_contest" component={CreateContest} />
            <Route exact path="/create_videos" component={CreateVideos} />
            <Route exact path="/create_leaderboard" component={CreateLeaderboard} />
            
            <Route exact path="/get_contest" component={GetContest} />
            <Route exact path="/get_leaderboard" component={GetLeaderboard} />
            <Route exact path="/get_videos" component={GetVideos} />

            <Route exact path="/" component={Contests} />
            <Route exact path="/profile" component={Profile} />
            

            <Route exact path="/mine" component={MyContests} />
            <Route exact path="/contests" component={Contests} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/policies" component={Policies} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}

export default App;
