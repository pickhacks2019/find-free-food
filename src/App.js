import React, { Component } from 'react';
import './App.css';
import { FoodMap } from './Map';
import SideBar from './SideBar';

const foodData = [
    { 
      food: 'Pizza', 
      position: {lat: 37.955945, lng: -91.774166},
      building: 'CS',
    },
    { 
      food: "Lee's Chicken", 
      position: {lat: 37.955636, lng: -91.772015},
      building: 'BCH',
    },
    { 
      food: 'Bread Co.', 
      position: {lat: 37.954659, lng: -91.776317},
      building: 'Havener',
    },
    { 
      food: 'Lizard', 
      position: {lat: 37.956193, lng: -91.772381},
      building: 'EE',
    },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodMap foodData={foodData} />
        <SideBar foodData={foodData} />
      </div>
    );
  }
}

export default App;
