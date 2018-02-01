import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Entity } from 'aframe-react';

require('aframe');

class BoxComponent extends Component {
  state = { color: '#4CC3D9' };

  updateColor() {
    this.setState({
      color: `#${Math.random()
        .toString(16)
        .slice(-6)}`
    });

    const x = 0;
    const y = 5;
    const z = -15;

    this.box.el.body.applyImpulse(
      /* impulse */ new window.CANNON.Vec3(x, y, z),
      /* world position */ new window.CANNON.Vec3().copy(
        this.box.el.getComputedAttribute('position')
      )
    );

    this.sound.components.sound.playSound();
  }

  render() {
    const { file, position } = this.props;
    const { color } = this.state;

    return (
      <Entity
        ref={element => {
          this.box = element;
        }}
        id="entity--box"
        primitive="a-box"
        dynamic-body="shape: hull"
        position={position}
        rotation={{ x: 0, y: 45, z: 0 }}
        color={color}
        events={{ click: () => this.updateColor() }}
      >
        <a-sound
          ref={element => {
            this.sound = element;
          }}
          src={file}
          maxDistance="500"
        />
      </Entity>
    );
  }
}

BoxComponent.propTypes = {
  file: PropTypes.string,
  position: PropTypes.object
};

export default BoxComponent;
