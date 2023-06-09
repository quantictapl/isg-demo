import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Signup.css";
import isgLogo from "../images/isglogo.png";
import GenderDropdown from "../components/GenderDropdown";
import IndustryDropdown from "../components/IndustryDropdown";
import Captcha from "../components/Captcha";
import DropShadow from "../images/DropShadowResized.png";
import Light from "../components/Light";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      duration: 2,
      delay: 0,
      ease: "easeInOut",
    },
  },
  exit: {
    transform: "translateX(200%)",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.1,
};
const opacityInc = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {},
  },
  exit: {
    opacity: 0,
    duration: 1,
  },
};
const registerUrl =
  "https://vyw54xaie6.execute-api.ap-south-1.amazonaws.com/prod/register";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState(null);
  const [gender, setGender] = useState("");
  const [industry, setIndustry] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const navigate=useNavigate();
  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption);
    
  };
  const handleIndustryChange = (selectedOption) => {
    setIndustry(selectedOption);
    
  };
  const handleCaptchaValidChange = (valid) => {
    setIsCaptchaValid(valid);
  };
  const handleTermsChange = (event) => {
    setIsTermsChecked(event.target.checked);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
      setMessage("All fields are required");
      return;
    }
    if (!isCaptchaValid) {
      setMessage("Please enter the correct CAPTCHA");
      return;
    }
    if (!isTermsChecked) {
      setMessage("Please accept the terms and conditions");
      return;
    }
    setMessage(null);
    const requestConfig = {
      headers: {
        "x-api-key": "x6p8OE7iTo41rrs6qlbiM4rDR0N9hLR63fBR9x3j",
      },
    };
    const requestBody = {
      email: email,
      username: email,
      name: name,
      password: password,
      designation:designation,
      company:company,
      phone:phone,
      gender:gender,
      industry:industry,
    };
    console.log("Request Body: ", requestBody); // Add this console.log statement
    axios
      .post(registerUrl, requestBody, requestConfig)
      .then((response) => {
        console.log("Response: ", response); // Add this console.log statement
        setMessage("Registeration Successful");

      })
      .catch((error) => {
        console.log("Error: ", error); // Add this console.log statement
        if (error.response.status === 401 || error.response.status === 403) {
          setMessage(error.response.data.message);
        } else {
          setMessage(
            "sorry....the backend server is down!! please try again later"
          );
        }
      });
  };

  return (
    <div className="grad-bg">
      <div className="signup-bg">
        <Light />
        <form className="honey-comb" onSubmit={submitHandler}>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={opacityInc}
            transition={pageTransition}
          >
            <img className="drop-shadow" src={DropShadow} alt="" />
          </motion.div>

          <motion.div
            className="signup-box"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={rotateAndSlideAnimation}
            transition={pageTransition}
          >
            <div className="signup-content">
              <img className="signup-isg-logo" src={isgLogo} alt="Logo" />
              <input
                className="signup-username signup-user"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="signup-username"
                type="text"
                placeholder="Company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
              <div className="drop-container">
                <GenderDropdown onGenderChange={handleGenderChange}/>
                <IndustryDropdown onIndustryChange={handleIndustryChange} />
              </div>
              <input
                className="signup-username"
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={(event) => setDesignation(event.target.value)}
              />
              <input
                className="signup-username"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="signup-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                className="signup-username"
                type="number"
                placeholder="Mobile"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <Captcha onCaptchaValidChange={handleCaptchaValidChange} />
              <div className="check-container-signup">
              <input type="checkbox" checked={isTermsChecked} onChange={handleTermsChange} />
                <label className="terms">
                  By checking this box, I affirm that I have read the <a href="/privacypolicy">Privacy Policy</a>
                  , agree to sharing my data, having it stored and
                  processed by ISG.
                </label>
              </div>
              <div className="btn-container">
                <button className="signup button">Submit</button>
                <button className="login button" onClick={()=>{
                  navigate("/login")
                }}>Login</button>
              </div>
             { message &&  <p className="message" id="message">{message}</p>}
            </div>
            
          </motion.div>
           
        </form>
      </div>
    </div>
  );
}

export default Signup;
