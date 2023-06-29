import React, { useEffect,useState } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from 'three';
import "aframe-environment-component";
import "aframe-event-set-component";
import "aframe-ui-components";
import wallbrand from "../videos/wallbrand.mp4";
import frontwall from "../videos/frontdoorwall.mp4";
import tv from "../videos/AboutUs.mp4";
import wifi from "../videos/wifi.mp4";
import btn from "../videos/circle.mp4";
import { useNavigate } from "react-router-dom";

function LobbyVideos() {
    const navigate = useNavigate();
    const handleMerchantClick = (event) => {
        event.stopPropagation();
        navigate("/smartmerchant");
        console.log("merchant button clicked"); // Replace "/your-route" with the desired path
      };
  return (
    <>
     <a-assets>
          <video
          // because when muted even when hard reloaded the videos are not playing dont be scared
            id="myvideo" preload="auto" src={wallbrand} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" muted
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            id="frontwall" preload="auto" src={frontwall} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" muted
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            id="tv" preload="auto" src={tv} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" muted
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            id="wifi" preload="auto" src={wifi} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" muted
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            id="btn" preload="auto" src={btn} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" muted
            playsInline=""
            webkit-playsinline=""
          ></video>
        </a-assets>
        <a-entity
        //checkout aframe material events
          material="shader: flat; side: double; src: #myvideo"
          geometry="primitive: cylinder; radius: 9.2; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 63;"
          position="-313 8 -128"
          rotation="0 -10 0"
          scale="-20.5 20.5 20.5"
          raycaster="objects: [gui-interactable]"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src: #frontwall"
          geometry="primitive: cylinder; radius: 15; height:5.05; open-ended: true; theta-start: 142.5; theta-length: 45;"
          position="-17 1.4 50"
          rotation="0 135 0"
          scale="-3 3 3"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src:#tv; opacity:1;"
          geometry="primitive: plane; width: 4.35; height: 2;"
          position="4.1 0.3 10"
          rotation="0 214 0"
          scale="0.8 0.8 0.8"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src: #wifi; opacity:1;"
          geometry="primitive: circle; radius: 0.8; theta-length: 360;"
          position="-11 -0.45 -30"
          rotation="0 10 0"
          scale="-1.2 1.2 1.2"
          onClick={handleMerchantClick}
          raycaster="objects: [gui-interactable]"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src: #wifi; opacity:1;"
          geometry="primitive: circle; radius: 0.8; theta-length: 360;"
          position="7.4 -0.3 -28"
          rotation="0 0 0"
          scale="-1 1 1"
          onClick={() => {
            alert(
              "hello the Payment Gateway is not ready yet, Please try again later"
            );
          }}
          raycaster="objects: [gui-interactable]"
        ></a-entity>
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
      
    </>
  )
}

export default LobbyVideos
