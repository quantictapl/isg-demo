import React, { useEffect, useState, useRef } from "react";
import "../componentcss/demovideo.css";
import demoAudio from "../../SmartMerchantAssets/videos/demoSpeech1.webm";
import demoTransparent from "../../SmartMerchantAssets/videos/dialog2.webm";
import benifits from "../../SmartMerchantAssets/videos/benifits.webm";
import { FaBullseye, FaPause, FaPlay } from "react-icons/fa";
import { BsFillSkipForwardFill } from "react-icons/bs";
const subtitleVideos = [
  {
    audioSrc: demoAudio,
    videoSrc: demoTransparent,
  },
  {
    audioSrc: demoAudio,
    videoSrc: demoTransparent,
  },
];

function SubsLogic({
  onPlayPauseClick,
  onSkipClick,
  isPlaying,
  onNextVideoClick,
  videoEnded,
  cameraRotationEnded
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const audioRef = useRef(null);
  const transparentVideoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleSkipClick = () => {
    onSkipClick(); // Call the skip callback function from the parent
    setVideoVisible(false);
    setShowPlayButton(false);
  };

  useEffect(() => {
    const transparentVideoElement = transparentVideoRef.current;
  
    const playVideo = () => {
      transparentVideoElement.style.opacity = 1;
      transparentVideoElement.style.transform = "translateY(0)";
      transparentVideoElement.play();
    };
  
    const handleVideoEnd = () => {
      setVideoVisible(false); // Hide the transparent video after it ends
      setShowPlayButton(true);
      videoEnded();
    };
  
    transparentVideoElement.addEventListener("ended", handleVideoEnd);
  
    if (cameraRotationEnded) {
      setVideoVisible(true);
      playVideo();
    }
  
    // Wait for cameraRotationEnded to become true
    let checkInterval = setInterval(() => {
      if (cameraRotationEnded) {
        clearInterval(checkInterval);
        setVideoVisible(true);
        playVideo();
      }
    }, 100);
  
    return () => {
      clearInterval(checkInterval);
      transparentVideoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideoIndex, cameraRotationEnded]);
  useEffect(() => {
    if (videoEnded) {
      setShowPlayButton(false);
    }
  }, [videoEnded]);

  useEffect(() => {
    const audioElement = audioRef.current;
    const transparentVideoElement = transparentVideoRef.current;

    if (videoVisible) {
      audioElement.play();
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [videoVisible]);
  console.log(showPlayButton);
  const handleNextVideo = () => {
    if (currentVideoIndex < subtitleVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      onNextVideoClick(currentVideoIndex + 1);
      console.log(showPlayButton); // Call the callback function with the next video index
    } else {
      // All videos have been played, handle the end state here
    }
  };
  console.log(videoEnded);
 
  return (
    <div className="demo-subs-container">
      <button onClick={handleNextVideo} className="next-video-btn">Next</button>
      <div className="demo-subs-main-container">
      <video id="subsVideo"
            ref={transparentVideoRef}
            src={subtitleVideos[currentVideoIndex].videoSrc}
            type="video/webm"
            muted
            controls={false}
            preload="auto"
            className="demo-subs"
            style={{
              visibility: videoVisible ? "visible" : "hidden",
              opacity: 0,
              transform: "translateY(100%)",
              transition: "opacity 0.5s, transform 0.5s",
            }}
          />
        <div className="next-button-container">
          {showPlayButton  && (
            <div>
              <button className="subs-button" onClick={onPlayPauseClick}>
                {isPlaying ? (
                  
                     <FaPause className="smart-icon" />
                  
                ) : (
                  
                     <FaPlay className="smart-icon" />
                  
                )}
              </button>
              <button className="subs-button skip" onClick={handleSkipClick}>
                <div className="button-interior">
                  <BsFillSkipForwardFill className="smart-icon skip-icon" />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      <video 
        ref={audioRef}
        src={subtitleVideos[currentVideoIndex].audioSrc}
        type="video/webm"
        controls={false}
        preload="auto"
        className="demo-subs subs-audio"
      />

      
    </div>
  );
}

export default SubsLogic;
export function controlAnimation(model) {
  const subsVideo = document.getElementById('subsVideo');

  function startAnimation() {
    model.setAttribute('animation-mixer','clip:; loop: repeat; repetitions: Infinity;');
  }

  function stopAnimation() {
    model.removeAttribute('animation-mixer');
  }

  subsVideo.addEventListener('play', startAnimation);
  subsVideo.addEventListener('pause', stopAnimation);
  subsVideo.addEventListener('ended', stopAnimation);
}

// import React, { useEffect, useState, useRef } from 'react';
// import demoAudio from '../../SmartMerchantAssets/videos/demoSpeech1.webm';
// import demoTransparent from '../../SmartMerchantAssets/videos/dialog1.webm';
// import '../componentcss/demovideo.css';

// function SubsLogic({ onPlayPauseClick, onSkipClick, isPlaying }) {
//   const [showPlayButton, setShowPlayButton] = useState(false);
//   const [videoVisible, setVideoVisible] = useState(false);
//   const audioRef = useRef(null);
//   const transparentVideoRef = useRef(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handleSkipClick = () => {
//     onSkipClick(); // Call the skip callback function from the parent
//     setVideoVisible(false);
//     setShowPlayButton(false);
//   };

//   useEffect(() => {
//     const transparentVideoElement = transparentVideoRef.current;

//     const playVideo = () => {
//       transparentVideoElement.style.opacity = 1;
//       transparentVideoElement.style.transform = 'translateY(0)';
//       transparentVideoElement.play();
//     };

//     const handleVideoEnd = () => {
//       setVideoVisible(false); // Hide the transparent video after it ends
//       setShowPlayButton(true);
//     };

//     transparentVideoElement.addEventListener('ended', handleVideoEnd);

//     // Delay playback by 5 seconds
//     const delayPlayback = setTimeout(() => {
//       setVideoVisible(true);
//       playVideo();
//     }, 5000);

//     return () => {
//       clearTimeout(delayPlayback);
//       transparentVideoElement.removeEventListener('ended', handleVideoEnd);
//     };
//   }, []);

//   useEffect(() => {
//     const audioElement = audioRef.current;
//     const transparentVideoElement = transparentVideoRef.current;

//     if (videoVisible) {
//       audioElement.play();
//     } else {
//       audioElement.pause();
//       audioElement.currentTime = 0;
//     }

//     return () => {
//       audioElement.pause();
//       audioElement.currentTime = 0;
//     };
//   }, [videoVisible]);

//   return (
//     <div className="demo-subs-container">
//       <div className="next-button-container">
//       {showPlayButton && (
//         <>

//             <button className="subs-button" onClick={onPlayPauseClick}>
//             {isPlaying ? 'Pause' : 'Play'}
//             </button>
//           <button className="subs-button skip" onClick={onSkipClick}>
//             Skip
//           </button>
//         </>
//       )}
//       </div>
//       <video
//         ref={audioRef}
//         src={demoAudio}
//         type="video/webm"
//         controls={false}
//         preload="auto"
//         className="demo-subs subs-audio"
//       />
//       <video
//         ref={transparentVideoRef}
//         src={demoTransparent}
//         type="video/webm"
//         muted
//         controls={false}
//         preload="auto"
//         className="demo-subs"
//         style={{
//           visibility: videoVisible ? 'visible' : 'hidden',
//           opacity: 0,
//           transform: 'translateY(100%)',
//           transition: 'opacity 0.5s, transform 0.5s',
//         }}
//       />
//     </div>
//   );
// }

// export default SubsLogic;
