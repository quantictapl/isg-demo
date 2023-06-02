import React from 'react';
import store from "../SmartMerchantAssets/Store.glb"
import SmartMerchant from '../components/SmartMerchant';


function SmartMerchantHelper() {
  
  return (
    <div>
      
      <SmartMerchant 
      store={store} />
    </div>
  );
}

export default SmartMerchantHelper;