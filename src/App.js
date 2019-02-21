import React, { Component } from 'react';
import './App.css';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Profile from "./components/MyProfile"
import StartScreen from "./components/StartScreen";

import Contests from "./components/Contests"
import MyContests from "./components/MyContests"
import Videos from "./components/Videos"

import Policies from "./components/Policies"
import Admin from "./adminComponent/Login"
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
import * as firebase from "firebase";



class App extends Component { 
  constructor(){
    super()
    this.state={
    }

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        console.log("signed in")
      }
      else{
        console.log("hoala")
        this.props.history.push("/starter")
      }
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* admin route */}
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/dashboard_admin" component={DashboardAdmin} />
            
            <Route exact path="/create_contest" component={CreateContest} />
            <Route exact path="/create_videos" component={CreateVideos} />
            <Route exact path="/create_leaderboard" component={CreateLeaderboard} />
            
            <Route exact path="/get_contest" component={GetContest} />
            <Route exact path="/get_leaderboard" component={GetLeaderboard} />
            <Route exact path="/get_videos" component={GetVideos} />

            <Route exact path="/starter" component={StartScreen} />
            <Route exact path="/" component={Contests} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
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
