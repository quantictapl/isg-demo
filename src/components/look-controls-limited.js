/* global DeviceOrientationEvent */
var registerComponent = require('../core/component').registerComponent;
var THREE = require('../lib/three');
var utils = require('../utils/');
var bind = utils.bind;

/**
 * look-controls-limited. Update entity pose, factoring mouse, touch, and WebVR API data.
 */
module.exports.Component = registerComponent('look-controls-limited', {
  dependencies: ['position', 'rotation'],

  schema: {
    enabled: { default: true },
    rotationLimit: { default: Math.PI / 8 } // Set the default rotation limit to pi/8
  },

  init: function () {
    this.pitchObject = new THREE.Object3D();
    this.yawObject = new THREE.Object3D();
    this.yawObject.position.y = 10;
    this.yawObject.add(this.pitchObject);

    this.bindMethods();
    this.previousMouseEvent = {};
    this.previousTouchEvent = {};
    this.setupEventListeners();

    // To save / restore camera pose
    this.savedPose = {
      position: new THREE.Vector3(),
      rotation: new THREE.Euler()
    };

    // Call enter VR handler if the scene has entered VR before the event listeners attached.
    if (this.el.sceneEl.is('vr-mode') || this.el.sceneEl.is('ar-mode')) { this.onEnterVR(); }
  },

  bindMethods: function () {
    this.onMouseMove = bind(this.onMouseMove, this);
    this.onTouchMove = bind(this.onTouchMove, this);
  },

  setupEventListeners: function () {
    var sceneEl = this.el.sceneEl;
    var canvasEl = sceneEl.canvas;

    // Wait for canvas to load.
    if (!canvasEl) {
      sceneEl.addEventListener('render-target-loaded', bind(this.setupEventListeners, this));
      return;
    }

    // Mouse events.
    window.addEventListener('mousemove', this.onMouseMove, false);

    // Touch events.
    window.addEventListener('touchmove', this.onTouchMove);
  },

  removeEventListeners: function () {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouchMove);
  },

  onMouseMove: function (evt) {
    var previousMouseEvent = this.previousMouseEvent;

    // Calculate delta.
    var movementX = evt.screenX - previousMouseEvent.screenX;
    var movementY = evt.screenY - previousMouseEvent.screenY;

    // Calculate rotation.
    var yawRotation = movementX * 0.002;
    var pitchRotation = movementY * 0.002;

    // Apply rotation limit.
    var rotationLimit = this.data.rotationLimit;
    if (rotationLimit !== 0) {
      var currentRotation = this.pitchObject.rotation.x + pitchRotation;
      var clampedRotation = THREE.MathUtils.clamp(currentRotation, -rotationLimit, rotationLimit);
      pitchRotation = clampedRotation - this.pitchObject.rotation.x;
    }

    // Apply rotation to objects.
    this.yawObject.rotation.y -= yawRotation;
    this.pitchObject.rotation.x += pitchRotation;

    previousMouseEvent.screenX = evt.screenX;
    previousMouseEvent.screenY = evt.screenY;
  },

  onTouchMove: function (evt) {
    var previousTouchEvent = this.previousTouchEvent;

    if (evt.touches.length !== 1) { return; }

    // Calculate delta.
    var movementX = evt.touches[0].pageX - previousTouchEvent.screenX;
    var movementY = evt.touches[0].pageY - previousTouchEvent.screenY;

    // Calculate rotation.
    var yawRotation = movementX * 0.002;
    var pitchRotation = movementY * 0.002;

    // Apply rotation limit.
    var rotationLimit = this.data.rotationLimit;
    if (rotationLimit !== 0) {
      var currentRotation = this.pitchObject.rotation.x + pitchRotation;
      var clampedRotation = THREE.MathUtils.clamp(currentRotation, -rotationLimit, rotationLimit);
      pitchRotation = clampedRotation - this.pitchObject.rotation.x;
    }

    // Apply rotation to objects.
    this.yawObject.rotation.y -= yawRotation;
    this.pitchObject.rotation.x += pitchRotation;

    previousTouchEvent.screenX = evt.touches[0].pageX;
    previousTouchEvent.screenY = evt.touches[0].pageY;
  },

  play: function () {
    this.addEventListeners();
  },

  pause: function () {
    this.removeEventListeners();
  },

  tick: function () {
    this.updateOrientation();
  },

  remove: function () {
    this.removeEventListeners();
  },

  updateOrientation: function () {
    var pose;

    if (!this.data.enabled || !this.el.sceneEl.is('vr-mode') || !this.el.sceneEl.hasWebXR) { return; }

    pose = this.el.sceneEl.frame.getViewerPose(this.el.sceneEl.renderer.xr.getReferenceSpace());
    if (pose) { this.updatePose(pose); }
  },

  updatePose: function (pose) {
    var el = this.el;
    var data = this.data;
    var pitchObject = this.pitchObject;
    var yawObject = this.yawObject;
    var position;
    var rotation;

    position = pose.transform.position;
    rotation = pose.transform.orientation;

    // If the camera is embedded in the scene, respect the rotation of the scene.
    if (el.sceneEl.is('vr-mode') && !el.sceneEl.isMobile) {
      if (!el.parentNode || el.parentNode.nodeName === 'BODY') { return; }
      var sceneRotation = el.parentNode.getComputedAttribute('rotation');
      yawObject.rotation.y += sceneRotation.y;
      pitchObject.rotation.x += sceneRotation.x;
    }

    // If we're dealing with an AR session, respect the fixed pose of the device.
    if (el.sceneEl.is('ar-mode')) {
      position = pose.transform.position;
      rotation = pose.transform.orientation;
    }

    // Save camera pose
    this.savedPose.position.copy(el.object3D.position);
    this.savedPose.rotation.copy(el.object3D.rotation);

    el.object3D.position.copy(position);
    el.object3D.quaternion.copy(rotation).multiply(this.yawObject.quaternion);

    el.object3D.updateMatrixWorld();
  }
});