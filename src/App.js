import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
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
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux'
// import SignOutButton from './components/SignOut';


class App extends Component {



  render() {

    return (
      <div className="App">
        <Favicon url={require('./img/vondelbuddies_favicon.png')} />
        <header>
          <Header />
          {/* <div className="home">
            <Link to={'/matches'}><img src={require('./img/search_icon.png')} alt="home"/></Link>
          </div>
          <div className="profile">
            <Badge matches={acceptedMatches} badgeContent={acceptedMatches.length} color="primary">
              <Link to={'/mymatches'}><img src={require('./img/profile_icon.png')} alt="profile"/></Link>
            </Badge>

          </div> */}
        </header>
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
