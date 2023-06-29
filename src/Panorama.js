import React, { useEffect, useRef, useState } from "react";
// import doorchange from "./helpers/DoorChange.js";
// register doorchange(AFRAME);
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import "./Panorama.css";
import * as THREE from 'three';
import { resetUserSession } from "./service/AuthService";
import { useNavigate } from "react-router-dom";
import "aframe-environment-component";
import "aframe-event-set-component";
import HideVRButton from "./components/HideVRButton";
import "aframe-ui-components";
import "aframe-inspector";
import SmartgateHover from "./LobbyEntitiy/smartgateHover";
import PaymentGateHovered from "./LobbyEntitiy/paymentgateHovered";
import LobbyVideos from "./LobbyEntitiy/LobbyVideo";
function Panorama({ src, birdSrc, globe, ellie }) {
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraContainerRef=useRef(null); 
  const [mute,setMute]=useState(true);
  const [zoom, setZoom] = useState(1.5);
  const navigate = useNavigate();
  const [isRotated,setIsRotated]=useState(false);
  const defaultRotationRef = useRef(null);
  const [playVideo,setPlayVideo]=useState(false)
  // let cameraRig; // Declare a global variable

  // useEffect(() => {
  //   // Retrieve the default rotation after the component mounts
  //   const defaultRotation = cameraRef.current.getComputedAttribute('rotation');
  //   defaultRotationRef.current = defaultRotation;
  // }, []);
  // useEffect(() => {
  //   const aframeScene = document.querySelector("a-scene");
  //   if (aframeScene.hasLoaded) {
  //     // If the scene has already loaded, initialize the inspector immediately
  //     aframeScene.components["inspector"].open();
  //   } else {
  //     // If the scene is still loading, wait for the "loaded" event before initializing the inspector
  //     aframeScene.addEventListener("loaded", () => {
  //       aframeScene.components["inspector"].open();
  //     });
  //   }
  // }, []);
  // useEffect(() => {
  //   const handleInspectorShortcut = (event) => {
  //     if (event.ctrlKey && event.altKey && event.key === "i") {
  //       const aframeScene = document.querySelector("a-scene");
  //       if (aframeScene.components["inspector"].isOpen) {
  //         aframeScene.components["inspector"].close();
  //       } else {
  //         aframeScene.components["inspector"].open();
  //       }
  //     }
  //   };
  
  //   window.addEventListener("keydown", handleInspectorShortcut);
  //   return () => {
  //     window.removeEventListener("keydown", handleInspectorShortcut);
  //   };
  // }, []);
  // useEffect(() => {
  //   const aframeInspector = document.createElement('aframe-inspector');
  //   document.body.appendChild(aframeInspector);
  // }, []);
  
  const handleZoom = (event) => {
    const newZoom = zoom + event.deltaY * -0.008;
    if (newZoom >= 1.5 && newZoom <= 5 ) {
      setZoom(newZoom);
      setIsRotated(false)
    }
  };
  // const handleMouseMove = (event) => {
  //   // Update cursor position based on mouse coordinates
  //   setCursorPosition({ x: event.clientX, y: event.clientY});
  // };
  const logoutHandler = () => {
    resetUserSession();
    navigate("/login");
  };
  useEffect(() => {
    window.addEventListener("wheel", handleZoom);
    return () => window.removeEventListener("wheel", handleZoom);
  });
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const normalizedX = (clientX / innerWidth) * 2 - 1;
      const normalizedY = (clientY / innerHeight) * -2 + 1;
      const cursor = document.getElementById("cursor-btn");
      cursor.setAttribute("position", `${normalizedX} ${normalizedY} -1`);
    };
   
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const handleButtonClick = (event) => {
    alert("Hello, world!");
    event.target.blur();
  };
  const handleEnterVR = () => {
    if (sceneRef.current) {
      const sceneEl = sceneRef.current.sceneEl;
      if (sceneEl.is("vr-mode")) {
        // In VR mode, add the button as a child of the canvas
        const canvas = document.querySelector("a-scene").canvas;
        canvas.appendChild(createButton());
      }
    }
  };
  const createButton = () => {
    const button = document.createElement("button");
    button.innerText = "Click me!";
    button.style.position = "fixed";
    button.style.top = "20px";
    button.style.left = "20px";
    button.addEventListener("click", () => console.log("Button clicked!"));
    return button;
  };
  const handleMerchantClick = (event) => {
    event.stopPropagation();
    navigate("/smartmerchant");
    console.log("merchant button clicked"); // Replace "/your-route" with the desired path
  };
  console.log(mute)
  useEffect(() => {
    //later try changing the useRef as seen in smartgate useEffect
    const cameraRig = document.getElementById('camerarig');
    cameraRig.object3D.rotation.x = THREE.MathUtils.degToRad(0);
    cameraRig.object3D.rotation.y = THREE.MathUtils.degToRad(45);
    cameraRig.object3D.rotation.z = THREE.MathUtils.degToRad(0);
    cameraRig.object3D.position.x = THREE.MathUtils.degToRad(0);
    cameraRig.object3D.position.y = THREE.MathUtils.degToRad(0);
    cameraRig.object3D.position.z = THREE.MathUtils.degToRad(0);
    // const smartgate=document.getElementById("smartgate");
    // smartgate.addEventListener('mouseenter', function() {
    //   alert('mouseenter');
    // });
  });
  // const handlePlayAllVideoBtnClick=()=>{
  //   setPlayVideo(true);
  // }
  
  

  const handleCameraZoom = () => {
    
    setZoom(prevZoom => (prevZoom >= 1.5 ? 5 : 1.5));
    setMute(!mute)
    // cameraRig.object3D.rotation.set(0, -157, 0);
    // setRotation(prevrotation => ({
    //   ...prevrotation,
    //   y: prevrotation.y !== -157 ? -157 : prevrotation.y
    // }));
    setIsRotated(!isRotated)
    console.log(isRotated)  
    // console.log(cameraRig.getAttribute('rotation'))
    
    
  };
  const handleMuteChange=()=>{
    setMute(!mute)
   }
 
  const rotation1=" 0 10 0";
  const defaultRotation="0 -45 0";
  
  return (
    <div className="scene-container">
      <HideVRButton />
      {/* <button className="video-play-button" onClick={handlePlayAllVideoBtnClick}>Play all videos</button>  */}
      <Scene 
      // inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
        // cursor="rayOrigin: mouse"
        cursor__mouse="rayOrigin: mouse"
        // raycaster="objects: [gui-interactable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene" ref={sceneRef} vr-mode-ui={{ enabled: true }} onEnterVR={handleEnterVR}
        renderer={
          "antialias: true; physicallyCorrectLights: true; " //shadow:true property was here
        }
        embedded={true}
      >
        {/* <SmartGate/> */}
        <a-entity id="camerarig" className="camera-rig"  raycaster="objects: [gui-interactable];" ref={cameraContainerRef}
        position="0 0 0"
        // rotation={`0 ${isRotated ?  -19:0} 0 `}
        //  rotation={isRotated ? rotation1 : defaultRotation}
        // rotation={rotation}
        >
          
        <Entity
          id="camera"
          // camera={`active: ${isRotated ? 'true' : 'false'}`}
          wasd-controls-enabled="false"
          primitive="a-camera"  ref={cameraRef} position="0 0 0" zoom={zoom} near="0.5" far="10000" 
          camera="active:true"
          // reverse-mouse-drag 
        >
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
        
        <a-entity
          geometry="primitive: cylinder radius: 9.2; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 63"
          material="color: red"
          light="type: point; intensity: 2.0"
          position="20 0 -3" rotation="0 45 0" raycaster="objects: [gui-interactable]" onClick={handleButtonClick}
        ></a-entity>
        <a-entity
        //tv zoom
          id="tvzoom-btn" 
          material="shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:#btn;"
          geometry="primitive: circle; radius: 0.2; theta-length: 360"
          position="4.1 -0.735 10"
          rotation="0 215 0"
          scale="1 1 1"
          // text="width: 2; value:Play; color:red; align:center;"
          onClick={handleCameraZoom}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
        ></a-entity>
        <SmartgateHover/>
        <PaymentGateHovered/> 
        <LobbyVideos playVideo={playVideo} mute={mute}/>
        
        <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity>
        <a-entity
          id="directional"
          light="type: directional; castShadow:true; intensity:3;  position:0 20 0; color:#FFFFFF"
        ></a-entity>
        <a-entity
          id="spot1"
          light="type: point; castShadow:true; intensity:2;  distance:10000; target:#globe; color:white;"
          position="0 10 20 "
          rotation="130 -40 200"
        ></a-entity>
        <a-entity
          id="spot1"
          light="type: point; castShadow:true; intensity:2;  distance:2000; target:#globe; color:white;"
          position=" 20 10 20" rotation="0 0 0"
          // raycaster="objects: [gui-interactable]; far: 100"
        ></a-entity>
        <a-light light="type: ambient"></a-light>

        <Entity primitive="a-sky" src={src} rotation="0 -130 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
        <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />

        <a-entity
          id="buttonContainer"
          position="-1.5 -1.5 -3"
          rotation="0 -45 0"
        >
          <a-button
            width="2.5" height="0.7" base-depth="0.025" depth="0.1" gap="0.1"
            rotation="0 40 0"
            position="-25 1 -15"
            onClick={handleButtonClick}
          ></a-button>
        </a-entity>

        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>

        <a-assets>
          <a-asset-item id="bird" response-type="arraybuffer" src={birdSrc} />
          <a-asset-item id="globe" response-type="arraybuffer" src={globe} />
        </a-assets>
        <a-entity
          className="girl" gltf-model={ellie} scale="8 8 8" position="0 -40.2 380" rotation="0 180 0"
          animation-mixer="clip:Armature|mixamo.com|Layer0; loop:repeat;  repetitions: Infinity;"
          // shadow="cast:true;"
        ></a-entity>
        <a-entity
          id="globe"
          gltf-model={globe} scale="1000 1000 1000" position="0 -40 380" rotation="0 0 0"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
          // shadow="cast:true;"
        ></a-entity>
      </Scene>
    </div>
  );
}

