import React, { Component } from 'react';
import './App.css';
import { FoodMap } from './Map';
import SideBar from './SideBar';

const foodData = [
  {
    key: 0,
    food: 'Pizza',
    position: { lat: 37.955945, lng: -91.774166 },
    building: 'CS',
  },
  {
    key: 1,
    food: "Lee's Chicken",
    position: { lat: 37.955636, lng: -91.772015 },
    building: 'BCH',
  },
  {
    key: 2,
    food: 'Bread Co.',
    position: { lat: 37.954659, lng: -91.776317 },
    building: 'Havener',
  },
  {
    key: 3,
    food: 'Lizard',
    position: { lat: 37.956193, lng: -91.772381 },
    building: 'EE',
  },
];

class App extends Component {
  state = {
    mapDisplayKey: null,
  };

  showOnMap = (key) => {
    this.setState({ mapDisplayKey: key });
  };

  render() {
    return (
      <div className="App">
        <FoodMap foodData={foodData} mapDisplayKey={this.state.mapDisplayKey} />
        <SideBar foodData={foodData} onCardClick={this.showOnMap} />
      </div>
    );
  }
}

export default App;
