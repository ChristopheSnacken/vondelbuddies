import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';
import MatchesContainer from './components/MatchesContainer'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello VondelBuddies!</h1>
        <Route exact path="/" component={Welcome} />
        <Route path="/matches" component={MatchesContainer} />
      </div>
    );
  }
}

export default App;