export default Panorama;





// import React, { useEffect, useRef, useState } from "react";
// // import doorchange from "./helpers/DoorChange.js";
// // register doorchange(AFRAME);
// import "aframe";
// import { Entity, Scene } from "aframe-react";
// import "aframe-extras";
// import "./Panorama.css";
// import * as THREE from 'three';
// import { resetUserSession } from "./service/AuthService";
// import { useNavigate } from "react-router-dom";
// import "aframe-environment-component";
// import "aframe-event-set-component";
// import HideVRButton from "./components/HideVRButton";
// import "aframe-ui-components";

// import wallbrand from "./videos/wallbrand.mp4";
// import frontwall from "./videos/frontdoorwall.mp4";
// import tv from "./videos/tvvideo.mp4";
// import wifi from "./videos/wifi.mp4";
// import btn from "./videos/circle.mp4"
// import SmartGate from "./components/Smartgate";
// import SmartgateHover from "./LobbyEntitiy/smartgateHover";
// import PaymentGateHovered from "./LobbyEntitiy/paymentgateHovered";
// import LobbyVideos from "./LobbyEntitiy/LobbyVideo";
// function Panorama({ src, birdSrc, globe, ellie }) {
//   const cameraRef = useRef(null);
//   const sceneRef = useRef(null);
//   const paymentgateRef = useRef(null);
//   const cameraContainerRef=useRef(null) 
//   const [zoom, setZoom] = useState(1.5);
//   const [isSmartHovered, setIsSmartHovered] = useState(false);
//   const [isPaymentHovered, setIsPaymentHovered] = useState(false);
//   const navigate = useNavigate();
//   const [rotation,setRotation]=useState({x:0,y:-45,z:0})
//   const [isRotated,setIsRotated]=useState(false)
//   const defaultRotationRef = useRef(null);
//   // let cameraRig; // Declare a global variable

