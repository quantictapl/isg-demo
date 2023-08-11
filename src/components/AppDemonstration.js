// import React, { useEffect, useRef, useState } from "react";
// import { Entity, Scene } from "aframe-react";
// import "aframe-extras";
// import * as THREE from "three";
// import { resetUserSession } from "../service/AuthService";
// import { useNavigate } from "react-router-dom";
// import HideVRButton from "./HideVRButton";
// import smartmerchant from "../WithTable.jpg";
// // import "./componentcss/SmartMerchant.css";
// import "aframe-event-set-component";
// import esy from "../SmartMerchantAssets/Esy.glb";
// import tvImg from "../SmartMerchantAssets/tvBorder.png";
// // import paymentMethod from "../SmartMerchantAssets/paymentmethod/PaymentMethod.glb";
// import appLoading1 from "../SmartMerchantAssets/apploading/apploading1.glb";
// import appLoading2 from "../SmartMerchantAssets/apploading/apploadingtwo.glb";
// import appLoading3 from "../SmartMerchantAssets/apploading/apploadingthree.glb";
// import appLoading4 from "../SmartMerchantAssets/apploading/apploading4.glb";
// import appimg1 from "../SmartMerchantAssets/apploading/appimages/1.png";
// import appimg2 from "../SmartMerchantAssets/apploading/appimages/2.png";
// import appimg3 from "../SmartMerchantAssets/apploading/appimages/3.png";
// import appimg4 from "../SmartMerchantAssets/apploading/appimages/4.png";
// import buttonvideo from "../videos/circle.mp4";
// import AFRAME from "aframe";
// import demoAudio1 from "../SmartMerchantAssets/videos/videoplayback.mp4";
// import demoAudio from "../SmartMerchantAssets/videos/demoSpeech1.webm";
// import demoTransparent from "../SmartMerchantAssets/videos/dialog2.webm";
// import demoTransparent2 from "../SmartMerchantAssets/videos/dialog1.webm";
// import "./componentcss/AppDemonstration.css";
// import appintro1 from "../SmartMerchantAssets/appintro/appintroimages/1.jpg"
// import appintro2 from "../SmartMerchantAssets/appintro/appintroimages/2.jpg"
// import appintro3 from "../SmartMerchantAssets/appintro/appintroimages/3.jpg"
// import appintro4 from "../SmartMerchantAssets/appintro/appintroimages/4.jpg"
// import appintro5 from "../SmartMerchantAssets/appintro/appintroimages/5.jpg"
// import appintroasset1 from "../SmartMerchantAssets/appintro/appintro1.glb";
// import appintroasset2 from "../SmartMerchantAssets/appintro/appintro2.glb";
// import appintroasset3 from "../SmartMerchantAssets/appintro/appintro3.glb";
// import appintroasset4 from "../SmartMerchantAssets/appintro/appintro4.glb";
// import appintroasset5 from "../SmartMerchantAssets/appintro/appintro5.glb";
// import userreg1 from "../SmartMerchantAssets/userreg/userreg1.glb";
// import userreg2 from "../SmartMerchantAssets/userreg/userreg2.glb";
// import userreg3 from "../SmartMerchantAssets/userreg/userreg3.glb";
// import userregimg1 from "../SmartMerchantAssets/userreg/UserRegImages/1.png";
// import userregimg2 from "../SmartMerchantAssets/userreg/UserRegImages/2.png";
// import userregimg3 from "../SmartMerchantAssets/userreg/UserRegImages/3.png";

// // import "./look-controls-limited"
// import { registerComponent } from "aframe";
// registerComponent("looklimited", {
//   schema: {
//     maxYaw: { default: 10 }, // Adjust this value to set the maximum yaw range
//   },

//   init: function () {
//     this.yawRange = THREE.MathUtils.degToRad(this.data.maxYaw);
//     this.bindMethods();
//   },

//   bindMethods: function () {
//     this.onLookMove = this.onLookMove.bind(this);
//     this.onMouseDown = this.onMouseDown.bind(this);
//   },

//   play: function () {
//     this.addEventListeners();
//   },

//   pause: function () {
//     this.removeEventListeners();
//   },

//   addEventListeners: function () {
//     this.el.addEventListener("thumbstickmoved", this.onLookMove);
//     this.el.addEventListener("touchmove", this.onLookMove);
//     this.el.addEventListener("mousemove", this.onLookMove);
//     this.el.addEventListener("mousedown", this.onMouseDown);
//   },

//   removeEventListeners: function () {
//     this.el.removeEventListener("thumbstickmoved", this.onLookMove);
//     this.el.removeEventListener("touchmove", this.onLookMove);
//     this.el.removeEventListener("mousemove", this.onLookMove);
//     this.el.removeEventListener("mousedown", this.onMouseDown);
//   },

//   onLookMove: function (event) {
//     var rotation = this.el.object3D.rotation;

//     if (Math.abs(rotation.y) >= this.yawRange) {
//       // Reset rotation if it exceeds the maximum yaw range
//       rotation.y = Math.sign(rotation.y) * this.yawRange;
//     }
//   },

//   onMouseDown: function (event) {
//     // Prevent default mouse down behavior to avoid interference
//     event.preventDefault();
//   },
// });
// var assetJson = {
//   apploading:{
//     phoneImages: [
//       {
//         name: "appimg1",
//         imagePath: appimg1,
//         buttonPosition: {x: 0.642,y: -0.15784,},
//       },
//       {
//         name: "appimg2",
//         imagePath: appimg2,
//         buttonPosition: {x: 0.642,y: 0.024,},
//       },
//       {
//         name: "appimg3",
//         imagePath: appimg3,
//         buttonPosition: {x: 0.642,y: 0.024,},
//       },
//       {
//         name: "appimg4",
//         imagePath: appimg4,
//         buttonPosition: {x: 0.664,y: -0.261,},
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "apploading1",
//         imagePath: appLoading1,
//         animation: "",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent,
//           audio: demoAudio1,
//         },
//       },
//       {
//         name: "apploading2",
//         imagePath: appLoading2,
//         animation: "Animation",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent2,
//           audio: demoAudio,
//         },
//       },
//       {
//         name: "apploading3",
//         imagePath: appLoading3,
//         animation: "",
//         scale:{x: 2.813,y:2.813,z:2.813},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent,
//           audio: demoAudio1,
//         },
//       },
//       {
//         name: "apploading4",
//         imagePath: appLoading4,
//         animation: "",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent2,
//           audio: demoAudio,
//         },
//       },
//     ],
//   },
//   appintro:{
//     phoneImages: [
//       {
//         name: "appintro1",
//         imagePath: appintro1,
//         buttonPosition: {x: 0.58124,y: -0.22324,},
//       },
//       {
//         name: "appintro2",
//         imagePath: appintro2,
//         buttonPosition: {x: 0.635,y: -0.294,},
//       },
//       {
//         name: "appintro3",
//         imagePath: appintro3,
//         buttonPosition: {x: 0.692,y: -0.043,},
//       },
//       {
//         name: "appintro4",
//         imagePath: appintro4,
//         buttonPosition: {x: 0.635,y: -0.294,},
//       },
//       {
//         name: "appintro5",
//         imagePath: appintro5,
//         buttonPosition: {x: 0.690,y: -0.143,},
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "appintroasset1",
//         imagePath: appintroasset1,
//         animation: "",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent,
//           audio: demoAudio1,
//         },
//       },
//       {
//         name: "appintroasset2",
//         imagePath: appintroasset2,
//         animation: "",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent2,
//           audio: demoAudio,
//         },
//       },
//       {
//         name: "appintroasset3",
//         imagePath: appintroasset3,
//         animation: "",
//         scale:{x: 0.034,y: 0.034,z:0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent,
//           audio: demoAudio1,
//         },
//       },
//       {
//         name: "appintroasset4",
//         imagePath: appintroasset4,
//         animation: "",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent2,
//           audio: demoAudio,
//         },
//       },
//       {
//         name: "appintroasset5",
//         imagePath: appintroasset5,
//         animation: "Animation",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent,
//           audio: demoAudio1,
//         },
//       },
//     ],
//   },
//   userreg:{
//     phoneImages: [
//       {
//         name: "userregimg1",
//         imagePath: userregimg1,
//         buttonPosition: {x: 0.662,y: -0.285,},
//       },
//       {
//         name: "userregimg2",
//         imagePath: userregimg2,
//         buttonPosition: {x: 0.642,y: 0.024,},
//       },
//       {
//         name: "userregimg3",
//         imagePath: userregimg3,
//         buttonPosition: {x: 0.603,y: -0.289,},
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "userreg1",
//         imagePath: userreg1,
//         animation: "",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent,
//           audio: demoAudio1,
//         },
//       },
//       {
//         name: "userreg2",
//         imagePath: userreg2,
//         animation: "Animation",
//         scale:{x: 0.034,y: 0.034,z: 0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent2,
//           audio: demoAudio,
//         },
//       },
//       {
//         name: "userreg3",
//         imagePath: userreg3,
//         animation: "",
//         scale:{x: 0.034,y:0.034,z:0.034},
//         position: {x: -0.97307,y: -3.08774,z: -3.43762},
//         rotation: {x: -61.526499872328316,y: -169.76051920372137,z: -0.8416750010471793},
//         subsVideo: {
//           videoElement: demoTransparent,
//           audio: demoAudio1,
//         },
//       },
//     ],
//   }

// };

// // registerComponent('look-controls-limited', 'look-controls-limited');

// function AppDemonstration() {
//   const cameraRef = useRef(null);
//   const cameraRotationRef = useRef(null);
//   const sceneRef = useRef(null);
//   const subsVideoRef = useRef(null);
//   const skipBtnRef=useRef(null)
//   const [zoom, setZoom] = useState(1.5);
//   const navigate = useNavigate();
//   const [skipState, setSkipState] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [videoVisible, setVideoVisible] = useState(false);
//   const subsAudioRef = useRef(null);
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
//   const [pageLoaded, setPageLoaded] = useState(false);
//   const [mute, setMute] = useState(true);
//   const [animationClicked, setAnimationClicked] = useState(false);
//   const [currentPhoneAssetIndex, setCurrentPhoneAssetIndex] = useState(0);
//   const [currentPhoneImageIndex, setCurrentPhoneImageIndex] = useState(0);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [audioDuration, setAudioDuration] = useState(0);
//   const [currentDivision, setCurrentDivision] = useState("apploading");

//   useEffect(() => {
//     // Simulating page load after 3 seconds
//     const timer = setTimeout(() => {
//       setPageLoaded(true);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     const videos = document.getElementsByTagName("video");
//     const button = document.getElementById("buttonvideo");
//     button.muted = true;
//     for (let i = 0; i < videos.length; i++) {
//       const video = videos[i];
//       // Do something with each div element
//       video.play();
//     }
//     button.play();
//   }, []);
//   useEffect(() => {
//     const handleClick = (event) => {
//       // Handle the click event
//       setMute(false);
//     };

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);
//   // const video=subsVideoRef.current
//   // console.log(video.duration)
//   const currentPhoneAsset =assetJson[currentDivision].phoneAssets[currentPhoneAssetIndex];
//   const currentPhoneImage =assetJson[currentDivision].phoneImages[currentPhoneImageIndex];

