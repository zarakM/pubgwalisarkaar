import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import StartScreen from "./components/StartScreen";
import Admin from "./adminComponent/Login"
import DashboardAdmin from "./adminComponent/Dashboard"
import CreateContest from "./adminComponent/CreateContest";
import CreateVideos from "./adminComponent/CreateVideos";
import CreateLeaderboard from "./adminComponent/CreateLeaderboard";
import GetVideos from "./adminComponent/GetVideos";
import GetContest from "./adminComponent/GetContest";


import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';


class App extends Component { 
  render() {
    return (
      <div>
        <HashRouter>
          <Switch><div>
            {/* user route */}
            <Route exact path="/" component={StartScreen} />
            <Route path="/register" component={SignUp} />

            {/* admin route */}
            <Route path="/admin" component={Admin} />
            <Route path="/create_contest" component={CreateContest} />
            <Route path="/get_contest" component={GetContest} />
            <Route path="/create_videos" component={CreateVideos} />
            <Route path="/get_videos" component={GetVideos} />
            <Route path="/create_leaderboard" component={CreateLeaderboard} />
            <Route path="/login" component={SignIn} />
            <Route path="/dashboard_admin" component={DashboardAdmin} />
          </div>
          </Switch>
        </HashRouter >

      </div>
    );
  }
}

export default App;
