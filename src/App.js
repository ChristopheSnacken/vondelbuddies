import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import MatchesContainer from './components/MatchesContainer'
import WelcomeContainer from './components/WelcomeContainer'
import UserProfilesContainer from './components/UserProfilesContainer'
import MyMatchesContainer from './components/MyMatchesContainer'
import InterestsContainer from './components/InterestsContainer'
import Login from './components/SignIn'
import SignUp from './components/SignUp'
import Header from './components/header'
import Favicon from 'react-favicon';
// import SignOutButton from './components/SignOut';
import { firebase } from './firebase';

class App extends Component {

  state = {
    authUser: null,
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser? this.setState(() => ({ authUser })) : this.setState(() => ({ authUser: null }));
    })
  }

  render() {
    const {authUser} = this.state

    return (
      <div className="App">
        <Favicon url={require('./img/vondelbuddies_favicon.png')} />
        {authUser && (<header><Header /> </header>) }
        <main>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/mymatches" component={MyMatchesContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={WelcomeContainer} />
          <Route exact path="/profile" component={UserProfilesContainer} />
          <Route path="/matches" component={MatchesContainer} />
          <Route exact path="/interests" component={InterestsContainer} />
        </main>
      </div>
    )
  }
}

export default App;