//   // console.log(currentPhoneAsset);

//   useEffect(() => {
//     const video = subsVideoRef.current;
//     const audio = subsAudioRef.current;

//     const esy = document.getElementById("esy");
//     if (!mute) {
//       audio.muted = false;
//     }
//     if (mute) {
//       audio.muted = true;
//     }

//     const handleVideoPlay = () => {
//       esy.setAttribute(
//         "animation-mixer",
//         "clip:;loop:repeat;repetitions:Infinity;"
//       );
//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else if (!mute) {
//         audio.play();
//         audio.muted = false;
//       }
//     };

//     const handleVideoPause = () => {
//       if (!video.paused && !audio.paused) {
//         audio.pause();
//         esy.removeAttribute("animation-mixer");
//       }
//     };

//     const handleAudioLoadedMetadata = () => {
//       // Handle loaded metadata for the subsAudio element
//       if (!mute) {
//         audio.play();
//       }
//       const duration = audio.duration;
//       console.log("Audio duration:", duration);
//     };
//     const handleVideoEnded = () => {
//       esy.removeAttribute("animation-mixer");
//       audio.pause();
//     };

//     video.addEventListener("play", handleVideoPlay);
//     video.addEventListener("pause", handleVideoPause);
//     audio.addEventListener("loadedmetadata", handleAudioLoadedMetadata);
//     video.addEventListener("loadedmetadata", handleAudioLoadedMetadata); // Added event listener to subsVideoRef as well
//     video.addEventListener("ended", handleVideoEnded);
//     return () => {
//       video.removeEventListener("play", handleVideoPlay);
//       video.removeEventListener("pause", handleVideoPause);
//       audio.removeEventListener("loadedmetadata", handleAudioLoadedMetadata);
//       video.removeEventListener("loadedmetadata", handleAudioLoadedMetadata); // Removed event listener for subsVideoRef
//     };
//   }, [subsVideoRef, subsAudioRef, mute]);

//   useEffect(() => {
//     const video = subsVideoRef.current;
//     const audio = subsAudioRef.current;
//     const skipBtn = skipBtnRef.current;
//     const buttonEntity = document.querySelector("#animation-button");

//     video.addEventListener("loadedmetadata", () => {
//       setVideoDuration(video.duration);
//     });

//     const handleVideoEnded = () => {
//       buttonEntity.setAttribute("visible", "true");
//     };

//     const handleVideoPlay = () => {
//       buttonEntity.setAttribute("visible", "false");

//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else {
//         audio.play();
//       }
//     };

//     const handleVideoPause = () => {
//       if (!video.paused && !audio.paused) {
//         audio.pause();
//       }
//     };

//     video.addEventListener("ended", handleVideoEnded);
//     video.addEventListener("play", handleVideoPlay);
//     video.addEventListener("pause", handleVideoPause);
// const handleSkipClick = () => {
//   buttonEntity.setAttribute("visible", "false");
//   buttonEntity.removeEventListener("click", handleClick);

//   const divisions = Object.keys(assetJson);
//   const currentDivisionIndex = divisions.indexOf(currentDivision);
//   const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//   const nextDivision = divisions[nextDivisionIndex];

//   setCurrentDivision(nextDivision);
//   setCurrentPhoneAssetIndex(0); // Reset the asset index
//   setCurrentPhoneImageIndex(0); // Reset the image index

//   const currentAssets = assetJson[nextDivision];
//   const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
//   const currentPhoneImagesLength = currentAssets.phoneImages.length;
//   const cacheBuster = new Date().getTime();

//   const loadNextAssets = () => {
//     const videoSrc = currentAssets.phoneAssets[0].video;
//     const audioSrc = currentAssets.phoneAssets[0].audio;
//     video.src = videoSrc + "?cache=" + cacheBuster;

//     video.addEventListener("loadedmetadata", () => {
//       video.play();
//       // setExtrasVisible(false)
//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else {
//         audio.play();
//       }
//     });
//   };

//   const handleTransition = () => {
//     setCurrentPhoneAssetIndex(0);
//     setCurrentPhoneImageIndex(0);
//     setAnimationClicked(false);
//     buttonEntity.addEventListener("click", handleClick);
//     console.log('Event listener added');
//     buttonEntity.removeEventListener("click", handleClick);
//     console.log('Event listener removed');
//     buttonEntity.setAttribute("visible", "true");
//     if(currentDivision==="rtpmethod"||currentDivision==="refundprocess"){
//       // arrowEntity.setAttribute("visible",true);
//       setExtrasVisible(true)
//     }
//   };

//   setTimeout(() => {
//     loadNextAssets();
//     setTimeout(handleTransition, 2500);
//   }, 2500);
// };
//     skipBtn.addEventListener('click',handleSkipClick)
//  Updated handleClick mentioned here
//    const handleClick = () => {
//   buttonEntity.setAttribute("visible", "false");
//   buttonEntity.removeEventListener("click", handleClick);

//   if (pageLoaded) {
//     const phoneAsset = document.querySelector("#phone-asset");
//     if (phoneAsset) {
//       console.log(phoneAsset.getAttribute("animation-mixer"));
//       setAnimationClicked(true);
//     } else {
//       setAnimationClicked(false);
//     }
//   } else {
//     setAnimationClicked(false);
//   }

//   const divisions = Object.keys(assetJson);
//   const currentDivisionIndex = divisions.indexOf(currentDivision);
//   const currentAssets = assetJson[currentDivision];
//   const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
//   const currentPhoneImagesLength = currentAssets.phoneImages.length;
//   let nextPhoneAssetIndex = (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//   let nextPhoneImageIndex = (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
//   const cacheBuster = new Date().getTime();

//   const loadNextAssets = () => {
//     const nextVideoIndex = (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//     const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
//     const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
//     video.src = videoSrc + "?cache=" + cacheBuster;

//     video.addEventListener("loadedmetadata", () => {
//       video.play();

//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else {
//         audio.play();
//       }
//     });
//   };

//   const handleTransition = () => {
//     setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
//     setCurrentPhoneImageIndex(nextPhoneImageIndex);
//     setAnimationClicked(false);
//     buttonEntity.addEventListener("click", handleClick);
//     buttonEntity.removeEventListener("click", handleClick);
//     buttonEntity.setAttribute("visible", "true");
//   };

//   // Check if all assets in the current division are loaded
//   if (nextPhoneAssetIndex !== 0) {
//     loadNextAssets();

//     setTimeout(handleTransition, 2500);
//   } else {
//     const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//     const nextDivision = divisions[nextDivisionIndex];

//     setTimeout(() => {
//       setCurrentDivision(nextDivision);
//       setCurrentPhoneAssetIndex(0); // Reset the asset index
//       setCurrentPhoneImageIndex(0); // Reset the image index

//       loadNextAssets();
//       setTimeout(handleTransition, 2500);
//     }, 2500);
//   }
// };

//     // Remove the existing event listener before adding a new one
//     buttonEntity.removeEventListener("click", handleClick);
//     buttonEntity.addEventListener("click", handleClick);

//     return () => {
//       video.removeEventListener("loadedmetadata", () => {
//         setVideoDuration(video.duration);
//       });
//       video.removeEventListener("ended", handleVideoEnded);
//       video.removeEventListener("play", handleVideoPlay);
//       video.removeEventListener("pause", handleVideoPause);

//       buttonEntity.removeEventListener("click", handleClick);
//     };
//   }, [pageLoaded,currentPhoneAssetIndex, currentDivision, currentPhoneImageIndex]);
//   // Hide the animation button initially

//   useEffect(() => {
//     const buttonEntity = document.querySelector("#animation-button");
//     buttonEntity.setAttribute("visible", "false");
//   }, []);
//   // Set the visibility attribute of the animation button based on the state
//   // const buttonVisibilityAttribute = currentPhoneAssetIndex === 0 ? "true" : "false";

//   // const handleLoadedMetadata = () => {
//   //   const video = subsVideoRef.current;
//   //   const audio=subsAudioRef.current
//   //   if (!video || !audio) return;
//   //   setVideoDuration(video.duration);
//   //   setAudioDuration(audio.duration);
//   // };
//   // console.log(videoDuration);

//   // useEffect(() => {
//   //   if (videoRef.current) {
//   //     videoRef.current.muted = true;
//   //   }
//   // }, []);

//   const handleLobbyClick = (event) => {
//     event.stopPropagation();
//     navigate("/panorama");
//     console.log("panorama button clicked"); // Replace "/your-route" with the desired path
//   };

//   // const [currentEntityIndex, setCurrentEntityIndex] = useState(0);
//   // const entityNames = Object.keys(entityVisibility);

//   const handleZoom = (event) => {
//     const newZoom = zoom + event.deltaY * -0.01;
//     if (newZoom >= 1 && newZoom <= 5) {
//       setZoom(newZoom);
//     }
//   };

//   const logoutHandler = () => {
//     resetUserSession();
//     navigate("/login");
//   };
//   useEffect(() => {
//     window.addEventListener("wheel", handleZoom);
//     return () => window.removeEventListener("wheel", handleZoom);
//   });
//   useEffect(() => {
//     const camera = document.getElementById("camera");
//     const logCameraRotation = () => {
//       if (cameraRef.current && cameraRef.current.object3D) {
//         const rotation = camera.object3D.rotation;
//         const { x, y, z } = rotation;

//         // Apply the restriction for x-axis rotation between 0.034 and 0.044
//         if (x < 0.034) {
//           rotation.x = 0.034;
//         } else if (x > 0.044) {
//           rotation.x = 0.044;
//         }

//         cameraRef.current.object3D.rotation.copy(rotation);
//       }
//     };

//     const interval = setInterval(logCameraRotation, 100); // Adjust the interval duration as needed

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);
//   // useEffect(() => {
//   //   const phoneAsset = document.getElementById("phone-asset");
//   //   if (animationClicked) {
//   //     phoneAsset.setAttribute("animation-mixer", {
//   //       clip: currentPhoneAsset.animation,
//   //       loop: "repeat",
//   //       repetitions: Infinity,
//   //       crossFadeDuration: 0.3,
//   //     });
//   //   } else {
//   //     phoneAsset.removeAttribute("animation-mixer");
//   //   }
//   // }, [currentPhoneAsset, animationClicked]);
//   // console.log(animationClicked);
//   // const handleAnimationClick = () => {
//   //   setAnimationClicked(!animationClicked);

//   //   // Change assets after 5 seconds
//   //   setTimeout(() => {
//   //     setCurrentPhoneAssetIndex((prevIndex) => {
//   //       const nextIndex = (prevIndex + 1) % assetJson.phoneAssets.length;
//   //       return nextIndex;
//   //     });

//   //     setCurrentPhoneImageIndex((prevIndex) => {
//   //       const nextIndex = (prevIndex + 1) % assetJson.phoneImages.length;
//   //       return nextIndex;
//   //     });

//   //     // Enable animation
//   //     if (pageLoaded) {
//   //       const phoneAsset = document.querySelector('#phone-asset');
//   //       if (phoneAsset) {
//   //         phoneAsset.setAttribute('animation-mixer', {
//   //           clip: currentPhoneAsset.animation,
//   //           loop: 'repeat',
//   //           repetitions: Infinity,
//   //         });
//   //       }
//   //     }
//   //   }, 2500); // Wait for 5 seconds before changing assets and enabling animation

