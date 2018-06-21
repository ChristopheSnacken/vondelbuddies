import React, { Component } from 'react';
import Cart from './components/Cart'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Cart />
        </main>
      </div>
    );
  }
}

export default App;
