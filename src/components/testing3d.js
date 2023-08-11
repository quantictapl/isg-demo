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
import esy from "../SmartMerchantAssets/esy_new.glb";
import tvImg from "../SmartMerchantAssets/tvBorder.png";

import appLoading1 from "../SmartMerchantAssets/apploading/apploading1.glb";
import appLoading2 from "../SmartMerchantAssets/apploading/apploadingtwo.glb";
import appLoading3 from "../SmartMerchantAssets/apploading/apploadingthree.glb";
import appLoading4 from "../SmartMerchantAssets/apploading/apploading4.glb";
import qrcode from "../SmartMerchantAssets/apploading/appimages/Qrcode.PNG";
import appimg2 from "../SmartMerchantAssets/apploading/appimages/2.png";
import appimg3 from "../SmartMerchantAssets/apploading/appimages/3.png";
import appimg4 from "../SmartMerchantAssets/apploading/appimages/4.png";
import buttonvideo from "../videos/circle.mp4";
import AFRAME from "aframe";
import demoAudio1 from "../SmartMerchantAssets/videos/videoplayback.mp4";
import demoAudio from "../SmartMerchantAssets/videos/demoSpeech1.webm";
import demoTransparent from "../SmartMerchantAssets/videos/dialog2.webm";
import demoTransparent2 from "../SmartMerchantAssets/videos/dialog1.webm";
import "./componentcss/AppDemonstration.css";
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
import rtpmethod1 from "../SmartMerchantAssets/rtp/rtpmethod1.glb";
import rtpmethod2 from "../SmartMerchantAssets/rtp/rtpmethod2.glb";
import rtpmethod3 from "../SmartMerchantAssets/rtp/rtpmethod3.glb";
import rtpmobile from "../SmartMerchantAssets/rtp/rtpmobile.glb";
import rtpimg1 from "../SmartMerchantAssets/rtp/rtpimages/1.png";
import rtpimg2 from "../SmartMerchantAssets/rtp/rtpimages/2.png";
import rtpimg3 from "../SmartMerchantAssets/rtp/rtpimages/3.png";
import arrow from "../SmartMerchantAssets/videos/arrow.webm";
import arrowscreen from "../SmartMerchantAssets/videos/arrowscreen.jpg";
import recpay from "../SmartMerchantAssets/recordpayment/recpay.glb";
import recpayvideo1 from "../SmartMerchantAssets/recordpayment/2.webm";
import datahandling from "../SmartMerchantAssets/datahandling/datahandlingasset.glb";
import refundasset from "../SmartMerchantAssets/refundprocess/refundasset.glb";
import refundimg from "../SmartMerchantAssets/refundprocess/refundimg.png";
import refundmobile from "../SmartMerchantAssets/refundprocess/refundmobile.glb";
import apploading1 from "../SmartMerchantAssets/apploading1.glb";
import "aframe-text-geometry-component";

