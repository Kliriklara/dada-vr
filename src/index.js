/**
 * @file index.js
 * Renders VR experience or Editor depending on REACT_APP_ENV value.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Scene, Entity } from 'aframe-react';

require('aframe');
require('./index.css');

/**
 * Initial A-Frame Scene.
 * {@inheritdoc}
 */
class InitialScene extends Component {
  state = { color: '#4CC3D9' };

  updateColor() {
    this.setState({
      color: `#${Math.random().toString(16).slice(-6)}`
    });
  }

  render() {
    const { color } = this.state;
    return (
      <Scene
        inspector="url: https://aframe.io/releases/0.6.1/aframe-inspector.min.js"
        cursor="rayOrigin: mouse"
      >
        <a-assets>
          <img
            id="groundTexture"
            alt="ground texture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            alt="sky texture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>
        <Entity
          id="entity--box"
          primitive="a-box"
          position={{ x: -1, y: 0.5, z: -3 }}
          rotation={{ x: 0, y: 45, z: 0 }}
          color={color}
          events={{ click: () => this.updateColor() }}
        />
        <Entity
          id="entity--sphere"
          primitive="a-sphere"
          position={{ x: 0, y: 1.25, z: -5 }}
          radius={1.25}
          color="#EF2D5E"
        />
        <Entity
          id="entity--cylinder"
          primitive="a-cylinder"
          position={{ x: 1, y: 0.75, z: -3 }}
          radius={0.5}
          width={4}
          height={1.5}
          color="#FFC65D"
        />
        <Entity
          id="entity--plane"
          primitive="a-plane"
          position={{ x: 0, y: 0, z: -4 }}
          rotation={{ x: -90, y: 0, z: 0 }}
          width={4}
          height={4}
          color="#7BC8A4"
        />

        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
          segments-height="5"
          segments-width="8"
        />
        <Entity
          primitive="a-plane"
          color="#4286f4"
          src="#groundTexture"
          rotation="-90 0 0"
          position="0 -0.01 0"
          height="100"
          width="100"
        />
      </Scene>
    );
  }
}

// Render the InitialScene component in the scene container div.
ReactDOM.render(<InitialScene />, document.getElementById('root'));
