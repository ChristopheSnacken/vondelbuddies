import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import MatchesContainer from './components/MatchesContainer'
import WelcomeContainer from './components/WelcomeContainer'
import UserProfilesContainer from './components/UserProfilesContainer'
import MyMatchesContainer from './components/MyMatchesContainer'
import Login from './components/SignIn'
import SignUp from './components/SignUp'
// import SignOutButton from './components/SignOut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="home">
            <Link to={'./matches'}><img src={require('./img/search_icon.png')} alt="home"/></Link>
          </div>
          <div className="profile">
            <Link to={'./profile'}><img src={require('./img/profile_icon.png')} alt="profile"/></Link>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/mymatches" component={MyMatchesContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={UserProfilesContainer} />
          <Route exact path="/matches" component={MatchesContainer} />
        </main>
      </div>
    )
  }
}

export default App;
