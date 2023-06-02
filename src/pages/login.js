import "./Login.css";
import isgLogo from "../images/isglogo.png";
import DropShadow from "../images/DropShadowResized.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Light from "../components/Light";
import axios from "axios";
import { setUserSession } from "../service/AuthService";

const rotateAndSlideAnimation = {
  initial: {
    transform:
      "perspective(500rem) rotateY(60deg) translateX(-290%) scaleX(-50%) scaleY(-50%)",
    opacity: 0,
  },
  animate: {
    transform:
      "perspective(500rem) rotateY(0deg) translateX(0%) scaleX(100%) scaleY(100%)",
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
  exit: {
    transform: "translateX(200%)",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay:0,
    },
  },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.1
};
const opacityInc = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    duration: 1,
  },
};

const loginAPIUrl ="https://vyw54xaie6.execute-api.ap-south-1.amazonaws.com/prod/login";
function Login() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);

  const handleAnimation = () => {
    setShowSignup(true);
    navigate("/opening");
  };
  const handleAnimate = () => {
    setShowSignup(true);
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    if(username.trim()==='' || password.trim()===''){
      setErrorMessage("Both username and password are required")
      return;
    }
    setErrorMessage(null)
    const requestConfig = {
      headers: {
  
        'x-api-key': 'x6p8OE7iTo41rrs6qlbiM4rDR0N9hLR63fBR9x3j',
       
      }
    }
    const requestBody={
      username:username,
      password:password
    }
    axios.post(loginAPIUrl,requestBody,requestConfig).then((response)=>{
        setUserSession(response.data.user,response.data.token)
        navigate('/opening')
    }).catch((error)=>{
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(
          "sorry....the backend server is down!! please try again later"
        );
      }
    })
  }
  

  return (
    <div className="grad-bg">
      
      <div className="login-bg">
      <Light/>
        <form className="honey-comb" onSubmit={submitHandler}>        
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={opacityInc}
            transition={pageTransition}
          >
            <img className="drop-shadow-login" src={DropShadow} alt="" />
          </motion.div>
          
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={rotateAndSlideAnimation}
            transition={pageTransition}
            className="login-box"
          >
            <div className="login-content">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={opacityInc}
              ></motion.div>
              <img className="isg-logo" src={isgLogo} alt="Logo" />
              <input className="username" type="text" placeholder="Username" value={username} onChange={event=>setUsername(event.target.value)}  />
              <input
                className="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={event=>setPassword(event.target.value)}
              />
              <div className="check-container-login">
                <input type="checkbox" />
                <label className="term">Remember me</label>

                <input className="terms-input" type="checkbox" />
                <label className="terms">
                  By checking this box, I affirm that I have read the privacy
                  policy, agree to sharing my data, having it stored and
                  processed by ISG.
                </label>
              </div>
              <div className="btn-container">
                <button className="login button" type="submits">Login</button>
                <button
                  onClick={() => {
                    handleAnimate();
                    handleAnimation();
                    navigate('/signup')
                  }}
                  className="signup button"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        </form>
        {errorMessage && <p className="message">{errorMessage}</p>}
        </div>
    </div>
  );
}

export default Login;
