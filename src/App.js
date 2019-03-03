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
    health: 'Not good',
    time: '3/8 @ 7pm',
  },
  {
    key: 1,
    food: "Lee's Chicken",
    position: { lat: 37.955636, lng: -91.772015 },
    building: 'BCH',
    health: 'Could be better',
    time: '3/10 @ 9pm',
  },
  {
    key: 2,
    food: 'Bread Co.',
    position: { lat: 37.954659, lng: -91.776317 },
    building: 'Havener',
    health: 'Awesome',
    time: '3/8 @ 2pm',
  },
  {
    key: 3,
    food: 'Lizard',
    position: { lat: 37.956193, lng: -91.772381 },
    building: 'EE',
    health: 'N/A',
    time: '3/7 @ 7pm',
  },
];

class App extends Component {
  state = {
    mapDisplayPosition: {
      // S&T's lat/lng
      lat: 37.954825,
      lng: -91.773491,
    },
    mapDisplayInfo: '',
  };

  showOnMap = key => {
    foodData.forEach(datum => {
      if (datum.key === key) {
        this.setState({ mapDisplayPosition: datum.position }, () => {
          console.log(datum.position);
        });
      }
    });
  };

  showInfo = key => {
    foodData.forEach(datum => {
      if (datum.key === key) {
        this.setState({
          mapDisplayInfo: { health: datum.health, building: datum.building, time: datum.time },
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <FoodMap
          foodData={foodData}
          zoom={17}
          center={this.state.mapDisplayPosition}
          onMarkerClick={this.showOnMap}
          showInfo={this.showInfo}
          info={this.state.mapDisplayInfo}
        />
        <SideBar 
          foodData={foodData} 
          onCardClick={this.showOnMap} 
          showInfo={this.showInfo}
          />
      </div>
    );
  }
}

export default App;
