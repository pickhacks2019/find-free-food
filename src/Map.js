import React, { Component } from 'react';
import Map from 'google-map-react';
import Info from './Info';

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

  handleMarkerClick = (clickInfo) => {
    this.props.foodData.forEach((datum) => {
      const latDiff = Math.abs(clickInfo.lat - datum.position.lat)
      const lngDiff = Math.abs(clickInfo.lng - datum.position.lng)
      
      if (latDiff < 0.0004 && lngDiff < 0.00005) {
        this.props.onMarkerClick(datum.key);
        this.props.showInfo(datum.key);
      }
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
          onClick={this.handleMarkerClick}
        >
        </Map>
        <Info info={this.props.info} />
      </div>
    );
  }
}
