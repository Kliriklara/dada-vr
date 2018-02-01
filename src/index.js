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

const SOUNDS = [
  { title: 'Ah', file: './sound/ah.mp3', position: { x: -1, y: 0.5, z: -3 } },
  { title: 'Bee', file: './sound/bee.mp3', position: { x: -2, y: 0.5, z: -5 } },
  { title: 'Bra', file: './sound/bra.mp3', position: { x: 3, y: 0.5, z: 3 } },
  { title: 'Grey', file: './sound/grey.mp3', position: { x: 1, y: 0.5, z: 6 } },
  { title: 'Ole', file: './sound/ole.mp3', position: { x: 2, y: 0.5, z: 1 } },
  { title: 'Pa', file: './sound/pa.mp3', position: { x: -5, y: 0.5, z: -8 } },
  { title: 'Paw', file: './sound/paw.mp3', position: { x: -2, y: 0.5, z: 8 } },
  {
    title: 'Shah',
    file: './sound/shah.mp3',
    position: { x: -2, y: 0.5, z: 4 }
  },
  {
    title: 'Slaw',
    file: './sound/slaw.mp3',
    position: { x: -2.5, y: 0.5, z: 3.5 }
  },
  { title: 'Ta', file: './sound/ta.mp3', position: { x: 2.5, y: 0.5, z: 2 } },
  { title: 'Wa', file: './sound/wa.mp3', position: { x: 4, y: 0.5, z: 4 } }
];

/**
 * Initial A-Frame Scene.
 * {@inheritdoc}
 */
const InitialScene = () => (
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
      wasd-controls
      look-controls
      kinematic-body
      position="0 1.8 0"
    >
      <Entity
        cursor="timeout: 150"
        position="0 0 -2"
        geometry="primitive: ring"
        material="color: white; shader: flat"
        scale="0.1 0.1 0.1"
      />
    </Entity>

    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="-15 0 0"
      rotation={{ x: 0, y: 90, z: 0 }}
      color="tomato"
      depth="0.2"
      height="8"
      width="30"
      static-body
    />
    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="15 0 0"
      rotation={{ x: 0, y: 90, z: 0 }}
      color="tomato"
      depth="0.2"
      height="8"
      width="30"
      static-body
    />
    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="0 0 -15"
      color="tomato"
      depth="0.2"
      height="8"
      width="30"
      static-body
    />
    <Entity
      id="box"
      primitive="a-box"
      material="color: red"
      position="0 0 15"
      color="tomato"
      depth="0.2"
      height="8"
      width="30"
      static-body
    />

    {SOUNDS.map(sound => {
      return (
        <Box key={sound.title} file={sound.file} position={sound.position} />
      );
    })}

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
      height="300"
      width="300"
      static-body
    />
  </Scene>
);

// Render the InitialScene component in the scene container div.
ReactDOM.render(<InitialScene />, document.getElementById('root'));
