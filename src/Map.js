import React, { Component } from 'react';
import Map from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class FoodMap extends Component {
  static defaultProps = {
    center: {
      // S&T's lat/lng
      lat: 37.954825,
      lng: -91.773491,
    },
    zoom: 17.5,
  };

  render() {
    return (
      <div className="Map">
        <Map
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.954825}
            lng={-91.773491}
            text={'Serving S&T since 8pm yesterday.'}
          />
        </Map>
      </div>
    );
  }
}