function Testing3d() {
  const cameraRef = useRef(null);
  const cameraRotationRef = useRef(null);
  const sceneRef = useRef(null);
  const [zoom, setZoom] = useState(1.5);
  const navigate = useNavigate();

  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    const button = document.getElementById("buttonvideo");
    const recpay = document.getElementById("recpay");
    // const phoneImg = document.getElementById("phone-img");
    // phoneImg.muted = true;
    button.muted = true;
    recpay.muted = true;
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      // Do something with each div element
      video.play();
    }
    button.play();
  }, []);
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
  useEffect(() => {
    const esy = document.getElementById("esy");
    esy.object3D.lookAt("[camera]");
  }, []);
  return (
    <div className="scene-container">
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
            // look-controls
            // looklimited
          >
            {/* <a-entity
          gltf-model={rtpmethod1}
          scale="0.034 0.034 0.034"
          rotation="-68.85348415646128 -169.53248200125927 -12.258432026823963"
          position="-0.1445 -1.86661 -2.86936"
          // shadow="cast:true;"
          animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        /> */}

            {/* <a-entity
              gltf-model={refundasset}
              scale="0.034 0.034 0.034"
              rotation="-62.42890839965937 -172.72557579352335 3.9614301955345113"
              position="-1.0364 -3.02252 -3.46246"
              animation-mixer="clip:;loop:repeat;repeat:infinite;"
            ></a-entity> */}
            {/* <a-entity gltf-model={rtpmobile} scale="3 3 3" rotation="-46.78658763479276 -10.097808181385629 8.462013676287128" position="-0.28567 -3.11816 0.51216" animation-mixer="clip: Animation"></a-entity>
               <a-entity id="phone-asset" gltf-model={rtpmethod1} scale="0.60589 0.60589 0.60589" position="-0.77297 -2.61681 -2.98667" rotation="-61.526499872328316 -169.76051920372137 -0.8416750010471793" animation-mixer=""></a-entity> */}
            {/* <a-entity material={`shader: flat; color: white; transparent: true; src: `} geometry="primitive: plane; width: 5.45; height: 2.96"  position="-0.65925 0.12821 -1.37255"rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}
            {/* <a-entity gltf-model="/static/media/rtpmobile.de056e1a27b7b6f58e8e.glb" scale="3 3 3" rotation="-46.78658763479276 -10.097808181385629 8.462013676287128" position="-0.36309 -3.12602 0.50687" animation-mixer="clip: Animation"></a-entity>
              <a-entity material="shader: flat; color: white; transparent: true; src: /static/media/arrowscreen.7525b38788b828f009cf.jpg" geometry="primitive: plane; width: 5.45; height: 2.96" position="-0.65925 0.12821 -1.37255" rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}
            {/* <a-entity id="phone-video" material={`shader: flat; alphaTest: 0.5; src:#recpay; transparent: true;`} geometry="primitive: plane; width: 2; height: 3.8" position="-0.10666 0.00896 -0.74898" rotation="-1.1401860123103382 2.6865991013684303 1.1258620674320676" scale="0.12009 0.13536 0.12009"></a-entity> */}

            {/* <a-entity id="phone-video" material="shader: flat; alphaTest: 0.5; src:#recpay;  transparent: true" geometry="primitive: plane; width: 2; height: 3.8" position="-0.10769 -0.0083 -0.7636" rotation="-2.3073010409918253 4.6564280010282 -1.7647100090029355" scale="0.11844 0.1355 0.12"></a-entity> */}
            {/* <a-entity
              id="phone-img"
              material={`shader: flat;  alphaTest:0.5; src:${qrcode};   transparent: true;`}
              geometry="primitive: plane; width: 3.8; height: 3.8"
              position="0.00396 0.08907 -0.96379"
              rotation="2.8447354528245374 -0.4526366581533504 -0.1753250853100319"
              scale="0.2 0.2 0.2"
            ></a-entity> */}
          
            {/* <a-entity
              id="rtp-phone"
              gltf-model={refundmobile}
              scale="3 3 3"
              rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
              position="-0.36309 -3.12602 0.50687"
              animation-mixer="clip: Animation"
            ></a-entity> */}
            <a-entity
              id="animation-button"
              material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
              geometry="primitive: circle; radius: 0.2; theta-length: 360"
              position="0.620 -0.294  -0.877"
              rotation="0 0 0"
              scale="-0.2 0.2 0.2"
              // visible={buttonVisibilityAttribute}
              // onClick={handleAnimationClick}
              event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
              event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
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
          <video
            className="displayVideo"
            // because when muted even when hard reloaded the videos are not playing dont be scared
            id="recpay"
            preload="auto"
            src={recpayvideo1}
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
        {/* <a-entity position="-0.14076 -3.07192 0.82356" gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="10.325000000000001 138.48389908311995 -10.957817831876994" animation-mixer="clip: Animation"></a-entity> */}
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
        {/* <a-entity
          id="spot1"
          light="type: spot; castShadow: true; intensity: 2.5; distance: 15; color: white; angle: 60.16"
          position="6.26958 3.91449 64.86643"
          rotation="49.99973494988642 -156.67244428954794 20.000237754631645"
        ></a-entity> */}
        {/* <a-entity
          light="color: #ffffff; decay: 0; distance: 15.8; intensity: 4; type: spot"
          id="spot-light"
          position="-2.52809 0.72938 2"
        ></a-entity>
        <a-entity
          light="color: #ffffff; decay: 0; distance: 15.8; intensity: 4; type: point"
          id="point-light"
          position="-2.52809 0.72938 2"
        ></a-entity> */}
        {/* <a-entity
          light="color: #ffffff; decay: 0; distance: 15.8; intensity: 4; type: ambient"
          id="ambient-light"
          position="-2.52809 0.72938 2"
        ></a-entity> */}
        {/* <a-entity
          id="spot2"
          light="type: spot; castShadow: true; intensity: 3.8; decay: 0; distance: 15; color: white; angle: 60.16"
          position="-3.47559 2.02332 -3.3246"
        ></a-entity> */}
        {/* <a-entity
          id="spot3"
          light="type: spot; castShadow: true; intensity: 3.4; decay: 0; distance: 15; color: white; angle: 60.16"
          position="3.47559 2.02332 -6.3246"
        ></a-entity> */}

        {/* <a-entity
          gltf-model={paymentMethod}
          position="1.8 0 -2"
          scale="0.5 0.5 0.5"
          rotation="10.325 -34.608 -10.958."
          // shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}
         <a-entity id="spot1" light="type: spot; castShadow: true; intensity: 100; distance: 200; color: white; penumbra: 1; angle: 50" position="33.93341 -8.73035 2.17684" rotation="6.428013503572705 68.01123619761897 -62.418595159347014" scale="0.2 0.2 0.2"></a-entity>{" "}
        intensity:400
        <a-entity id="spot2" light="type: spot; castShadow: true; intensity: 100; distance: 200; color: white; penumbra: 1; angle: 50" position="-16.72171 -0.32872 7.37116" rotation="-9.325461073549278 -40.8799657247891 7.023889610508762" scale="0.2 0.2 0.2"></a-entity>{" "}
        intensity:800
        <a-entity
          id="spot3"
          light="type: spot; castShadow: true;  intensity: 1.5; distance: 400; color: white; decay: 1.01; penumbra: 0.63; shadowBias: 0.57"
          position="-57.44097 32.16745 84.66318"
          rotation="-5.005359298262872 -46.50240056840788 41.34119674986942"
        ></a-entity>{" "}
        intensity:400
        <a-entity
          gltf-model={esy}
          id="esy"
          position="-1 -6 -12"
          scale="0.18 0.18 0.18"
          rotation="0 1  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        />
        <a-entity id="menu"  position="25.861 11.406 28.091" rotation="0 25.281 0">
          <a-entity

            id="rtpmethod"
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

            id="appdemomenu"
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

            id="userregmenu"
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

            id="paymethodmenu"
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
        </a-entity>
        <a-entity id="menu2"  position="25.861 11.406 28.091" rotation="0 25.281 0">
          <a-entity

            id="rtpmethod"
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
              text-geometry="value: RTP Method"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity

            id="recpay"
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
              text-geometry="value: Records/Payments"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity

            id="datahandling"
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
              text-geometry="value: Data Handling"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity

            id="refundprocess"
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
              text-geometry="value:Refund Process"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
        </a-entity>
        <a-entity
          //SmartMerchantDoor
          id="#smartgate"
          material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
          geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
          position="-99.087 -20.10092 122.78598"
          rotation="0 -212.78 0"
          scale="2.65625 2.65625 2.65625"
          // onClick={handleLobbyClick}
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

export default Testing3d;
