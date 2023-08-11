import React, { useEffect, useState } from 'react';
import store from "../SmartMerchantAssets/Store.glb"
import SmartMerchant from '../components/SmartMerchant';
import isgloading from "../videos/isgloading.webm"
import "../components/componentcss/SmartMerchant.css";

function SmartMerchantHelper() {
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  if (loading) {
    return <div className='loading-container'>
      <video
   
          src={isgloading}
          // onLoadedMetadata={handleLoadedMetadata}
          type="video/webm"
          muted
          controls={false}
          preload="auto"
          className="loading-video"
          autoPlay
        />
    </div>; // Replace this with your desired loading screen component
  }
  return (
    <div>
      
      <SmartMerchant 
      store={store} />
    </div>
  );
}

export default SmartMerchantHelper;