import React, { useEffect, useRef, useState } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import "./Panorama.css";
import {resetUserSession} from "./service/AuthService"
import { useNavigate } from "react-router-dom";
import 'aframe-environment-component';
import HideVRButton from "./components/HideVRButton";
function Panorama({ src, modelSrc, birdSrc, girl, glitchWalk, globe }) {
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const [zoom, setZoom] = useState(1.5);
  const navigate=useNavigate();

  const handleZoom = (event) => {
    const newZoom = zoom + event.deltaY * -0.01;
    if (newZoom >= 1 && newZoom <= 5) {
      setZoom(newZoom);
    }
  };
  const logoutHandler=()=>{
    resetUserSession();
    navigate("/login");
  }
  useEffect(() => {
    window.addEventListener("wheel", handleZoom);
    return () => window.removeEventListener("wheel", handleZoom);
  });
  const handleButtonClick = () => {
    alert("Hello, world!");
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
  const handleMerchantClick = () => {
    navigate("/smartmerchant");
    console.log("merchant button clicked") // Replace "/your-route" with the desired path
  };
  return (
    <div className="scene-container">
       <HideVRButton />
      <Scene
        cursor="rayOrigin: mouse"
        raycaster="objects: [data-clickable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene"
        ref={sceneRef}
        vr-mode-ui={{ enabled: true }}
        onEnterVR={handleEnterVR}
        renderer={"antialias: true; physicallyCorrectLights: true; shadows: true;"}
        embedded={true}
      >
        
        {/* <a-plane
          color="grey"
          scale="100000 100000 1000000"
          repeat="1000000 1000000 100000"
          shadow="receive:true"
          position="0 -100 0"
          rotation="-90 0 0"
          transparent="true"
          opacity="0.2"

        ></a-plane> */}
        
        
        <Entity
          wasd-controls-enabled="false"
          primitive="a-camera"
          ref={cameraRef}
          position="0 0 0"
          zoom={zoom}
          near="0.1"
          far="1000"
        />
        <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity>
        <a-entity id="directional" light="type: directional; castShadow:true; intensity:4;  position:0 20 0; color:#FFFFFF"></a-entity>
        <a-entity id="spot1" light="type: point; castShadow:true; intensity:2;  distance:10000; target:globe; color:white;" position="0 10 20 " rotation="130 -40 200"></a-entity>
        <a-entity id="spot1" light="type: point; castShadow:true; intensity:2;  distance:2000; target:globe; color:white;" position=" 20 10 20" rotation="0 0 0" raycaster="objects: [data-clickable]; far: 100"></a-entity>
        <a-light light="type: ambient"></a-light>


        <Entity primitive="a-sky" src={src} rotation="0 -130 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
        <a-entity
          gltf-model={modelSrc}
          position="0.3 -0.25 -1"
          scale="0.5 0.5 0.5"
          rotation="0 -100 0"
          shadow="cast:true;"
        />
        <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
        <Entity
          geometry={{ primitive: "box", width: 0.5, height: 0.2, depth: 0.1 }}
          material={{ color: "red" }}
          position="0 1 -3"
          onClick={handleMerchantClick} // Call handleMerchantClick on button click
          raycaster="objects: [data-clickable]"
          data-clickable // Enable raycaster interaction
        >
          <Entity text={{ value: "Click me!", align: "center" }} position="0 0 0.05" />
        </Entity>

        

        <Entity
          position="3 0 -4"
          geometry={{ primitive: "box", width: 0.5, height: 0.2, depth: 0.1 }}
          material={{ color: "red" }}
        >
          <Entity
            className="clickables"
            position="0 0 0.05"
            text={{ value: "Click me!" }}
            onClick={handleButtonClick}
          />
        </Entity>
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>

        <a-assets>
          <a-asset-item id="bird" response-type="arraybuffer" src={birdSrc} />
          <a-asset-item id="girl" response-type="arraybuffer" src={girl} />
          <a-asset-item
            id="girl"
            response-type="arraybuffer"
            src={glitchWalk}
          />
        </a-assets>

        <a-entity
          gltf-model={birdSrc}
          scale="0.01 0.01 0.01"
          position="1 -2 -10"
          rotation="0 180 0"
          animation-mixer="clip:Take 001; 
       loop:repeat;  
       repetitions: Infinity;"
          shadow="cast:true;"
        ></a-entity>
        <a-entity className="girl"
          gltf-model={girl}
          scale="1 1 1"
          position="-10 -3 -8"
          rotation="0 60 0"
          animation-mixer="clip:Idle; 
       loop:repeat;  
       repetitions: Infinity;"
          shadow="cast:true;"
        ></a-entity>
        <a-entity
        id="globe"
          gltf-model={globe}
          scale="1000 1000 1000"
          position="0 -40 380"
          rotation="0 0 0"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
          // shadow="cast:true;"
        ></a-entity>
      </Scene>
    </div>
  );
}

export default Panorama;
