import { Component } from 'aframe';

class CameraLimiter extends Component {
  constructor() {
    super();

    // Bind methods to the component instance
    this.bindMethods();
  }

  init() {
    // Get the camera entity
    const cameraEl = this.el;

    // Define the desired ranges for position and rotation
    const positionRange = { x: [-5, 5], y: [1, 10], z: [-5, 5] };
    const rotationRange = { x: [-45, 45], y: [-90, 90], z: [-45, 45] };

    this.el.addEventListener('componentchanged', event => {
      // Check if the position or rotation of the camera has changed
      if (event.detail.name === 'position' || event.detail.name === 'rotation') {
        const position = cameraEl.getAttribute('position');
        const rotation = cameraEl.getAttribute('rotation');

        // Check and adjust the camera position within the specified range
        Object.keys(position).forEach(axis => {
          if (position[axis] < positionRange[axis][0]) {
            position[axis] = positionRange[axis][0];
          } else if (position[axis] > positionRange[axis][1]) {
            position[axis] = positionRange[axis][1];
          }
        });

        // Check and adjust the camera rotation within the specified range
        Object.keys(rotation).forEach(axis => {
          if (rotation[axis] < rotationRange[axis][0]) {
            rotation[axis] = rotationRange[axis][0];
          } else if (rotation[axis] > rotationRange[axis][1]) {
            rotation[axis] = rotationRange[axis][1];
          }
        });

        // Update the camera position and rotation
        cameraEl.setAttribute('position', position);
        cameraEl.setAttribute('rotation', rotation);
      }
    });
  }

  bindMethods() {
    // ...
    // The rest of the method bindings go here
    // ...
  }
}

CameraLimiter.schema = {
  // ...
  // Define the schema for the component properties here
  // ...
};

export default CameraLimiter;