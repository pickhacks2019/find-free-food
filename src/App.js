import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SimpleMap } from './Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SimpleMap />
      </div>
    );
  }
}

export default App;
