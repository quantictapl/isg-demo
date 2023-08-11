import React, { useEffect, useState } from 'react'
import AppDemonstration from "./AppDemonstration"
import isgloading from "../videos/isgloading.webm"
function AppDemonstrationContainer() {
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
      return <div>
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
        <AppDemonstration/>
        
      </div>
    );
}

export default AppDemonstrationContainer
