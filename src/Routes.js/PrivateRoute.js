import React from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import  {getToken} from '../service/AuthService';




function PrivateRoute({ component: Compontent,authenticated }) {
    console.log(authenticated)


  return authenticated ? <Compontent/> : <Navigate to="/login" />

}

export default PrivateRoute;
