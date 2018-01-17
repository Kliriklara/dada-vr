/**
 * @file index.js
 * Renders VR experience or Editor depending on REACT_APP_ENV value.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Scene, Entity } from 'aframe-react';
import Box from './box/box-component';

require('aframe');
const extras = require('aframe-extras');
// TODO only register needed packages
// atm kinetic-body and controls are used
extras.registerAll();
require('./index.css');

/**
 * Initial A-Frame Scene.
 * {@inheritdoc}
 */
const InitialScene = () =>
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

    {/* <!-- User / Camera --> */}
    <Entity
      id="player"
      camera
      universal-controls
      kinematic-body
      position="0 1.8 0"
    >
      <Entity
        cursor="timeout: 50"
        position="0 0 -2"
        geometry="primitive: ring"
        material="color: white; shader: flat"
        scale="0.2 0.2 0.1"
      />
    </Entity>

    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="-5 0 0"
      rotation={{ x: 0, y: 90, z: 0 }}
      color="tomato"
      depth="0.2"
      height="8"
      width="10"
      static-body
    />
    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="5 0 0"
      rotation={{ x: 0, y: 90, z: 0 }}
      color="tomato"
      depth="0.2"
      height="8"
      width="10"
      static-body
    />
    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="0 0 -5"
      color="tomato"
      depth="0.2"
      height="8"
      width="10"
      static-body
    />
    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="0 0 5"
      color="tomato"
      depth="0.2"
      height="8"
      width="10"
      static-body
    />
    <Box />

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
      static-body
    />
  </Scene>;

// Render the InitialScene component in the scene container div.
ReactDOM.render(<InitialScene />, document.getElementById('root'));
