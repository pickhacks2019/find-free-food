import React, { Component } from 'react';
import './App.css';
import { FoodMap } from './Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodMap />
        <div className="SideBar">
          Insert free food here !!!
        </div>
      </div>
    );
  }
}

export default App;