//   // useEffect(() => {
//   //   // Retrieve the default rotation after the component mounts
//   //   const defaultRotation = cameraRef.current.getComputedAttribute('rotation');
//   //   defaultRotationRef.current = defaultRotation;
//   // }, []);
  
  
//   const handleZoom = (event) => {
//     const newZoom = zoom + event.deltaY * -0.008;
//     if (newZoom >= 1.5 && newZoom <= 5 ) {
//       setZoom(newZoom);
//       setIsRotated(false)
//     }
//   };
//   // const handleMouseMove = (event) => {
//   //   // Update cursor position based on mouse coordinates
//   //   setCursorPosition({ x: event.clientX, y: event.clientY});
//   // };
//   const logoutHandler = () => {
//     resetUserSession();
//     navigate("/login");
//   };
//   useEffect(() => {
//     window.addEventListener("wheel", handleZoom);
//     return () => window.removeEventListener("wheel", handleZoom);
//   });
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       const { innerWidth, innerHeight } = window;
//       const normalizedX = (clientX / innerWidth) * 2 - 1;
//       const normalizedY = (clientY / innerHeight) * -2 + 1;
//       const cursor = document.getElementById("cursor-btn");
//       cursor.setAttribute("position", `${normalizedX} ${normalizedY} -1`);
//     };
   
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);
//   const handleButtonClick = (event) => {
//     alert("Hello, world!");
//     event.target.blur();
//   };
//   const handleEnterVR = () => {
//     if (sceneRef.current) {
//       const sceneEl = sceneRef.current.sceneEl;
//       if (sceneEl.is("vr-mode")) {
//         // In VR mode, add the button as a child of the canvas
//         const canvas = document.querySelector("a-scene").canvas;
//         canvas.appendChild(createButton());
//       }
//     }
//   };
//   const createButton = () => {
//     const button = document.createElement("button");
//     button.innerText = "Click me!";
//     button.style.position = "fixed";
//     button.style.top = "20px";
//     button.style.left = "20px";
//     button.addEventListener("click", () => console.log("Button clicked!"));
//     return button;
//   };
//   const handleMerchantClick = (event) => {
//     event.stopPropagation();
//     navigate("/smartmerchant");
//     console.log("merchant button clicked"); // Replace "/your-route" with the desired path
//   };

