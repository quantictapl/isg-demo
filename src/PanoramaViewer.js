import React from 'react';
import Panorama from './Panorama';
import rough from './RoughLobby.jpg'
import model from './Test2.gltf'
import bird from './BirdNew.glb';
import girl from './Girl.glb'
import globe from './globeuu.glb'
import store from "./SmartMerchantAssets/Store.glb"

function PanoramaViewer() {
  return (
    <div>
      
      <Panorama src={rough}
      modelSrc={model}
      birdSrc={bird}
      girl={girl}
 
      globe={globe}
      store={store} />
    </div>
  );
}

export default PanoramaViewer;