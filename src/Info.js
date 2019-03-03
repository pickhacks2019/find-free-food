import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    if (this.props.info === '') {
      return null;
    } else {
      console.log('hahahsd');
      return (
        <div
          style={{
            position: 'absolute',
            top: 15,
            left: 15,
            zIndex: 10,
            width: '30%',
            backgroundColor: 'lightgray',
            height: '30vh',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            margin: 'auto',
            flexDirection: 'column',
          }}
        >
          <div style={{ paddingBottom: 10 }}>
            Building: <strong>{this.props.info.building}</strong>
          </div>
          <div style={{ paddingBottom: 10 }}>
            Health Rating: <strong>{this.props.info.health}</strong>
          </div>
          <div>
            Time: <strong>{this.props.info.time}</strong>
          </div>
        </div>
      );
    }
  }
}