//   //   console.log(currentPhoneAsset.animation, pageLoaded);
//   //};
//   // console.log(mute);
//   return (
//     <div className="scene-container" onClick={() => setMute(false)}>
//       <video
//         src={currentPhoneAsset.subsVideo.audio}
//         ref={subsAudioRef}
//         controls={false}
//         preload="auto"
//         className="demo-subs subs-audio audio-element"
//       />
//       {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
//       <div className="demo-subs-container">
//       <button  className="next-video-btn" ref={skipBtnRef}>Next</button>
//         <div className="demo-subs-main-container">
//           <video
//             id="subsVideo"
//             ref={subsVideoRef}
//             src={currentPhoneAsset.subsVideo.videoElement}
//             // onLoadedMetadata={handleLoadedMetadata}
//             type="video/webm"
//             muted
//             controls={false}
//             preload="auto"
//             className="demo-subs"
//           />
//           <div className="next-button-container"></div>
//         </div>
//         {/* <video
//           src={currentPhoneAsset.subsVideo.audio}
//           ref={subsAudioRef}
//           type="video/webm"
//           controls={false}
//           preload="auto"
//           className="demo-subs subs-audio"
//         /> */}
//       </div>
//       <Scene
//         inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
//         cursor="rayOrigin: mouse"
//         // raycaster="objects: [data-clickable]; far: 100"
//         onWheel={handleZoom}
//         wasd-controls="false"
//         className="scene"
//         ref={sceneRef}
//         vr-mode-ui={{ enabled: true }}
//         // onEnterVR={handleEnterVR}
//         renderer={"antialias: true; physicallyCorrectLights: true; "}
//         embedded={true}
//       >
//         <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef}>
//           <Entity
//             id="camera"
//             wasd-controls-enabled="false"
//             primitive="a-camera"
//             ref={cameraRef}
//             position="0 0 0"
//             zoom={zoom}
//             near="0.05"
//             far="10000"
//             camera="active:true"
//             // look-controls
//             // looklimited
//           >
//             {/* <a-entity
//           gltf-model={paymentMethod}
//           scale="0.5 0.5 0.5"
//           rotation="-68.85348415646128 -169.53248200125927 -12.258432026823963"
//           position="-0.1445 -1.86661 -2.86936"
//           // shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}
//             <a-entity
//               id="phone-asset"
//               gltf-model={currentPhoneAsset.imagePath}
//               scale={`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`}
//               position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
//               rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
//               // shadow="cast:true;"
//               {...(animationClicked && {
//                 "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;`,
//               })}
//               // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
//             />
//             {/*no inspector because of img*/}
//             <a-entity
//               id="phone-img"
//               material={`shader: flat;  alphaTest:0.5; src:${currentPhoneImage.imagePath};   transparent: true;`}
//               geometry="primitive: plane; width: 2; height: 3.8"
//               position="0.65229 -0.006 -0.98319"
//               rotation="3.5844239663384303 -4.396305162038807 0.6852575229764646"
//               scale="0.2 0.2 0.2"
//             ></a-entity>
//             <a-entity
//               id="animation-button"
//               material="shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:#buttonvideo;"
//               geometry="primitive: circle; radius: 0.2; theta-length: 360"
//               position={`${currentPhoneImage.buttonPosition.x} ${currentPhoneImage.buttonPosition.y} -0.86971`}
//               rotation="0 0 0"
//               scale="-0.2 0.2 0.2"
//               // visible={buttonVisibilityAttribute}
//               // onClick={handleAnimationClick}
//               event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
//               event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
//               raycaster="objects: [gui-interactable]"
//             ></a-entity>

//             {/* Just for Position and rotation testing */}
//             {/* <a-entity id="phone-img" material={`shader: flat;  alphaTest:0.5;   transparent: true;`} geometry="primitive: plane; width: 2; height: 3.8" position="0.65229 -0.006 -0.98319" rotation="3.5844239663384303 -4.396305162038807 0.6852575229764646" scale="0.2 0.2 0.2"></a-entity>
//          <a-entity
//          material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
//          geometry="primitive: circle; radius: 0.2; theta-length: 360"
//           position={`0.642 -0.15784 -0.86971`}
//           rotation="0 0 0"
//           scale="-0.2 0.2 0.2"
//           onClick={handleAnimationClick}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
//           raycaster="objects: [gui-interactable]"
//         ></a-entity> */}

//             {/* <a-entity gltf-model="/static/media/apploading1.a488ca6605b75d157548.glb" scale="0.034 0.034 0.034" rotation="-68.60367455778425 -172.40758421722575 -9.044711753935175" position="-0.40232 -2.49204 -4.23453" animation-mixer="clip: Animation"></a-entity> */}
//             <a-entity
//               cursor="fuse: false;"
//               id="cursor-btn"
//               // position={`${cursorPosition.x} ${cursorPosition.y} -1 `}
//               // position=" 0 0 -1"
//               geometry="primitive: ring; radiusInner: 0.0001; radiusOuter: 0.0002"
//               // animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
//               // animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
//               // animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
//               material="color: black; shader: flat"
//               raycaster="objects: [gui-interactable]; near:1 far:20;"
//               // onClick={handleMerchantClick}
//             ></a-entity>
//           </Entity>
//         </a-entity>

//         <a-assets>
//           <img id="tv-border" src={tvImg} alt="" />

//           {/* {console.log("currentPhoneImage.name:", currentPhoneImage.name)}
//           {console.log(
//             "currentPhoneImage.imagePath:",
//             currentPhoneImage.imagePath
//           )} */}
//           <video
//             className="videos"
//             id="buttonvideo"
//             preload="auto"
//             src={buttonvideo}
//             width="1920"
//             height="1080"
//             autoplay="true"
//             loop="true"
//             crossOrigin="anonymous"
//             playsInline=""
//             webkit-playsinline=""
//           ></video>

//           {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}

//           <img id="smartm" src={smartmerchant} alt="" />
//         </a-assets>

//         {/* <a-entity gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="-1.0364806513916591 -177.40205731738115 0.2859059397702808" position="-0.07352 -2.84768 0.05947" animation-mixer="clip: Animation"></a-entity> */}
//         {/* <a-entity position="-0.14076 -3.07192 0.82356" gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="10.3 2500000000001 138.48389908311995 -10.957817831876994" animation-mixer="clip: Animation"></a-entity> */}
//         {/* <a-entity sound="src:#isyintro" autoplay="true" volume="2"></a-entity> */}
//         {/* <a-sound src={isyintro} autoplay="true"></a-sound> */}
//         {/* <a-entity id="river" geometry="primitive: plane" material="color: blue"
//           position="-10 0 0" sound="src: url(river.mp3); autoplay: true"></a-entity> */}
//         {/* <a-entity
//           gltf-model={sandclock}
//           position="1.8 0 -2"
//           scale="0.5 0.5 0.5"
//           rotation="10.325 -34.608 -10.958."
//           shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}
//         <Entity primitive="a-sky" src={smartmerchant} rotation="0 -130 0" />
//         <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
//         <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
//         {/* <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity> */}
//         <a-entity
//           id="directional"
//           light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
//         ></a-entity>
//         <a-entity
//           id="spot1"
//           light="type: spot; castShadow: true; intensity: 2.5; distance: 15; color: white; angle: 60.16"
//           position="6.26958 3.91449 64.86643"
//           rotation="49.99973494988642 -156.67244428954794 20.000237754631645"
//         ></a-entity>
//         <a-entity
//           light="color: #ffffff; decay: 0; distance: 15.8; intensity: 4; type: spot"
//           id="spot-light"
//           position="-2.52809 0.72938 2"
//         ></a-entity>
//         <a-entity
//           id="spot2"
//           light="type: spot; castShadow: true; intensity: 3.8; decay: 0; distance: 15; color: white; angle: 60.16"
//           position="-3.47559 2.02332 -3.3246"
//         ></a-entity>
//         <a-entity
//           id="spot3"
//           light="type: spot; castShadow: true; intensity: 3.4; decay: 0; distance: 15; color: white; angle: 60.16"
//           position="3.47559 2.02332 -6.3246"
//         ></a-entity>

//         {/* <a-entity
//           gltf-model={paymentMethod}
//           position="1.8 0 -2"
//           scale="0.5 0.5 0.5"
//           rotation="10.325 -34.608 -10.958."
//           // shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}

//         <a-entity
//           gltf-model={esy}
//           id="esy"
//           position="-1 -6 -12"
//           scale="0.18 0.18 0.18"
//           rotation="0 1  0"
//           shadow="cast:true; receive:false;"
//           // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
//         />

//         <a-entity
//           //SmartMerchantDoor
//           id="#smartgate"
//           material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
//           geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
//           position="-99.08677 -20.10092 122.78598"
//           rotation="0 -212.78 0"
//           scale="2.65625 2.65625 2.65625"
//           onClick={handleLobbyClick}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0"
//         ></a-entity>

//         <a-light light="type: ambient"></a-light>
//         <button className="logout" onClick={logoutHandler}>
//           Logout
//         </button>
//       </Scene>
//     </div>
//   );
// }

// export default AppDemonstration;

