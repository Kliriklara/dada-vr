import React, { Component } from 'react';
import { Entity } from 'aframe-react';

require('aframe');

class BoxComponent extends Component {
  state = { color: '#4CC3D9' };

  updateColor() {
    this.setState({
      color: `#${Math.random().toString(16).slice(-6)}`
    });
  }

  render() {
    const { color } = this.state;
    return (
      <Entity
        id="entity--box"
        primitive="a-box"
        position={{ x: -1, y: 0.5, z: -3 }}
        rotation={{ x: 0, y: 45, z: 0 }}
        color={color}
        events={{ click: () => this.updateColor() }}
      />
    );
  }
}

export default BoxComponent;
