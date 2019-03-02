import React, { Component } from 'react';
import './App.css';
import { FoodMap } from './Map';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodMap />
        <SideBar />
      </div>
    );
  }
}

export default App;
