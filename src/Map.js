import React, { Component } from 'react';
import Map from 'google-map-react';

export class FoodMap extends Component {
  renderMarkers = (map, maps) => {
    this.props.foodData.forEach(function(datum) {
      let marker = new maps.Marker({
        title: datum.food + ' in ' + datum.building,
        position: datum.position,
        map,
      });
    });
  }

  render() {
    return (
      <div className="Map">
        <Map
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
          center={this.props.center}
          zoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        />
      </div>
    );
  }
}
