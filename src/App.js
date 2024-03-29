import React, { Component } from 'react';
import './App.css';
import Profile from "./components/MyProfile"
import Board from "./components/Board"
import Contests from "./components/Contests"
import MyContests from "./components/MyContests"
import Videos from "./components/Videos"
import TopPlayers from "./components/TopPlayers"
import SpecialEvents from "./components/SpecialEvent"
import Policies from "./components/Policies"
import DashboardAdmin from "./adminComponent/Dashboard"
import CreateContest from "./adminComponent/CreateContest";
import CreateDetails from "./adminComponent/CreateDetails";
import CreateVideos from "./adminComponent/CreateVideos";
import CreateLeaderboard from "./adminComponent/CreateLeaderboard";
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Faq from "./components/Faq"
import TermOfUse from "./components/TermsofUse"
import WorkWithUs from "./components/WorkWithUs"
import AboutContest from "./components/AboutContest"
import GetVideos from "./adminComponent/GetVideos";
import GetContest from "./adminComponent/GetContest";
import GetLeaderboard from "./adminComponent/GetLeaderboard";
import ReactGA from 'react-ga';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  initializeReactGA() {
    ReactGA.initialize('UA-137031900-1');
    ReactGA.pageview('/homepage');
  }
  render() {
    return (
      <div id="root">
        <BrowserRouter>
          <Switch>
            {/* admin route */}
            <Route exact path="/admin" component={DashboardAdmin} />
            <Route exact path="/create_details" component={CreateDetails} />
            <Route exact path="/create_contest" component={CreateContest} />
            <Route exact path="/create_videos" component={CreateVideos} />
            <Route exact path="/create_leaderboard" component={CreateLeaderboard} />
            <Route exact path="/get_contest" component={GetContest} />
            <Route exact path="/get_leaderboard" component={GetLeaderboard} />
            <Route exact path="/get_videos" component={GetVideos} />
            <Route exact path="/about_us" component={About} />
            <Route exact path="/contact_us" component={ContactUs} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/workwithus" component={WorkWithUs} />
            <Route exact path="/termofuse" component={TermOfUse} />
            <Route exact path="/" component={Contests} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/board/:id" component={Board} />
            <Route exact path="/mycontests" component={MyContests} />
            <Route exact path="/contests" component={Contests} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/top_players" component={TopPlayers} />
            <Route exact path="/events" component={SpecialEvents} />
            <Route exact path="/policies" component={Policies} />
            <Route exact path="/aboutcontest/:id" component={AboutContest} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}
export default App;
