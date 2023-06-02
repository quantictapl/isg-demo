import React, { useState } from 'react'
import { BiRefresh } from 'react-icons/bi';
import './componentcss/Captcha.css'
import  GenerateCaptcha  from '../helpers/GenerateCaptcha';

function Captcha() {
  const [captchaText, setCaptchaText] = useState(GenerateCaptcha());

  const handleRefresh = () => {
    setCaptchaText(GenerateCaptcha());
  };

  const handleInputChange = (event) => {
    // Get the user input from the event object and validate it
    const userInput = event.target.value;
    const isCaptchaValid = userInput === captchaText;
    console.log('Captcha validation status:', isCaptchaValid);
  };

  return (
    <div className='captcha-container'>
        <input
          className='user-captcha'
          type='text'
          placeholder='Enter CAPTCHA'
          onChange={handleInputChange}
        />
        <div className='captcha-img-container'>
            <p className='captcha-text'>
              {captchaText.split('').map((char, index) => (
                <span key={index} className={`captcha-char char${index}`}>{char}</span>
              ))}
            </p>
            <button className='refresh-button' onClick={handleRefresh}>
              <BiRefresh />
            </button>
        </div>
    </div>
  )
}

export default Captcha;
