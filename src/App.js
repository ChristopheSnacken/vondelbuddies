import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import MatchesContainer from './components/MatchesContainer'
import WelcomeContainer from './components/WelcomeContainer'
import UserProfilesContainer from './components/UserProfilesContainer'
import Login from './components/SignIn'
import SignUp from './components/SignUp'
import SignOutButton from './components/SignOut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="home">
            <Link to={'./matches'}><button>Home</button></Link>
          </div>
          <div className="profile">
            <Link to={'./profile'}><button>Profile</button></Link>
          </div>
        </header>
        <main>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={UserProfilesContainer} />
          <Route exact path="/matches" component={MatchesContainer} />
        </main>
      </div>
    )
  }
}

export default App;
