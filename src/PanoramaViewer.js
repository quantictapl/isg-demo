import React from 'react';
import Panorama from './Panorama';
import rough from './RoughLobby.jpg'
import model from './Test2.gltf'
import bird from './BirdNew.glb';

import globe from './globeuu.glb'
import ellie from "./Ellie.glb"
import store from "./SmartMerchantAssets/Store.glb"

function PanoramaViewer() {
  return (
    <div>
      
      <Panorama src={rough}
      modelSrc={model}
      birdSrc={bird}
      globe={globe}
      store={store}
      ellie={ellie} />
    </div>
  );
}

export default PanoramaViewer;