//   useEffect(() => {
//     //later try changing the useRef as seen in smartgate useEffect
//     const cameraRig = document.getElementById('camerarig');
//     cameraRig.object3D.rotation.x = THREE.MathUtils.degToRad(0);
//     cameraRig.object3D.rotation.y = THREE.MathUtils.degToRad(45);
//     cameraRig.object3D.rotation.z = THREE.MathUtils.degToRad(0);
//     cameraRig.object3D.position.x = THREE.MathUtils.degToRad(0);
//     cameraRig.object3D.position.y = THREE.MathUtils.degToRad(0);
//     cameraRig.object3D.position.z = THREE.MathUtils.degToRad(0);
//     // const smartgate=document.getElementById("smartgate");
//     // smartgate.addEventListener('mouseenter', function() {
//     //   alert('mouseenter');
//     // });
//   });
//   useEffect(() => {
//     const paymentgate= paymentgateRef.current
//     paymentgate.addEventListener('mouseenter', function() {
//       setIsPaymentHovered(true);
//     });
//     paymentgate.addEventListener('mouseleave', function() {
    
//       setIsPaymentHovered(false);
//     });
//   },[isSmartHovered,isPaymentHovered]);
  
  

//   const handleCameraZoom = () => {
    
//     setZoom(prevZoom => (prevZoom >= 1.5 ? 5 : 1.5));
//     // cameraRig.object3D.rotation.set(0, -157, 0);
//     // setRotation(prevrotation => ({
//     //   ...prevrotation,
//     //   y: prevrotation.y !== -157 ? -157 : prevrotation.y
//     // }));
//     setIsRotated(!isRotated)
//     console.log(isRotated)  
//     // console.log(cameraRig.getAttribute('rotation'))
    
    
//   };
 
//   const rotation1=" 0 10 0";
//   const defaultRotation="0 -45 0";
  
//   return (
//     <div className="scene-container">
//       <HideVRButton />
//       <Scene
//         // cursor="rayOrigin: mouse"
//         cursor__mouse="rayOrigin: mouse"
//         // raycaster="objects: [gui-interactable]; far: 100"
//         onWheel={handleZoom}
//         wasd-controls="false"
//         className="scene" ref={sceneRef} vr-mode-ui={{ enabled: true }} onEnterVR={handleEnterVR}
//         renderer={
//           "antialias: true; physicallyCorrectLights: true; " //shadow:true property was here
//         }
//         embedded={true}
//       >
//         {/* <SmartGate/> */}
//         <a-entity id="camerarig" className="camera-rig"  raycaster="objects: [gui-interactable];" ref={cameraContainerRef}
//         position="0 0 0"
//         // rotation={`0 ${isRotated ?  -19:0} 0 `}
//         //  rotation={isRotated ? rotation1 : defaultRotation}
//         // rotation={rotation}
//         >
          
//         <Entity
//           id="camera"
//           // camera={`active: ${isRotated ? 'true' : 'false'}`}
//           wasd-controls-enabled="false"
//           primitive="a-camera"  ref={cameraRef} position="0 0 0" zoom={zoom} near="0.5" far="10000" 
//           camera="active:true"
//           // reverse-mouse-drag 
//         >
//           {/* <a-gui-cursor
//             id="cursor-btn"
//             raycaster="objects: [gui-interactable]"
//             // fuse="true"
//             // fuse-timeout="2000"
//             scale="0.2 0.2 0.2"
//             // Set cursor position based on cursorPosition state
//             // position={`${cursorPosition.x} ${cursorPosition.y} -1`}
//             position=" 0 0 -1" 
//             onClick={handleMerchantClick}
//           ></a-gui-cursor> */}
//           {/* <a-cursor id="cursor" raycaster fuse="true" fusetimeout="2000"></a-cursor> */}
//           {/* <Entity primitive="a-cursor" raycaster fuse="true" fusetimeout="2000" /> */}
//           <a-entity
//             cursor="fuse: false;"
//             id="cursor-btn"
//             // position={`${cursorPosition.x} ${cursorPosition.y} -1 `}
//             // position=" 0 0 -1"
//             geometry="primitive: ring; radiusInner: 0.0001; radiusOuter: 0.0002"
//             // animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
//             // animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
//             // animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
//             material="color: black; shader: flat"
//             raycaster="objects: [gui-interactable]; near:1 far:20;"
//             // onClick={handleMerchantClick}
//           ></a-entity>
//         </Entity>
//         </a-entity>
        
