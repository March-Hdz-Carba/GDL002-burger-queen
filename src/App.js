import React, { Component } from 'react';
import './App.css';
import backgroundTittle from './components/backgroundTittle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Burger-Queen</h2>
          <nav>
            {backgroundTittle}
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
