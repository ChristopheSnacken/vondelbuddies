import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';

import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello VondelBuddies!</h1>
        <Route exact path="/" component={Welcome} />
      </div>
    );
  }
}

export default App;