//         <a-entity
//           geometry="primitive: cylinder radius: 9.2; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 63"
//           material="color: red"
//           light="type: point; intensity: 2.0"
//           position="20 0 -3" rotation="0 45 0" raycaster="objects: [gui-interactable]" onClick={handleButtonClick}
//         ></a-entity>
//         <a-entity
//         //tv zoom
//           id="tvzoom-btn" 
//           material="shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:#btn;"
//           geometry="primitive: circle; radius: 0.2; theta-length: 360"
//           position="4 0.3 10"
//           rotation="0 215 0"
//           scale="1 1 1"
//           // text="width: 2; value:Play; color:red; align:center;"
//           onClick={handleCameraZoom}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
//         ></a-entity>
//          {<SmartgateHover/>} 
//          {/* {isPaymentHovered && <PaymentGateHovered isPaymentHovered={isPaymentHovered}/>} */}
        
//         <a-entity
//           //PaymentGatewayDoor
//           ref={paymentgateRef}
//           id="#paymentgate"
//           material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
//           geometry="primitive: cylinder; radius: 9.2; height: 6.3; open-ended: true; theta-start: 142.5; theta-length: 51.5"
//           position="7.94 0 -42"
//           rotation="-180 -10 0"
//           scale="1.3 1.3 1.3"
//           onClick={() => {
//             alert(
//               "hello the Payment Gateway is not ready yet, Please try again later"
//             );
//           }}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0"
//         ></a-entity>
//         {/* <Entity primitive="a-box" position="0 1 -3" width="2" height="2" depth="0.1"  material="color: red" ></Entity> Add the door-changes component to the box */}
//         <LobbyVideos/>
        
//         <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity>
//         <a-entity
//           id="directional"
//           light="type: directional; castShadow:true; intensity:3;  position:0 20 0; color:#FFFFFF"
//         ></a-entity>
//         <a-entity
//           id="spot1"
//           light="type: point; castShadow:true; intensity:2;  distance:10000; target:#globe; color:white;"
//           position="0 10 20 "
//           rotation="130 -40 200"
//         ></a-entity>
//         <a-entity
//           id="spot1"
//           light="type: point; castShadow:true; intensity:2;  distance:2000; target:#globe; color:white;"
//           position=" 20 10 20" rotation="0 0 0"
//           // raycaster="objects: [gui-interactable]; far: 100"
//         ></a-entity>
//         <a-light light="type: ambient"></a-light>

//         <Entity primitive="a-sky" src={src} rotation="0 -130 0" />
//         <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
//         <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />

//         <a-entity
//           id="buttonContainer"
//           position="-1.5 -1.5 -3"
//           rotation="0 -45 0"
//         >
//           <a-button
//             width="2.5" height="0.7" base-depth="0.025" depth="0.1" gap="0.1"
//             rotation="0 40 0"
//             position="-25 1 -15"
//             onClick={handleButtonClick}
//           ></a-button>
//         </a-entity>

//         <button className="logout" onClick={logoutHandler}>
//           Logout
//         </button>

//         <a-assets>
//           <a-asset-item id="bird" response-type="arraybuffer" src={birdSrc} />
//           <a-asset-item id="globe" response-type="arraybuffer" src={globe} />
//         </a-assets>
//         <a-entity
//           className="girl" gltf-model={ellie} scale="8 8 8" position="0 -40.2 380" rotation="0 180 0"
//           animation-mixer="clip:Armature|mixamo.com|Layer0; loop:repeat;  repetitions: Infinity;"
//           // shadow="cast:true;"
//         ></a-entity>
//         <a-entity
//           id="globe"
//           gltf-model={globe} scale="1000 1000 1000" position="0 -40 380" rotation="0 0 0"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//           // shadow="cast:true;"
//         ></a-entity>
//       </Scene>
//     </div>
//   );
// }

// export default Panorama;
