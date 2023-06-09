import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PanoramaViewer from "../PanoramaViewer";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Intro from "../pages/Intro";
import Opening from "../pages/Opening";
import PublicRoute from "../Routes.js/PublicRoute";
import PrivateRoute from "../Routes.js/PrivateRoute";
import { getToken } from "../service/AuthService";
import SmartMerchantHelper from "../helpers/SmartMerchantHelper";
import PrivacyPolicy from "../pages/PrivacyPolicy";
function RoutePages() {
  const location = useLocation();
  const authenticated=getToken() ? true: false; 

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/panorama" element={<PrivateRoute authenticated={authenticated} component={PanoramaViewer} />} />
          <Route path="/opening" element={<PrivateRoute authenticated={authenticated} component={Opening} />} />
          <Route path="/intro" element={<PrivateRoute authenticated={authenticated} component={Intro} />} />
          <Route path="/smartmerchant" element={<PrivateRoute authenticated={authenticated} component={SmartMerchantHelper} />} />
          <Route path="*" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default RoutePages;
