import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import StartScreen from "./components/StartScreen";

import Contests from "./components/Contests"
import Videos from "./components/Videos"

import Admin from "./adminComponent/Login"
import DashboardAdmin from "./adminComponent/Dashboard"

import CreateContest from "./adminComponent/CreateContest";
import CreateVideos from "./adminComponent/CreateVideos";
import CreateLeaderboard from "./adminComponent/CreateLeaderboard";

import GetVideos from "./adminComponent/GetVideos";
import GetContest from "./adminComponent/GetContest";
import GetLeaderboard from "./adminComponent/GetLeaderboard";
import * as firebase from "firebase";


import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


class App extends Component { 
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* admin route */}
            <Route path="/admin" component={Admin} />
            <Route path="/dashboard_admin" component={DashboardAdmin} />
            
            <Route path="/create_contest" component={CreateContest} />
            <Route path="/create_videos" component={CreateVideos} />
            <Route path="/create_leaderboard" component={CreateLeaderboard} />
            
            <Route path="/get_contest" component={GetContest} />
            <Route path="/get_leaderboard" component={GetLeaderboard} />
            <Route path="/get_videos" component={GetVideos} />
          </Switch>
        </BrowserRouter >
        <BrowserRouter>
          <Switch>
            {/* user route */}
            <Route path="/starter" component={StartScreen} />
            <Route path="/" component={Contests} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/my_contests" component={SignUp} />
            <Route path="/contests" component={SignUp} />
            <Route path="/videos" component={Videos} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}

export default App;
