import React, { useEffect, useRef, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import { resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import HideVRButton from "./HideVRButton";
import smartmerchant from "../SmartMerchant.jpg";
import scifiglobe from "../SmartMerchantAssets/scifiglobe.glb";
import cards from "../SmartMerchantAssets/CardNewNew.glb";
import "./componentcss/SmartMerchant.css";

function SmartMerchant({ store }) {
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const [zoom, setZoom] = useState(1.5);
  const navigate = useNavigate();
  const [entityVisibility, setEntityVisibility] = useState({
    store: true,
    cards: true,
    // entity3: false,
    // entity4: false,
    // entity5: false,
    // entity6: false,
    // entity7: false,
    // entity8: false,
    // entity9: false,
    // entity10: false,
  });
  const [currentEntityIndex, setCurrentEntityIndex] = useState(0);
  const entityNames = Object.keys(entityVisibility);

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
    const interval = setInterval(() => {
      setEntityVisibility((prevState) => {
        const newState = { ...prevState };
        newState[entityNames[currentEntityIndex]] = true;
        return newState;
      });

      setCurrentEntityIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= entityNames.length ? 0 : nextIndex;
      });
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="scene-container">
      <Scene
        cursor="rayOrigin: mouse"
        raycaster="objects: [data-clickable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene"
        ref={sceneRef}
        vr-mode-ui={{ enabled: true }}
        onEnterVR={handleEnterVR}
        renderer={
          "antialias: true; physicallyCorrectLights: true; shadows: true;"
        }
        embedded={true}
      >
        <Entity
          wasd-controls-enabled="false"
          primitive="a-camera"
          ref={cameraRef}
          position="0 0 0"
          zoom={zoom}
          near="0.1"
          far="1000"
        />
        <a-assets>
          <a-asset-item id="store" src={store} />
          <a-asset-item id="cards" src={cards} />
        </a-assets>

        {Object.entries(entityVisibility).map(
          ([entityName, isVisible], index) => {
            if (index === currentEntityIndex && isVisible) {
              console.log(currentEntityIndex);
              return (
                <a-entity
                  key={entityName}
                  className={`${entityName}-entity`}
                  id={entityName}
                  gltf-model={`#${entityName}`}
                  scale="1 1 1"
                  position="1.8 0 -2"
                  rotation="40 -30 30"
                  animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
                ></a-entity>
              );
            } else {
              return null; // Return null if the entity is not visible
            }
          }
        )}

        <Entity primitive="a-sky" src={smartmerchant} rotation="0 -130 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>

        <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
        <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity>
        <a-entity
          id="directional"
          light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
        ></a-entity>
        <a-entity
          id="spot1"
          light="type: point; castShadow:true; intensity:2.5;  distance:1000; target:globe; color:white;"
          position=" -10 80 -30"
          rotation="130 -40 200"
        ></a-entity>

        <a-light light="type: ambient"></a-light>
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      </Scene>
    </div>
  );
}

export default SmartMerchant;

// import React, { useEffect, useRef, useState } from "react";
// import { Entity, Scene } from "aframe-react";
// import "aframe-extras";
// import { resetUserSession } from "../service/AuthService";
// import { useNavigate } from "react-router-dom";
// import HideVRButton from "./HideVRButton";
// import smartmerchant from "../SmartMerchant.jpg";
// import scifiglobe from "../SmartMerchantAssets/scifiglobe.glb";
// import cards from "../SmartMerchantAssets/Cards.glb";
// import "./componentcss/SmartMerchant.css";

// function SmartMerchant({ store }) {
//   const cameraRef = useRef(null);
//   const sceneRef = useRef(null);
//   const [zoom, setZoom] = useState(1.5);
//   const navigate = useNavigate();

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

//   return (
//     <div className="scene-container">
//       <Scene
//         cursor="rayOrigin: mouse"
//         raycaster="objects: [data-clickable]; far: 100"
//         onWheel={handleZoom}
//         wasd-controls="false"
//         className="scene"
//         ref={sceneRef}
//         vr-mode-ui={{ enabled: true }}
//         onEnterVR={handleEnterVR}
//         renderer={
//           "antialias: true; physicallyCorrectLights: true; shadows: true;"
//         }
//         embedded={true}
//       >
//         <Entity
//           wasd-controls-enabled="false"
//           primitive="a-camera"
//           ref={cameraRef}
//           position="0 0 0"
//           zoom={zoom}
//           near="0.1"
//           far="1000"
//         />
//         <a-assets>
//           <a-asset-item id="store" response-type="arraybuffer" src={store} />
//           <a-asset-item id="cards" response-type="arraybuffer" src={cards} />
//         </a-assets>

//           <a-entity
//             className="store-entity"
//             id="store"
//             gltf-model={store}
//             scale="0.5 0.5 0.5"
//             position="1.8 0 -2"
//             rotation="40 -30 30"
//             animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//           ></a-entity>

//         <a-entity
//           id="cards"
//           gltf-model={cards}
//           scale="3 3 3"
//           position="1.8 0 -2"
//           rotation="40 -30 30"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         ></a-entity>

//         <a-entity
//           id="globe"
//           gltf-model={scifiglobe}
//           scale="0.5 0.5 0.5"
//           position="1 1 1"
//           rotation="40 -30 30"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         ></a-entity>

//         <Entity primitive="a-sky" src={smartmerchant} rotation="0 -130 0" />
//         <a-sky color="#ECECEC" scale="3 3 3"></a-sky>

//         <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
//         <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity>
//         <a-entity
//           id="directional"
//           light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
//         ></a-entity>
//         <a-entity
//           id="spot1"
//           light="type: point; castShadow:true; intensity:2.5;  distance:1000; target:globe; color:white;"
//           position=" -10 80 -30"
//           rotation="130 -40 200"
//         ></a-entity>

//         <a-light light="type: ambient"></a-light>
//         <button className="logout" onClick={logoutHandler}>
//           Logout
//         </button>
//       </Scene>
//     </div>
//   );
// }

// export default SmartMerchant;