import React, { useEffect, useRef, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from "three";
import { resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import HideVRButton from "./HideVRButton";
import smartmerchant from "../WithTable.jpg";
// import "./componentcss/SmartMerchant.css";
import "aframe-event-set-component";
import esy from "../SmartMerchantAssets/Esy.glb";
import tvImg from "../SmartMerchantAssets/tvBorder.png";
// import paymentMethod from "../SmartMerchantAssets/paymentmethod/PaymentMethod.glb";
import appLoading1 from "../SmartMerchantAssets/apploading/apploading1.glb";
import appLoading2 from "../SmartMerchantAssets/apploading/apploadingtwo.glb";
import appLoading3 from "../SmartMerchantAssets/apploading/apploadingthree.glb";
import appLoading4 from "../SmartMerchantAssets/apploading/apploading4.glb";
import appimg1 from "../SmartMerchantAssets/apploading/appimages/1.png";
import appimg2 from "../SmartMerchantAssets/apploading/appimages/2.png";
import appimg3 from "../SmartMerchantAssets/apploading/appimages/3.png";
import appimg4 from "../SmartMerchantAssets/apploading/appimages/4.png";
import qrdialog from "../SmartMerchantAssets/videos/Dialogs/qrdialog.webm";
import qrAudio from "../SmartMerchantAssets/videos/Dialogs/qrAudio.mp4";
import buttonvideo from "../videos/circle1.mp4";
import AFRAME from "aframe";
import demoAudio1 from "../SmartMerchantAssets/videos/videoplayback.mp4";
import demoAudio from "../SmartMerchantAssets/videos/demoSpeech1.webm";
import demoTransparent from "../SmartMerchantAssets/videos/dialog2.webm";
import demoTransparent2 from "../SmartMerchantAssets/videos/dialog1.webm";
import appLoading2Dialog from "../SmartMerchantAssets/videos/Dialogs/Apploading2Dialog.webm";
import appLoading2Audio from "../SmartMerchantAssets/videos/Dialogs/apploading2Audio.mp4";
import appLoading3Dialog from "../SmartMerchantAssets/videos/Dialogs/Apploading3Dialog.webm";
import appLoading3Audio from "../SmartMerchantAssets/videos/Dialogs/apploading3Audio.mp4";
import appIntro1Dialog from "../SmartMerchantAssets/videos/Dialogs/AppIntro1Dialog.webm";
import appIntro1Audio from "../SmartMerchantAssets/videos/Dialogs/AppIntro1Audio.mp4";
import appIntro2Dialog from "../SmartMerchantAssets/videos/Dialogs/AppIntro2Dialog.webm";
import appIntro2Audio from "../SmartMerchantAssets/videos/Dialogs/AppIntro2Audio.mp4";
import userreg1Dialog from "../SmartMerchantAssets/videos/Dialogs/userreg1Dialog.webm";
import userreg1Audio from "../SmartMerchantAssets/videos/Dialogs/userreg1Audio.mp4";
import userreg2Dialog from "../SmartMerchantAssets/videos/Dialogs/userreg2Dialog.webm";
import userreg2Audio from "../SmartMerchantAssets/videos/Dialogs/userreg2Audio.mp4";
import userreg3Dialog from "../SmartMerchantAssets/videos/Dialogs/userreg3Dialog.webm";
import userreg3Audio from "../SmartMerchantAssets/videos/Dialogs/userreg3Audio.mp4";
import "./componentcss/AppDemonstration.css";
import qrcode from "../SmartMerchantAssets/apploading/appimages/Qrcode.PNG";
import appintro1 from "../SmartMerchantAssets/appintro/appintroimages/1.png";
import appintro2 from "../SmartMerchantAssets/appintro/appintroimages/2.png";
import appintro3 from "../SmartMerchantAssets/appintro/appintroimages/3.png";
import appintro4 from "../SmartMerchantAssets/appintro/appintroimages/4.png";
import appintro5 from "../SmartMerchantAssets/appintro/appintroimages/5.png";
import appintroasset1 from "../SmartMerchantAssets/appintro/appintro1.glb";
import appintroasset2 from "../SmartMerchantAssets/appintro/appintro2.glb";
import appintroasset3 from "../SmartMerchantAssets/appintro/appintro3.glb";
import appintroasset4 from "../SmartMerchantAssets/appintro/appintro4.glb";
import appintroasset5 from "../SmartMerchantAssets/appintro/appintro5.glb";
import userreg1 from "../SmartMerchantAssets/userreg/userreg1.glb";
import userreg2 from "../SmartMerchantAssets/userreg/userreg2.glb";
import userreg3 from "../SmartMerchantAssets/userreg/userreg3.glb";
import userregimg1 from "../SmartMerchantAssets/userreg/UserRegImages/1.png";
import userregimg2 from "../SmartMerchantAssets/userreg/UserRegImages/2.png";
import userregimg3 from "../SmartMerchantAssets/userreg/UserRegImages/3.png";
import paymentmethod1 from "../SmartMerchantAssets/paymentmethod/paymentmethod1.glb";
import paymentmethod2 from "../SmartMerchantAssets/paymentmethod/paymentmethod2.glb";
import paymentmethod3 from "../SmartMerchantAssets/paymentmethod/paymentmethod3.glb";
import paymentmethodimg1 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/1.png";
import paymentmethodimg2 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/2.png";
import paymentmethodimg3 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/3.png";
import rtpmethod1 from "../SmartMerchantAssets/rtp/rtpmethod1.glb";
import rtpmethod2 from "../SmartMerchantAssets/rtp/rtpmethod2.glb";
import rtpmethod3 from "../SmartMerchantAssets/rtp/rtpmethod3.glb";
import rtpmobile from "../SmartMerchantAssets/rtp/rtpmobile.glb";
import rtpimg1 from "../SmartMerchantAssets/rtp/rtpimages/1.png";
import rtpimg2 from "../SmartMerchantAssets/rtp/rtpimages/2.png";
import rtpimg3 from "../SmartMerchantAssets/rtp/rtpimages/3.png";
import arrow from "../SmartMerchantAssets/videos/arrow.webm";
import recpay from "../SmartMerchantAssets/recordpayment/recpay.glb";
import recpayvideo1 from "../SmartMerchantAssets/recordpayment/1.webm";
import recpayvideo2 from "../SmartMerchantAssets/recordpayment/2.webm";
import recpayvideo3 from "../SmartMerchantAssets/recordpayment/3.webm";
import datahandling from "../SmartMerchantAssets/datahandling/datahandlingasset.glb";
import datahandlingimg from "../SmartMerchantAssets/datahandling/datahandling.png";
import refundasset from "../SmartMerchantAssets/refundprocess/refundasset.glb";
import refundimg from "../SmartMerchantAssets/refundprocess/refundimg.png";

// import "./look-controls-limited"
import { registerComponent } from "aframe";
registerComponent("looklimited", {
  schema: {
    maxYaw: { default: 10 }, // Adjust this value to set the maximum yaw range
  },

  init: function () {
    this.yawRange = THREE.MathUtils.degToRad(this.data.maxYaw);
    this.bindMethods();
  },

  bindMethods: function () {
    this.onLookMove = this.onLookMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  },

  play: function () {
    this.addEventListeners();
  },

  pause: function () {
    this.removeEventListeners();
  },

  addEventListeners: function () {
    this.el.addEventListener("thumbstickmoved", this.onLookMove);
    this.el.addEventListener("touchmove", this.onLookMove);
    this.el.addEventListener("mousemove", this.onLookMove);
    this.el.addEventListener("mousedown", this.onMouseDown);
  },

  removeEventListeners: function () {
    this.el.removeEventListener("thumbstickmoved", this.onLookMove);
    this.el.removeEventListener("touchmove", this.onLookMove);
    this.el.removeEventListener("mousemove", this.onLookMove);
    this.el.removeEventListener("mousedown", this.onMouseDown);
  },

  onLookMove: function (event) {
    var rotation = this.el.object3D.rotation;

    if (Math.abs(rotation.y) >= this.yawRange) {
      // Reset rotation if it exceeds the maximum yaw range
      rotation.y = Math.sign(rotation.y) * this.yawRange;
    }
  },

  onMouseDown: function (event) {
    // Prevent default mouse down behavior to avoid interference
    event.preventDefault();
  },
});
var assetJson = {
  apploading: {
    phoneImages: [
      {
        name: "appimg1",
        imagePath: qrcode,
        buttonPosition: { x: 0.023, y: 0.088 },
        width:3.8,
        height:3.8,
        position:{x:0.00396, y:0.08907, z:-0.96379},
        rotation:{x:2.8447354528245374, y:-0.4526366581533504, z:-0.1753250853100319}
      },
      {
        name: "appimg2",
        imagePath: appimg2,
        buttonPosition: { x: 0.642, y: 0.024 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "appimg3",
        imagePath: appimg3,
        buttonPosition: { x: 0.642, y: 0.024 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      // {
      //   name: "appimg4",
      //   imagePath: appimg4,
      //   buttonPosition: { x: 0.664, y: -0.261 },
      //   width:2,
      //   height:3.8,
      //   position:{x:0.65229, y:-0.006, z:-0.98319},
      //   rotation:{x:0.529, y:-8.097, z:0.751}
      // },
    ],
    phoneAssets: [
      {
        name: "apploading1",
        imagePath: "",
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: qrdialog,
          audio: qrAudio,
        },
      },
      {
        name: "apploading2",
        imagePath: appLoading2,
        animation: "Animation",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: appLoading2Dialog,
          audio: appLoading2Audio,
        },
      },
      {
        name: "apploading3",
        imagePath: appLoading3,
        animation: "",
        scale: { x: 2.813, y: 2.813, z: 2.813 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: appLoading3Dialog,
          audio: appLoading3Audio,
        },
      },
      // {
      //   name: "apploading4",
      //   imagePath: appLoading4,
      //   animation: "",
      //   scale: { x: 0.034, y: 0.034, z: 0.034 },
      //   position: { x: -0.97307, y: -3.08774, z: -3.43762 },
      //   rotation: {
      //     x: -61.526499872328316,
      //     y: -169.76051920372137,
      //     z: -0.8416750010471793,
      //   },
      //   subsVideo: {
      //     videoElement: demoTransparent2,
      //     audio: demoAudio,
      //   },
      // },
    ],
  },
  appintro: {
    phoneImages: [
      {
        name: "appintro1",
        imagePath: appintro1,
        buttonPosition: { x: 0.58124, y: -0.22324 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "appintro2",
        imagePath: appintro2,
        buttonPosition: { x: 0.635, y: -0.294 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "appintro3",
        imagePath: appintro3,
        buttonPosition: { x: 0.692, y: -0.043 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "appintro4",
        imagePath: appintro4,
        buttonPosition: { x: 0.635, y: -0.294 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "appintro5",
        imagePath: appintro5,
        buttonPosition: { x: 0.69, y: -0.143 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
    ],
    phoneAssets: [
      {
        name: "appintroasset1",
        imagePath: appintroasset1,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: appIntro1Dialog,
          audio: appIntro1Audio,
        },
      },
      {
        name: "appintroasset2",
        imagePath: appintroasset2,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: appIntro1Dialog,
          audio: appIntro1Audio,
        },
      },
      {
        name: "appintroasset3",
        imagePath: appintroasset3,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: appIntro1Dialog,
          audio: appIntro1Audio,
        },
      },
      {
        name: "appintroasset4",
        imagePath: appintroasset4,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: appIntro1Dialog,
          audio: appIntro1Audio,
        },
      },
      {
        name: "appintroasset5",
        imagePath: appintroasset5,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: appIntro2Dialog,
          audio: appIntro2Audio,
        },
      },
    ],
  },
  userreg: {
    phoneImages: [
      {
        name: "userregimg1",
        imagePath: userregimg1,
        buttonPosition: { x: 0.662, y: -0.285 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "userregimg2",
        imagePath: userregimg2,
        buttonPosition: { x: 0.642, y: 0.024 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "userregimg3",
        imagePath: userregimg3,
        buttonPosition: { x: 0.603, y: -0.289 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
    ],
    phoneAssets: [
      {
        name: "userreg1",
        imagePath: userreg1,
        animation: "Animation",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: userreg1Dialog,
          audio: userreg1Audio,
        },
      },
      {
        name: "userreg2",
        imagePath: userreg2,
        animation: "Animation",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: userreg2Dialog,
          audio: userreg2Audio,
        },
      },
      {
        name: "userreg3",
        imagePath: userreg3,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: userreg3Dialog,
          audio: userreg3Audio,
        },
      },
    ],
  },
  paymentmethod: {
    phoneImages: [
      {
        name: "paymentimg1",
        imagePath: paymentmethodimg1,
        buttonPosition: { x: 0.662, y: -0.285 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "paymentimg2",
        imagePath: paymentmethodimg2,
        buttonPosition: { x: 0.642, y: 0.024 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "paymentimg3",
        imagePath: paymentmethodimg3,
        buttonPosition: { x: 0.603, y: -0.289 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
    ],
    phoneAssets: [
      {
        name: "paymentmethod1",
        imagePath: paymentmethod1,
        animation: "",
        scale: { x: 0.60589, y: 0.60589, z: 0.60589 },
        position: { x: -0.77297, y: -2.61681, z: -2.98667 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: demoTransparent,
          audio: demoAudio1,
        },
      },
      {
        name: "paymentmethod2",
        imagePath: paymentmethod2,
        animation: "",
        scale: { x: 0.029, y: 0.029, z: 0.029 },
        position: { x: -0.773, y: -2.617, z: -2.987 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: demoTransparent2,
          audio: demoAudio,
        },
      },
      {
        name: "paymentmethod3",
        imagePath: paymentmethod3,
        animation: "",
        scale: { x: 0.029, y: 0.029, z: 0.029 },
        position: { x: -0.773, y: -2.617, z: -2.987 },
        rotation: {
          x: -61.526499872328316,
          y: -169.76051920372137,
          z: -0.8416750010471793,
        },
        subsVideo: {
          videoElement: demoTransparent,
          audio: demoAudio1,
        },
      },
    ],
  },
  rtpmethod: {
    phoneImages: [
      {
        name: "rtpmethod1",
        imagePath: rtpimg1,
        buttonPosition: { x: 0.662, y: -0.285 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "rtpimg2",
        imagePath: rtpimg2,
        buttonPosition: { x: 0.642, y: 0.024 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "rtpimg3",
        imagePath: rtpimg3,
        buttonPosition: { x: 0.603, y: -0.289 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
    ],
    phoneAssets: [
      {
        name: "rtpmethod1",
        imagePath: rtpmethod1,
        animation: "Animation",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.42890839965937,
          y: -172.72557579352335,
          z: 3.9614301955345113,
        },
        subsVideo: {
          videoElement: demoTransparent2,
          audio: demoAudio,
        },
      },
      {
        name: "rtpmethod2",
        imagePath: rtpmethod2,
        animation: "Animation",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.42890839965937,
          y: -172.72557579352335,
          z: 3.9614301955345113,
        },
        subsVideo: {
          videoElement: demoTransparent,
          audio: demoAudio1,
        },
      },
      {
        name: "rtpmethod3",
        imagePath: rtpmethod3,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.42890839965937,
          y: -172.72557579352335,
          z: 3.9614301955345113,
        },
        subsVideo: {
          videoElement: demoTransparent2,
          audio: demoAudio,
        },
      },
    ],
  },
  recpay: {
    phoneImages: [
      {
        name: "recpayvideo1",
        imagePath: recpayvideo1,
        buttonPosition: { x: 0.662, y: -0.285 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "recpayvideo2",
        imagePath: recpayvideo2,
        buttonPosition: { x: 0.642, y: 0.024 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
      {
        name: "recpayvideo3",
        imagePath: recpayvideo3,
        buttonPosition: { x: 0.603, y: -0.289 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
    ],
    phoneAssets: [
      {
        name: "recpay",
        imagePath: recpay,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.42890839965937,
          y: -172.72557579352335,
          z: 3.9614301955345113,
        },
        subsVideo: {
          videoElement: demoTransparent,
          audio: demoAudio1,
        },
      },
      {
        name: "recpay2",
        imagePath: recpay,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.42890839965937,
          y: -172.72557579352335,
          z: 3.9614301955345113,
        },
        subsVideo: {
          videoElement: demoTransparent2,
          audio: demoAudio,
        },
      },
      {
        name: "recpay3",
        imagePath: recpay,
        animation: "",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.42890839965937,
          y: -172.72557579352335,
          z: 3.9614301955345113,
        },
        subsVideo: {
          videoElement: demoTransparent,
          audio: demoAudio1,
        },
      },
    ],
  },
  datahandling: {
    phoneImages: [
      {
        name: "datahandling",
        imagePath: datahandlingimg,
        buttonPosition: { x: 0.662, y: -0.285 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
    ],
    phoneAssets: [
      {
        name: "datahandling",
        imagePath: datahandling,
        animation: "Animation",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.42890839965937,
          y: -172.72557579352335,
          z: 3.9614301955345113,
        },
        subsVideo: {
          videoElement: demoTransparent2,
          audio: demoAudio,
        },
      },
    ],
  },
  refundprocess: {
    phoneImages: [
      {
        name: "refundimg",
        imagePath: refundimg,
        buttonPosition: { x: 0.662, y: -0.285 },
        width:2,
        height:3.8,
        position:{x:0.65229, y:-0.006, z:-0.98319},
        rotation:{x:0.529, y:-8.097, z:0.751}
      },
    ],
    phoneAssets: [
      {
        name: "refundasset",
        imagePath: refundasset,
        animation: "Animation",
        scale: { x: 0.034, y: 0.034, z: 0.034 },
        position: { x: -1.0364, y: -3.02252, z: -3.46246 },
        rotation: {
          x: -62.723,
          y: -171.366,
          z: 2.282,
        },
        subsVideo: {
          videoElement: demoTransparent,
          audio: demoAudio1,
        },
      },
    ],
  },
};

// registerComponent('look-controls-limited', 'look-controls-limited');

function AppDemonstration() {
  const cameraRef = useRef(null);
  const cameraRotationRef = useRef(null);
  const sceneRef = useRef(null);
  const subsVideoRef = useRef(null);
  const skipBtnRef = useRef(null);
  const [zoom, setZoom] = useState(1.5);
  const navigate = useNavigate();
  const [skipState, setSkipState] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const subsAudioRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [pageLoaded, setPageLoaded] = useState(false);
  const [mute, setMute] = useState(true);
  const [animationClicked, setAnimationClicked] = useState(false);
  const [currentPhoneAssetIndex, setCurrentPhoneAssetIndex] = useState(0);
  const [currentPhoneImageIndex, setCurrentPhoneImageIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentDivision, setCurrentDivision] = useState("apploading");
  const [assetsVisible, setAssetsVisible] = useState(true);
  const [extrasVisible, setExtrasVisible] = useState(false);
  const [lastSkipTime, setLastSkipTime] = useState(0);

  useEffect(() => {
    // Simulating page load after 3 seconds
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    const button = document.getElementById("buttonvideo");
    const arrowVideo = document.getElementById("arrow");
    arrowVideo.muted = true;
    button.muted = true;
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      // Do something with each div element
      video.play();
    }
    button.play();
  }, []);
  useEffect(() => {
    const handleClick = (event) => {
      // Handle the click event
      setMute(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  // const video=subsVideoRef.current
  // console.log(video.duration)
  const currentPhoneAsset =
    assetJson[currentDivision].phoneAssets[currentPhoneAssetIndex];
  const currentPhoneImage =
    assetJson[currentDivision].phoneImages[currentPhoneImageIndex];

  // console.log(currentPhoneAsset);

  useEffect(() => {
    const video = subsVideoRef.current;
    const audio = subsAudioRef.current;

    const esy = document.getElementById("esy");
    if (!mute) {
      audio.muted = false;
    }
    if (mute) {
      audio.muted = true;
    }

    const handleVideoPlay = () => {
      esy.setAttribute(
        "animation-mixer",
        "clip:;loop:repeat;repetitions:Infinity;"
      );
      if (!audio.paused && audio.currentTime < video.currentTime) {
        audio.currentTime = video.currentTime;
      } else if (!mute) {
        audio.play();
        audio.muted = false;
      }
    };

    const handleVideoPause = () => {
      if (!video.paused && !audio.paused) {
        audio.pause();
        esy.removeAttribute("animation-mixer");
      }
    };

    const handleAudioLoadedMetadata = () => {
      // Handle loaded metadata for the subsAudio element
      if (!mute) {
        audio.play();
      }
      const duration = audio.duration;
      console.log("Audio duration:", duration);
    };
    const handleVideoEnded = () => {
      esy.removeAttribute("animation-mixer");
      audio.pause();
    };

    video.addEventListener("play", handleVideoPlay);
    video.addEventListener("pause", handleVideoPause);
    audio.addEventListener("loadedmetadata", handleAudioLoadedMetadata);
    video.addEventListener("loadedmetadata", handleAudioLoadedMetadata); // Added event listener to subsVideoRef as well
    video.addEventListener("ended", handleVideoEnded);
    return () => {
      video.removeEventListener("play", handleVideoPlay);
      video.removeEventListener("pause", handleVideoPause);
      audio.removeEventListener("loadedmetadata", handleAudioLoadedMetadata);
      video.removeEventListener("loadedmetadata", handleAudioLoadedMetadata); // Removed event listener for subsVideoRef
    };
  }, [subsVideoRef, subsAudioRef, mute]);
  const video = subsVideoRef.current;
  const audio = subsAudioRef.current;
  const loadNextAssets = (currentAssets, cacheBuster) => {
    const videoSrc = currentAssets.phoneAssets[0].video;
    const audioSrc = currentAssets.phoneAssets[0].audio;
    video.src = videoSrc + "?cache=" + cacheBuster;
  
    video.addEventListener("loadedmetadata", () => {
      video.play();
  
      if (!audio.paused && audio.currentTime < video.currentTime) {
        audio.currentTime = video.currentTime;
      } else {
        audio.play();
      }
    });
  };
  
  // Helper function to handle transition between assets
  const handleTransition = (currentAssets) => {
    setCurrentPhoneAssetIndex(0);
    setCurrentPhoneImageIndex(0);
    setAnimationClicked(false);
    setExtrasVisible(false);
  
    if (currentDivision === "rtpmethod" || currentDivision === "refundprocess") {
      setExtrasVisible(true);
    }
  };

  useEffect(() => {
    const video = subsVideoRef.current;
    const audio = subsAudioRef.current;
    const skipBtn = skipBtnRef.current;
    const buttonEntity = document.querySelector("#animation-button");
    // const appLoadingBtn = document.getElementById("apploading");
    // const appDemoBtn = document.getElementById("appintro");
    // const userRegBtn = document.getElementById("userreg");
    // const paymethodBtn = document.getElementById("paymentmethod");
    const smartDropdown = document.getElementById("smart-app-dropdown");

    setExtrasVisible(false);
    // const arrowEntity=document.getElementById("arrow-entity")
    // arrowEntity.setAttribute("visible","false")
    skipBtn.style.pointerEvents = "none"; // Disable click events initially

    const delayBindingTimeout = setTimeout(() => {
      skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
      skipBtn.addEventListener("click", handleSkipClick);
    }, 2500);

    video.addEventListener("loadedmetadata", () => {
      setVideoDuration(video.duration);
    });

    const handleVideoEnded = () => {
      buttonEntity.setAttribute("visible", "true");
    };

    const handleVideoPlay = () => {
      buttonEntity.setAttribute("visible", "false");

      if (!audio.paused && audio.currentTime < video.currentTime) {
        audio.currentTime = video.currentTime;
      } else {
        audio.play();
      }
    };

    const handleVideoPause = () => {
      if (!video.paused && !audio.paused) {
        audio.pause();
      }
    };

    video.addEventListener("ended", handleVideoEnded);
    video.addEventListener("play", handleVideoPlay);
    video.addEventListener("pause", handleVideoPause);

    const handleSkipClick = () => {
      const divisions = Object.keys(assetJson);
      const currentDivisionIndex = divisions.indexOf(currentDivision);
      const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
      const currentAssets = assetJson[divisions[nextDivisionIndex]];
      const cacheBuster = new Date().getTime();

      // Check if the last division is loaded
      if (
        nextDivisionIndex === 0 &&
        currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
      ) {
        // Last division and last asset loaded, prevent skip
        return;
      }

      // Check if enough time has passed since the last skip
      if (Date.now() - lastSkipTime < 2500) {
        // Less than 5 seconds since the last skip, prevent skip
        return;
      }

      // Set the last skip time to the current time
      setLastSkipTime(Date.now());

      buttonEntity.setAttribute("visible", "false"); // Hide the skip button

      setTimeout(() => {
        // Show the skip button after 5 seconds
        buttonEntity.setAttribute("visible", "true");

        // Check if the skip button is clickable (exceeds division length)
        if (
          nextDivisionIndex === 0 &&
          currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
        ) {
          // Last division and last asset loaded, prevent skip
          buttonEntity.setAttribute("visible", "false");
        }
      }, 2500);

      setCurrentDivision(divisions[nextDivisionIndex]);
      setCurrentPhoneAssetIndex(0); // Reset the asset index
      setCurrentPhoneImageIndex(0); // Reset the image index

      loadNextAssets(currentAssets, cacheBuster);  
      setTimeout(() => {
        handleTransition(currentAssets);
        setTimeout(() => {
          // Set visibility after the transition
          buttonEntity.setAttribute("visible", "true");
        }, 2500);
      }, 2500);
    };
    skipBtn.removeEventListener("click", handleSkipClick);
    skipBtn.addEventListener("click", handleSkipClick);

    const handleClick = () => {
      buttonEntity.setAttribute("visible", "false");
      buttonEntity.removeEventListener("click", handleClick);
      if (pageLoaded) {
        const phoneAsset = document.querySelector("#phone-asset");
        if (phoneAsset) {
          console.log(phoneAsset.getAttribute("animation-mixer"));
          setAnimationClicked(true);
        } else {
          setAnimationClicked(false);
        }
      } else {
        setAnimationClicked(false);
      }

      const divisions = Object.keys(assetJson);
      const currentDivisionIndex = divisions.indexOf(currentDivision);
      const currentAssets = assetJson[currentDivision];
      const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
      const currentPhoneImagesLength = currentAssets.phoneImages.length;
      let nextPhoneAssetIndex =
        (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
      let nextPhoneImageIndex =
        (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
      const cacheBuster = new Date().getTime();

      const loadNextAssets = () => {
        const nextVideoIndex =
          (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
        const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
        const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
        video.src = videoSrc + "?cache=" + cacheBuster;

        video.addEventListener("loadedmetadata", () => {
          video.play();
          // setExtrasVisible(true)
          // if(currentDivision==="rtpmethod"){
          //   arrowEntity.setAttribute("visible",true);
          //    if(currentPhoneAssetIndex===0){
          //   arrowEntity.setAttribute("visible",true);
          // }
          // }

          if (!audio.paused && audio.currentTime < video.currentTime) {
            audio.currentTime = video.currentTime;
          } else {
            audio.play();
          }
        });
      };

      const handleTransition = () => {
        if (
          currentDivision === divisions[divisions.length - 1] &&
          nextPhoneAssetIndex === 0
        ) {
          // Last division and last asset loaded
          setAssetsVisible(false);

          console.log(assetsVisible);
          // setTimeout(()=>{
          //   setAssetsVisible(false);
          //   console.log(assetsVisible)
          // } 2500)
        } else {
          setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
          setCurrentPhoneImageIndex(nextPhoneImageIndex);
          setAnimationClicked(false);
          setExtrasVisible(false);
          if (
            currentDivision === "rtpmethod" ||
            currentDivision === "refundprocess"
          ) {
            setExtrasVisible(true);
          } else {
            setExtrasVisible(false);
          }

          // arrowEntity.setAttribute("visible",false);
          buttonEntity.addEventListener("click", handleClick);
          console.log("Event listener added");
          buttonEntity.removeEventListener("click", handleClick);
          console.log("Event listener removed");
          buttonEntity.setAttribute("visible", "true");
        }
      };

      // Check if all assets in the current division are loaded
      if (nextPhoneAssetIndex !== 0) {
        loadNextAssets();
        if (
          currentDivision === "rtpmethod" ||
          currentDivision === "refundprocess"
        ) {
          setExtrasVisible(true);
          // arrowEntity.setAttribute("visible",true);
          if (currentPhoneAssetIndex === 0) {
            // arrowEntity.setAttribute("visible",true);
            setExtrasVisible(true);
          }
          // else{
          //     setExtrasVisible(false);
          // }
        }
      } else {
        const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
        const nextDivision = divisions[nextDivisionIndex];

        if (nextDivisionIndex === 0 && nextPhoneAssetIndex === 0) {
          // JSON iteration completed
          if (
            currentDivision === "rtpmethod" ||
            currentDivision === "refundprocess"
          ) {
            setExtrasVisible(true);
            // arrowEntity.setAttribute("visible",true);
            if (currentPhoneAssetIndex === 0) {
              // arrowEntity.setAttribute("visible",true);
              setExtrasVisible(true);
            } else {
              setExtrasVisible(false);
            }
          }
          setTimeout(() => {
            setAssetsVisible(false);
            video.style.display = "none";
            audio.removeAttribute("src");
            console.log(assetsVisible);
          }, 2500);
          return;
        }
        setTimeout(() => {
          setCurrentDivision(nextDivision);
          setCurrentPhoneAssetIndex(0); // Reset the asset index
          setCurrentPhoneImageIndex(0); // Reset the image index

          loadNextAssets();
        }, 2500);
      }

      setTimeout(handleTransition, 2500);
    };

    buttonEntity.removeEventListener("click", handleClick);
    console.log("Event listener removed");
    buttonEntity.addEventListener("click", handleClick);
    console.log("Event listener added");

    const handleDivisionButtonClick = (event) => {
      const selectedDivision=event.target.value;
      const divisions = Object.keys(assetJson);
      const currentDivisionIndex = divisions.indexOf(currentDivision);
      const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
      const currentAssets = assetJson[divisions[nextDivisionIndex]];
      const cacheBuster = new Date().getTime();

      // Check if the last division is loaded
      if (
        nextDivisionIndex === 0 &&
        currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
      ) {
        // Last division and last asset loaded, prevent skip
        return;
      }

      // Check if enough time has passed since the last skip
      if (Date.now() - lastSkipTime < 2500) {
        // Less than 5 seconds since the last skip, prevent skip
        return;
      }

      // Set the last skip time to the current time
      setLastSkipTime(Date.now());

      buttonEntity.setAttribute("visible", "false"); // Hide the skip button

      setTimeout(() => {
        // Show the skip button after 5 seconds
        buttonEntity.setAttribute("visible", "true");

        // Check if the skip button is clickable (exceeds division length)
        if (
          nextDivisionIndex === 0 &&
          currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
        ) {
          // Last division and last asset loaded, prevent skip
          buttonEntity.setAttribute("visible", "false");
        }
      }, 2500);
      
      setCurrentDivision(event.target.value);
      setCurrentPhoneAssetIndex(0); // Reset the asset index
      setCurrentPhoneImageIndex(0); // Reset the image index

      loadNextAssets(currentAssets, cacheBuster);

      setTimeout(() => {
        handleTransition(currentAssets);
        setTimeout(() => {
          // Set visibility after the transition
          buttonEntity.setAttribute("visible", "true");
        }, 2500);
      }, 2500);
    };
    // appLoadingBtn.addEventListener("click", handleDivisionButtonClick);
    // appDemoBtn.addEventListener("click", handleDivisionButtonClick);
    // userRegBtn.addEventListener("click", handleDivisionButtonClick);
    // paymethodBtn.addEventListener("click", handleDivisionButtonClick);
    smartDropdown.addEventListener("change", handleDivisionButtonClick);
    // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
    // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
    // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
    // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);

    return () => {
      video.removeEventListener("loadedmetadata", () => {
        setVideoDuration(video.duration);
      });
      video.removeEventListener("ended", handleVideoEnded);
      video.removeEventListener("play", handleVideoPlay);
      video.removeEventListener("pause", handleVideoPause);
      buttonEntity.removeEventListener("click", handleClick);
      clearTimeout(delayBindingTimeout);
      skipBtn.removeEventListener("click", handleSkipClick);
      // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
      // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
      // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
      // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
      smartDropdown.removeEventListener("change", handleDivisionButtonClick);
      console.log("Event listener removed");
    };
  }, [
    pageLoaded,
    currentPhoneAssetIndex,
    currentDivision,
    currentPhoneImageIndex,
    assetsVisible,
    lastSkipTime,
    // handleTransition,loadNextAssets
  ]);
  // Hide the animation button initially

  useEffect(() => {
    const buttonEntity = document.querySelector("#animation-button");
    buttonEntity.setAttribute("visible", "false");
  }, []);
  // Set the visibility attribute of the animation button based on the state
  // const buttonVisibilityAttribute = currentPhoneAssetIndex === 0 ? "true" : "false";

  // const handleLoadedMetadata = () => {
  //   const video = subsVideoRef.current;
  //   const audio=subsAudioRef.current
  //   if (!video || !audio) return;
  //   setVideoDuration(video.duration);
  //   setAudioDuration(audio.duration);
  // };
  // console.log(videoDuration);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = true;
  //   }
  // }, []);

  const handleLobbyClick = (event) => {
    event.stopPropagation();
    navigate("/panorama");
    console.log("panorama button clicked"); // Replace "/your-route" with the desired path
  };

  // const [currentEntityIndex, setCurrentEntityIndex] = useState(0);
  // const entityNames = Object.keys(entityVisibility);

  const handleZoom = (event) => {
    const newZoom = zoom + event.deltaY * -0.01;
    if (newZoom >= 1 && newZoom <= 5) {
      setZoom(newZoom);
    }
  };

  const logoutHandler = () => {
    resetUserSession();
    navigate("/login");
  };
  useEffect(() => {
    window.addEventListener("wheel", handleZoom);
    return () => window.removeEventListener("wheel", handleZoom);
  });
  useEffect(() => {
    const camera = document.getElementById("camera");
    const logCameraRotation = () => {
      if (cameraRef.current && cameraRef.current.object3D) {
        const rotation = camera.object3D.rotation;
        const { x, y, z } = rotation;

        // Apply the restriction for x-axis rotation between 0.034 and 0.044
        if (x < 0.034) {
          rotation.x = 0.034;
        } else if (x > 0.044) {
          rotation.x = 0.044;
        }

        cameraRef.current.object3D.rotation.copy(rotation);
      }
    };

    const interval = setInterval(logCameraRotation, 100); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, []);
  // useEffect(() => {
  //   const phoneAsset = document.getElementById("phone-asset");
  //   if (animationClicked) {
  //     phoneAsset.setAttribute("animation-mixer", {
  //       clip: currentPhoneAsset.animation,
  //       loop: "repeat",
  //       repetitions: Infinity,
  //       crossFadeDuration: 0.3,
  //     });
  //   } else {
  //     phoneAsset.removeAttribute("animation-mixer");
  //   }
  // }, [currentPhoneAsset, animationClicked]);
  // console.log(animationClicked);
  // const handleAnimationClick = () => {
  //   setAnimationClicked(!animationClicked);

  //   // Change assets after 5 seconds
  //   setTimeout(() => {
  //     setCurrentPhoneAssetIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % assetJson.phoneAssets.length;
  //       return nextIndex;
  //     });

  //     setCurrentPhoneImageIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % assetJson.phoneImages.length;
  //       return nextIndex;
  //     });

  //     // Enable animation
  //     if (pageLoaded) {
  //       const phoneAsset = document.querySelector('#phone-asset');
  //       if (phoneAsset) {
  //         phoneAsset.setAttribute('animation-mixer', {
  //           clip: currentPhoneAsset.animation,
  //           loop: 'repeat',
  //           repetitions: Infinity,
  //         });
  //       }
  //     }
  //   }, 2500); // Wait for 5 seconds before changing assets and enabling animation

  //   console.log(currentPhoneAsset.animation, pageLoaded);
  //};
  // console.log(mute);
  return (
    <div  className="scene-container" onClick={() => setMute(false)}>
      <select defaultValue="" className="smart-dropdown" id="smart-app-dropdown">
    <option value="none" disabled>Select Demo</option>
    <option value="apploading">App Installation</option>
    <option value="appintro">App Introduction</option>
    <option value="userreg">User Registration</option>
    <option value="paymentmethod">Payment Method</option>
    <option value="rtpmethod">RTP Method</option>
    <option value="recpay">Records/Payments</option>
    <option value="datahandling">Data Handling</option>
    <option value="refundprocess">Refund process</option>
  </select>
      <video
        src={currentPhoneAsset.subsVideo.audio}
        ref={subsAudioRef}
        controls={false}
        preload="auto"
        className="demo-subs subs-audio audio-element"
      />
      {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
      <div className="demo-subs-container">
        <button className="next-video-btn" ref={skipBtnRef}>
          Next
        </button>
        <div className="demo-subs-main-container">
          <video
            id="subsVideo"
            ref={subsVideoRef}
            src={currentPhoneAsset.subsVideo.videoElement}
            // onLoadedMetadata={handleLoadedMetadata}
            type="video/webm"
            muted
            controls={false}
            preload="auto"
            className="demo-subs"
          />
          <div className="next-button-container"></div>
        </div>
        {/* <video
          src={currentPhoneAsset.subsVideo.audio}
          ref={subsAudioRef}
          type="video/webm"
          controls={false}
          preload="auto"
          className="demo-subs subs-audio"
        /> */}
      </div>
      <Scene
        inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
        cursor="rayOrigin: mouse"
        // raycaster="objects: [data-clickable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene"
        ref={sceneRef}
        vr-mode-ui={{ enabled: true }}
        // onEnterVR={handleEnterVR}
        renderer={"antialias: true; physicallyCorrectLights: true; "}
        embedded={true}
      >
        <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef}>
          <Entity
            id="camera"
            wasd-controls-enabled="false"
            primitive="a-camera"
            ref={cameraRef}
            position="0 0 0"
            zoom={zoom}
            near="0.05"
            far="10000"
            camera="active:true"
            look-controls="reverseMouseDrag:true"
            // looklimited
          >
            {/* <a-entity
          gltf-model={paymentMethod}
          scale="0.5 0.5 0.5"
          rotation="-68.85348415646128 -169.53248200125927 -12.258432026823963"
          position="-0.1445 -1.86661 -2.86936"
          // shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}
            {assetsVisible && (
              <>
                <a-entity
                  id="phone-asset"
                  gltf-model={currentPhoneAsset.imagePath}
                  scale={`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`}
                  position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
                  rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
                  // shadow="cast:true;"
                  {...(animationClicked && {
                    "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:1;`,
                  })}
                  // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
                />

                {/*no inspector because of img*/}
                <a-entity
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${currentPhoneImage.imagePath};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale="0.2 0.2 0.2"
                ></a-entity>
                {currentDivision === "recpay" && (
                  <a-entity
                    id="phone-video"
                    material={`shader: flat; alphaTest: 0.5; src:${currentPhoneImage.imagePath}; transparent: true;`}
                    geometry="primitive: plane; width: 2; height: 3.8"
                    position="-0.10769 -0.0083 -0.7636"
                    rotation="-2.3073010409918253 4.6564280010282 -1.7647100090029355"
                    scale="0.11844 0.1355 0.12"
                  ></a-entity>
                )}

                {currentDivision === "rtpmethod" &&
                  currentPhoneAsset.imagePath.includes("rtp") &&
                  extrasVisible && (
                    <>
                      <a-entity
                        id="rtp-phone"
                        gltf-model={rtpmobile}
                        scale="3 3 3"
                        rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
                        position="-0.36309 -3.12602 0.50687"
                        animation-mixer="clip: Animation"
                      ></a-entity>

                      {/* <a-entity id="arrow-entity" material={`shader: flat; color: white; transparent: true; src:#arrow `} geometry="primitive: plane; width: 5.45; height: 2.96"  position="-0.65925 0.12821 -1.37255"rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}
                    </>
                  )}
                {currentDivision === "refundprocess" &&
                  currentPhoneAsset.imagePath.includes("refund") &&
                  extrasVisible && (
                    <a-entity
                      id="rtp-phone"
                      gltf-model={rtpmobile}
                      scale="3 3 3"
                      rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
                      position="-0.36309 -3.12602 0.50687"
                      animation-mixer="clip: Animation"
                    ></a-entity>
                  )}

                <a-entity
                  id="arrow-entity"
                  material={`shader: flat; color: white; transparent: true; src:#arrow; `}
                  visible={extrasVisible ? "true" : "false"}
                  geometry="primitive: plane; width: 5.45; height: 2.96"
                  position="-0.65925 0.12821 -1.37255"
                  rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403"
                  scale="0.21033 0.21033 0.21033"
                ></a-entity>
              </>
            )}
            <a-entity
              id="animation-button"
              material="shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:#buttonvideo;"
              geometry="primitive: circle; radius: 0.2; theta-length: 360"
              position={`${currentPhoneImage.buttonPosition.x} ${currentPhoneImage.buttonPosition.y} -0.86971`}
              rotation="0 0 0"
              scale="-0.2 0.2 0.2"
              // visible={buttonVisibilityAttribute}
              // onClick={handleAnimationClick}
              event-set__mouseenter="_event: mouseenter; material.opacity: 0.9; textEntity.opacity:0.7; text.color:orange;"
              event-set__mouseleave="_event: mouseleave; material.opacity: 0.7; textEntity.opacity:0; text.color:red;"
              raycaster="objects: [gui-interactable]"
            ></a-entity>

            {/* Just for Position and rotation testing */}
            {/* <a-entity id="phone-img" material={`shader: flat;  alphaTest:0.5;   transparent: true;`} geometry="primitive: plane; width: 2; height: 3.8" position="0.65229 -0.006 -0.98319" rotation="3.5844239663384303 -4.396305162038807 0.6852575229764646" scale="0.2 0.2 0.2"></a-entity>
         <a-entity
         material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
         geometry="primitive: circle; radius: 0.2; theta-length: 360"
          position={`0.642 -0.15784 -0.86971`}
          rotation="0 0 0"
          scale="-0.2 0.2 0.2"
          onClick={handleAnimationClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
          raycaster="objects: [gui-interactable]"
        ></a-entity> */}

            {/* <a-entity gltf-model="/static/media/apploading1.a488ca6605b75d157548.glb" scale="0.034 0.034 0.034" rotation="-68.60367455778425 -172.40758421722575 -9.044711753935175" position="-0.40232 -2.49204 -4.23453" animation-mixer="clip: Animation"></a-entity> */}
            <a-entity
              cursor="fuse: false;"
              id="cursor-btn"
              // position={`${cursorPosition.x} ${cursorPosition.y} -1 `}
              // position=" 0 0 -1"
              geometry="primitive: ring; radiusInner: 0.0001; radiusOuter: 0.0002"
              // animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
              // animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
              // animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
              material="color: black; shader: flat"
              raycaster="objects: [gui-interactable]; near:1 far:20;"
              // onClick={handleMerchantClick}
            ></a-entity>
          </Entity>
        </a-entity>

        <a-assets>
          <img id="tv-border" src={tvImg} alt="" />
          <video
            className="displayVideo"
            id="arrow"
            preload="auto"
            src={arrow}
            width="1920"
            height="1080"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>

          {/* {console.log("currentPhoneImage.name:", currentPhoneImage.name)}
          {console.log(
            "currentPhoneImage.imagePath:",
            currentPhoneImage.imagePath
          )} */}
          <video
            className="videos"
            id="buttonvideo"
            preload="auto"
            src={buttonvideo}
            width="1920"
            height="1080"
            autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>

          {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}

          <img id="smartm" src={smartmerchant} alt="" />
        </a-assets>

        {/* <a-entity gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="-1.0364806513916591 -177.40205731738115 0.2859059397702808" position="-0.07352 -2.84768 0.05947" animation-mixer="clip: Animation"></a-entity> */}
        {/* <a-entity position="-0.14076 -3.07192 0.82356" gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="10.3 2500000000001 138.48389908311995 -10.957817831876994" animation-mixer="clip: Animation"></a-entity> */}
        {/* <a-entity sound="src:#isyintro" autoplay="true" volume="2"></a-entity> */}
        {/* <a-sound src={isyintro} autoplay="true"></a-sound> */}
        {/* <a-entity id="river" geometry="primitive: plane" material="color: blue"
          position="-10 0 0" sound="src: url(river.mp3); autoplay: true"></a-entity> */}
        {/* <a-entity
          gltf-model={sandclock}
          position="1.8 0 -2"
          scale="0.5 0.5 0.5"
          rotation="10.325 -34.608 -10.958."
          shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}
        <Entity primitive="a-sky" src={smartmerchant} rotation="0 -130 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
        <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
        {/* <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity> */}
        <a-entity
          id="directional"
          light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
        ></a-entity>
        <a-entity
          id="spot1"
          light="type: spot; castShadow: true; intensity: 0.25; distance: 15; color: white; angle: 60.16"
          position="6.26958 3.91449 64.86643"
          rotation="49.99973494988642 -156.67244428954794 20.000237754631645"
        ></a-entity>
        <a-entity
          light="color: #ffffff; decay: 0; distance: 15.8; intensity: 0.4; type: spot"
          id="spot-light"
          position="-2.52809 0.72938 2"
        ></a-entity>
        <a-entity
          id="spot2"
          light="type: spot; castShadow: true; intensity: 0.38; decay: 0; distance: 15; color: white; angle: 60.16"
          position="-3.47559 2.02332 -3.3246"
        ></a-entity>
        <a-entity
          id="spot3"
          light="type: spot; castShadow: true; intensity: 0.34; decay: 0; distance: 15; color: white; angle: 60.16"
          position="3.47559 2.02332 -6.3246"
        ></a-entity>

        {/* <a-entity
          gltf-model={paymentMethod}
          position="1.8 0 -2"
          scale="0.5 0.5 0.5"
          rotation="10.325 -34.608 -10.958."
          // shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}

        <a-entity
          gltf-model={esy}
          id="esy"
          position="-1 -6 -12"
          scale="0.18 0.18 0.18"
          rotation="0 1  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        />
        {/* <a-entity
          id="menu"
          position="25.861 11.406 28.091"
          rotation="0 25.281 0"
        >
          <a-entity
            id="apploading"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -7.65778 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: App Loading"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity
            id="appintro"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -11.075 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: App Demonstration"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity
            id="userreg"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -14.725 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: User Registration"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity
            id="paymentmethod"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -18.143 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: Payment Method"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
        </a-entity> */}
        <a-entity
          //LobbyDoor
          id="#smartgate"
          material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
          geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
          position="-99.08677 -20.10092 122.78598"
          rotation="0 -212.78 0"
          scale="2.65625 2.65625 2.65625"
          onClick={handleLobbyClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0"
        ></a-entity>

        <a-light light="type: ambient"></a-light>
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      </Scene>
    </div>
  );
}

export default AppDemonstration;

// The second  iteration (since new changes are made)useEffect used for the handling next set assests

// useEffect(() => {
//   const video = subsVideoRef.current;
//   const audio = subsAudioRef.current;
//   const skipBtn = skipBtnRef.current;
//   const buttonEntity = document.querySelector("#animation-button");
//   // const appLoadingBtn = document.getElementById("apploading");
//   // const appDemoBtn = document.getElementById("appintro");
//   // const userRegBtn = document.getElementById("userreg");
//   // const paymethodBtn = document.getElementById("paymentmethod");
//   const smartDropdown = document.getElementById("smart-app-dropdown");

//   setExtrasVisible(false);
//   // const arrowEntity=document.getElementById("arrow-entity")
//   // arrowEntity.setAttribute("visible","false")
//   skipBtn.style.pointerEvents = "none"; // Disable click events initially

//   const delayBindingTimeout = setTimeout(() => {
//     skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
//     skipBtn.addEventListener("click", handleSkipClick);
//   }, 2500);

//   video.addEventListener("loadedmetadata", () => {
//     setVideoDuration(video.duration);
//   });

//   const handleVideoEnded = () => {
//     buttonEntity.setAttribute("visible", "true");
//   };

//   const handleVideoPlay = () => {
//     buttonEntity.setAttribute("visible", "false");

//     if (!audio.paused && audio.currentTime < video.currentTime) {
//       audio.currentTime = video.currentTime;
//     } else {
//       audio.play();
//     }
//   };

//   const handleVideoPause = () => {
//     if (!video.paused && !audio.paused) {
//       audio.pause();
//     }
//   };

//   video.addEventListener("ended", handleVideoEnded);
//   video.addEventListener("play", handleVideoPlay);
//   video.addEventListener("pause", handleVideoPause);

//   const handleSkipClick = () => {
//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//     const currentAssets = assetJson[divisions[nextDivisionIndex]];
//     const cacheBuster = new Date().getTime();

//     // Check if the last division is loaded
//     if (
//       nextDivisionIndex === 0 &&
//       currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//     ) {
//       // Last division and last asset loaded, prevent skip
//       return;
//     }

//     // Check if enough time has passed since the last skip
//     if (Date.now() - lastSkipTime < 2500) {
//       // Less than 5 seconds since the last skip, prevent skip
//       return;
//     }

//     // Set the last skip time to the current time
//     setLastSkipTime(Date.now());

//     buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//     setTimeout(() => {
//       // Show the skip button after 5 seconds
//       buttonEntity.setAttribute("visible", "true");

//       // Check if the skip button is clickable (exceeds division length)
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         buttonEntity.setAttribute("visible", "false");
//       }
//     }, 2500);

//     setCurrentDivision(divisions[nextDivisionIndex]);
//     setCurrentPhoneAssetIndex(0); // Reset the asset index
//     setCurrentPhoneImageIndex(0); // Reset the image index

//     loadNextAssets(currentAssets, cacheBuster);  
//     setTimeout(() => {
//       handleTransition(currentAssets);
//       setTimeout(() => {
//         // Set visibility after the transition
//         buttonEntity.setAttribute("visible", "true");
//       }, 2500);
//     }, 2500);
//   };
//   skipBtn.removeEventListener("click", handleSkipClick);
//   skipBtn.addEventListener("click", handleSkipClick);

//   const handleClick = () => {
//     buttonEntity.setAttribute("visible", "false");
//     buttonEntity.removeEventListener("click", handleClick);
//     if (pageLoaded) {
//       const phoneAsset = document.querySelector("#phone-asset");
//       if (phoneAsset) {
//         console.log(phoneAsset.getAttribute("animation-mixer"));
//         setAnimationClicked(true);
//       } else {
//         setAnimationClicked(false);
//       }
//     } else {
//       setAnimationClicked(false);
//     }

//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const currentAssets = assetJson[currentDivision];
//     const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
//     const currentPhoneImagesLength = currentAssets.phoneImages.length;
//     let nextPhoneAssetIndex =
//       (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//     let nextPhoneImageIndex =
//       (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
//     const cacheBuster = new Date().getTime();

//     const loadNextAssets = () => {
//       const nextVideoIndex =
//         (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//       const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
//       const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
//       video.src = videoSrc + "?cache=" + cacheBuster;

//       video.addEventListener("loadedmetadata", () => {
//         video.play();
//         // setExtrasVisible(true)
//         // if(currentDivision==="rtpmethod"){
//         //   arrowEntity.setAttribute("visible",true);
//         //    if(currentPhoneAssetIndex===0){
//         //   arrowEntity.setAttribute("visible",true);
//         // }
//         // }

//         if (!audio.paused && audio.currentTime < video.currentTime) {
//           audio.currentTime = video.currentTime;
//         } else {
//           audio.play();
//         }
//       });
//     };

//     const handleTransition = () => {
//       if (
//         currentDivision === divisions[divisions.length - 1] &&
//         nextPhoneAssetIndex === 0
//       ) {
//         // Last division and last asset loaded
//         setAssetsVisible(false);

//         console.log(assetsVisible);
//         // setTimeout(()=>{
//         //   setAssetsVisible(false);
//         //   console.log(assetsVisible)
//         // } 2500)
//       } else {
//         setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
//         setCurrentPhoneImageIndex(nextPhoneImageIndex);
//         setAnimationClicked(false);
//         setExtrasVisible(false);
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//         } else {
//           setExtrasVisible(false);
//         }

//         // arrowEntity.setAttribute("visible",false);
//         buttonEntity.addEventListener("click", handleClick);
//         console.log("Event listener added");
//         buttonEntity.removeEventListener("click", handleClick);
//         console.log("Event listener removed");
//         buttonEntity.setAttribute("visible", "true");
//       }
//     };

//     // Check if all assets in the current division are loaded
//     if (nextPhoneAssetIndex !== 0) {
//       loadNextAssets();
//       if (
//         currentDivision === "rtpmethod" ||
//         currentDivision === "refundprocess"
//       ) {
//         setExtrasVisible(true);
//         // arrowEntity.setAttribute("visible",true);
//         if (currentPhoneAssetIndex === 0) {
//           // arrowEntity.setAttribute("visible",true);
//           setExtrasVisible(true);
//         }
//         // else{
//         //     setExtrasVisible(false);
//         // }
//       }
//     } else {
//       const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//       const nextDivision = divisions[nextDivisionIndex];

//       if (nextDivisionIndex === 0 && nextPhoneAssetIndex === 0) {
//         // JSON iteration completed
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//           // arrowEntity.setAttribute("visible",true);
//           if (currentPhoneAssetIndex === 0) {
//             // arrowEntity.setAttribute("visible",true);
//             setExtrasVisible(true);
//           } else {
//             setExtrasVisible(false);
//           }
//         }
//         setTimeout(() => {
//           setAssetsVisible(false);
//           video.style.display = "none";
//           audio.removeAttribute("src");
//           console.log(assetsVisible);
//         }, 2500);
//         return;
//       }
//       setTimeout(() => {
//         setCurrentDivision(nextDivision);
//         setCurrentPhoneAssetIndex(0); // Reset the asset index
//         setCurrentPhoneImageIndex(0); // Reset the image index

//         loadNextAssets();
//       }, 2500);
//     }

//     setTimeout(handleTransition, 2500);
//   };

//   buttonEntity.removeEventListener("click", handleClick);
//   console.log("Event listener removed");
//   buttonEntity.addEventListener("click", handleClick);
//   console.log("Event listener added");

//   const handleDivisionButtonClick = (event) => {
//     const selectedDivision=event.target.value;
//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//     const currentAssets = assetJson[divisions[nextDivisionIndex]];
//     const cacheBuster = new Date().getTime();

//     // Check if the last division is loaded
//     if (
//       nextDivisionIndex === 0 &&
//       currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//     ) {
//       // Last division and last asset loaded, prevent skip
//       return;
//     }

//     // Check if enough time has passed since the last skip
//     if (Date.now() - lastSkipTime < 2500) {
//       // Less than 5 seconds since the last skip, prevent skip
//       return;
//     }

//     // Set the last skip time to the current time
//     setLastSkipTime(Date.now());

//     buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//     setTimeout(() => {
//       // Show the skip button after 5 seconds
//       buttonEntity.setAttribute("visible", "true");

//       // Check if the skip button is clickable (exceeds division length)
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         buttonEntity.setAttribute("visible", "false");
//       }
//     }, 2500);
    
//     setCurrentDivision(event.target.value);
//     setCurrentPhoneAssetIndex(0); // Reset the asset index
//     setCurrentPhoneImageIndex(0); // Reset the image index

//     loadNextAssets(currentAssets, cacheBuster);

//     setTimeout(() => {
//       handleTransition(currentAssets);
//       setTimeout(() => {
//         // Set visibility after the transition
//         buttonEntity.setAttribute("visible", "true");
//       }, 2500);
//     }, 2500);
//   };
//   // appLoadingBtn.addEventListener("click", handleDivisionButtonClick);
//   // appDemoBtn.addEventListener("click", handleDivisionButtonClick);
//   // userRegBtn.addEventListener("click", handleDivisionButtonClick);
//   // paymethodBtn.addEventListener("click", handleDivisionButtonClick);
//   smartDropdown.addEventListener("change", handleDivisionButtonClick);
//   // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//   // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//   // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//   // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);

//   return () => {
//     video.removeEventListener("loadedmetadata", () => {
//       setVideoDuration(video.duration);
//     });
//     video.removeEventListener("ended", handleVideoEnded);
//     video.removeEventListener("play", handleVideoPlay);
//     video.removeEventListener("pause", handleVideoPause);
//     buttonEntity.removeEventListener("click", handleClick);
//     clearTimeout(delayBindingTimeout);
//     skipBtn.removeEventListener("click", handleSkipClick);
//     // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//     // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//     // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//     // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
//     smartDropdown.removeEventListener("change", handleDivisionButtonClick);
//     console.log("Event listener removed");
//   };
// }, [
//   pageLoaded,
//   currentPhoneAssetIndex,
//   currentDivision,
//   currentPhoneImageIndex,
//   assetsVisible,
//   lastSkipTime,
//   // handleTransition,loadNextAssets
// ]);

